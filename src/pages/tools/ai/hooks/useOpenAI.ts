import { useState, useCallback } from 'react';

interface AIResponse {
  riceScore: {
    reach: number;
    impact: number;
    confidence: number;
    effort: number;
    total: number;
  };
  reasoning: {
    reach: string;
    impact: string;
    confidence: string;
    effort: string;
  };
  risks: string[];
  acceptanceCriteria: string[];
}

interface UseOpenAIResult {
  analyzeFeature: (feature: string, context: string, apiKey: string) => Promise<AIResponse | null>;
  isLoading: boolean;
  error: string | null;
}

export const useOpenAI = (): UseOpenAIResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeFeature = useCallback(async (feature: string, context: string, apiKey: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are a senior Product Manager expert in the RICE prioritization framework. 
              Analyze the feature request and return a JSON object with the following structure:
              {
                "riceScore": {
                  "reach": number (0-10000, estimated users per quarter),
                  "impact": number (0.25, 0.5, 1, 2, or 3),
                  "confidence": number (0-100 percentage),
                  "effort": number (person-weeks, 0.5-52),
                  "total": number (calculated score)
                },
                "reasoning": {
                  "reach": "brief explanation",
                  "impact": "brief explanation",
                  "confidence": "brief explanation",
                  "effort": "brief explanation"
                },
                "risks": ["risk 1", "risk 2"],
                "acceptanceCriteria": ["criteria 1", "criteria 2", "criteria 3"]
              }
              
              Be realistic and conservative in your estimates.
              Impact scores: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal.
              Confidence: 100% = high certainty, 80% = medium, 50% = low.`
            },
            {
              role: 'user',
              content: `Feature: ${feature}\nContext: ${context}`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to analyze feature');
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      try {
        const parsedResult = JSON.parse(content);
        // Recalculate total just in case
        parsedResult.riceScore.total = Math.round(
          (parsedResult.riceScore.reach * 
           parsedResult.riceScore.impact * 
           (parsedResult.riceScore.confidence / 100)) / 
           parsedResult.riceScore.effort
        );
        return parsedResult;
      } catch (e) {
        throw new Error('Failed to parse AI response');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { analyzeFeature, isLoading, error };
};
