import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1rem;
  }
`;

const MainCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  
  ${media.mobile} {
    padding: 25px 20px;
  }
`;

const InputSection = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: wait;
    transform: none;
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ResultsContainer = styled.div`
  margin-top: 40px;
`;

const StoryCard = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
  border-left: 4px solid #667eea;
`;

const StoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const StoryContent = styled.p`
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
`;

const AcceptanceTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
`;

const AcceptanceList = styled.ul`
  margin: 0;
  padding-left: 25px;
`;

const AcceptanceItem = styled.li`
  margin-bottom: 10px;
  color: #555;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #f8f9fa;
      transform: translateY(-2px);
    }
  `}
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const InfoBanner = styled.div`
  background: #f0f7ff;
  border: 1px solid #cce0ff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 30px;
  font-size: 0.95rem;
  color: #0052cc;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const ResetKeyButton = styled.button`
  background: none;
  border: none;
  color: #0052cc;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #003d99;
  }
`;

interface UserStory {
  title: string;
  story: string;
  acceptanceCriteria: string[];
}

interface GenerationResult {
  userStories: UserStory[];
}

const AIUserStoryGenerator: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);
  const [featureDescription, setFeatureDescription] = useState('');
  const [context, setContext] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<GenerationResult | null>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
      setApiKey(storedKey);
      setIsKeySet(true);
    }
  }, []);

  const handleKeySave = (key: string) => {
    setApiKey(key);
    setIsKeySet(true);
    localStorage.setItem('openai_api_key', key);
  };

  const handleKeyClear = () => {
    if (window.confirm('Are you sure you want to remove your API key?')) {
      setApiKey('');
      setIsKeySet(false);
      localStorage.removeItem('openai_api_key');
    }
  };

  const handleGenerate = async () => {
    if (!featureDescription.trim()) return;
    
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
              content: `You are a product manager writing user stories. Generate 3-5 well-formed user stories with acceptance criteria. Return a JSON object:
              {
                "userStories": [
                  {
                    "title": "Brief title",
                    "story": "As a [user type], I want [goal] so that [benefit]",
                    "acceptanceCriteria": ["criteria 1", "criteria 2", "criteria 3"]
                  }
                ]
              }
              Make stories specific, testable, and following best practices.`
            },
            {
              role: 'user',
              content: `Feature: ${featureDescription}\n\nContext: ${context || 'No additional context provided'}`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate user stories');
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      try {
        const parsedResult = JSON.parse(content);
        setResults(parsedResult);
      } catch (e) {
        throw new Error('Failed to parse AI response');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAll = () => {
    if (!results) return;

    const content = results.userStories.map((story, index) => `
${story.title}
${'='.repeat(story.title.length)}

${story.story}

Acceptance Criteria:
${story.acceptanceCriteria.map((ac, i) => `${i + 1}. ${ac}`).join('\n')}
`).join('\n\n---\n\n');

    navigator.clipboard.writeText(content);
    alert('User stories copied to clipboard!');
  };

  const handleExport = () => {
    if (!results) return;

    const content = `
USER STORIES
============

Date: ${new Date().toLocaleDateString()}
Feature: ${featureDescription}

${results.userStories.map((story, index) => `
${index + 1}. ${story.title}
${'='.repeat(story.title.length + 3)}

Story:
${story.story}

Acceptance Criteria:
${story.acceptanceCriteria.map((ac, i) => `  ${i + 1}. ${ac}`).join('\n')}
`).join('\n')}

---
Generated with AI User Story Generator
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `user-stories-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isKeySet) {
    return (
      <PageContainer>
        <ContentWrapper>
          <Header>
            <Title>AI User Story Generator</Title>
            <Description>
              Generate complete user stories with acceptance criteria from brief feature descriptions.
            </Description>
          </Header>
          <APIKeySetup onSave={handleKeySave} />
        </ContentWrapper>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>AI User Story Generator</Title>
          <Description>
            Describe a feature briefly and get complete user stories with acceptance criteria.
          </Description>
        </Header>

        <InfoBanner>
          <span>✨ AI Model: GPT-4 • API Key stored locally</span>
          <ResetKeyButton onClick={handleKeyClear}>Change API Key</ResetKeyButton>
        </InfoBanner>

        <MainCard>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <InputSection>
            <Label>Feature Description</Label>
            <TextArea
              placeholder="e.g., Add ability for users to export their data in CSV format"
              value={featureDescription}
              onChange={(e) => setFeatureDescription(e.target.value)}
              autoFocus
            />
          </InputSection>

          <InputSection>
            <Label>Additional Context (Optional)</Label>
            <TextArea
              placeholder="e.g., Target users are enterprise customers who need to integrate with their BI tools. Priority is high."
              value={context}
              onChange={(e) => setContext(e.target.value)}
              style={{ minHeight: '100px' }}
            />
          </InputSection>

          <GenerateButton onClick={handleGenerate} disabled={isLoading || !featureDescription.trim()}>
            {isLoading ? (
              <>
                <Spinner /> Generating User Stories...
              </>
            ) : (
              <>
                ✨ Generate User Stories
              </>
            )}
          </GenerateButton>

          {results && (
            <ResultsContainer>
              {results.userStories.map((story, index) => (
                <StoryCard key={index}>
                  <StoryTitle>{story.title}</StoryTitle>
                  <StoryContent>"{story.story}"</StoryContent>
                  <AcceptanceTitle>✅ Acceptance Criteria</AcceptanceTitle>
                  <AcceptanceList>
                    {story.acceptanceCriteria.map((criteria, i) => (
                      <AcceptanceItem key={i}>{criteria}</AcceptanceItem>
                    ))}
                  </AcceptanceList>
                </StoryCard>
              ))}

              <ButtonGroup>
                <ActionButton variant="primary" onClick={handleCopyAll}>
                  📋 Copy All
                </ActionButton>
                <ActionButton variant="secondary" onClick={handleExport}>
                  📄 Export
                </ActionButton>
                <ActionButton variant="secondary" onClick={() => setResults(null)}>
                  🔄 Generate New
                </ActionButton>
              </ButtonGroup>
            </ResultsContainer>
          )}
        </MainCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AIUserStoryGenerator;
