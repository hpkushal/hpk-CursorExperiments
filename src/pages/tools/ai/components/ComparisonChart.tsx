import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../../styles/GlobalStyles';

const ChartContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const MatrixContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 30px;
  overflow: hidden;
  
  ${media.mobile} {
    height: 350px;
  }
`;

const AxisLabel = styled.div<{ position: 'bottom' | 'left' }>`
  position: absolute;
  font-weight: 700;
  color: #666;
  font-size: 0.9rem;
  
  ${props => props.position === 'bottom' ? `
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  ` : `
    top: 50%;
    left: 10px;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: left center;
  `}
`;

const QuadrantLabel = styled.div<{ top: boolean; right: boolean }>`
  position: absolute;
  top: ${props => props.top ? '20px' : 'auto'};
  bottom: ${props => props.top ? 'auto' : '20px'};
  left: ${props => props.right ? 'auto' : '20px'};
  right: ${props => props.right ? '20px' : 'auto'};
  font-weight: 800;
  color: rgba(0,0,0,0.05);
  font-size: 2rem;
  text-transform: uppercase;
  z-index: 0;
  pointer-events: none;
`;

const GridLine = styled.div<{ vertical?: boolean }>`
  position: absolute;
  background: #f0f0f0;
  
  ${props => props.vertical ? `
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
  ` : `
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
  `}
`;

const Bubble = styled.div<{ x: number; y: number; size: number; color: string }>`
  position: absolute;
  left: ${props => props.x}%;
  bottom: ${props => props.y}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  transform: translate(-50%, 50%);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  
  &:hover {
    transform: translate(-50%, 50%) scale(1.2);
    z-index: 10;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
  transform: translate(-50%, -150%);
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #666;
`;

const ColorDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e0e0e0;
`;

const ComparisonChart: React.FC = () => {
  const [features, setFeatures] = useState<any[]>([]);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    const storedFeatures = JSON.parse(localStorage.getItem('feature_backlog') || '[]');
    setFeatures(storedFeatures);
  }, []);

  if (features.length === 0) {
    return (
      <EmptyState>
        <h3>No features to compare</h3>
        <p>Add features to your backlog first to see the comparison matrix.</p>
      </EmptyState>
    );
  }

  // Normalize data for plotting
  // X axis: Effort (Low to High -> inverted for matrix usually, but let's do Standard: Left=Low Effort, Right=High Effort)
  // Actually, standard Impact/Effort matrix:
  // Y axis: Impact (Low to High)
  // X axis: Effort (Low to High)
  // Quick Wins: High Impact, Low Effort (Top Left)
  // Major Projects: High Impact, High Effort (Top Right)
  // Fill-ins: Low Impact, Low Effort (Bottom Left)
  // Thankless Tasks: Low Impact, High Effort (Bottom Right)

  const maxEffort = Math.max(...features.map(f => f.score.effort), 10);
  const maxImpact = 3; // Impact is usually 0.25 to 3

  return (
    <ChartContainer>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Impact vs. Effort Matrix</h3>
      
      <MatrixContainer>
        <GridLine />
        <GridLine vertical />
        
        <QuadrantLabel top={true} right={false}>Quick Wins</QuadrantLabel>
        <QuadrantLabel top={true} right={true}>Big Bets</QuadrantLabel>
        <QuadrantLabel top={false} right={false}>Fill-ins</QuadrantLabel>
        <QuadrantLabel top={false} right={true}>Money Pit</QuadrantLabel>
        
        <AxisLabel position="bottom">Effort (Weeks) →</AxisLabel>
        <AxisLabel position="left">Impact (Value) →</AxisLabel>

        {features.map((feature, index) => {
          // Calculate positions
          // X: Effort (0 to maxEffort) -> 0% to 100%
          const x = (feature.score.effort / maxEffort) * 90 + 5; // padding
          
          // Y: Impact (0 to 3) -> 0% to 100%
          const y = (feature.score.impact / maxImpact) * 90 + 5;
          
          // Size: Reach (log scale maybe?)
          const size = Math.min(Math.max(Math.log(feature.score.reach) * 5, 20), 60);
          
          // Color based on confidence
          const color = feature.score.confidence >= 80 ? '#00d4aa' : 
                       feature.score.confidence >= 50 ? '#667eea' : '#ff9f43';

          return (
            <div 
              key={feature.id} 
              style={{ position: 'absolute', left: `${x}%`, bottom: `${y}%` }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <Bubble 
                x={0} 
                y={0} 
                size={size} 
                color={color}
              >
                {index + 1}
              </Bubble>
              
              {hoveredFeature === feature.id && (
                <Tooltip>
                  <strong>{feature.feature}</strong><br/>
                  RICE Score: {feature.score.total}<br/>
                  Reach: {feature.score.reach}
                </Tooltip>
              )}
            </div>
          );
        })}
      </MatrixContainer>

      <Legend>
        <LegendItem><ColorDot color="#00d4aa" /> High Confidence</LegendItem>
        <LegendItem><ColorDot color="#667eea" /> Medium Confidence</LegendItem>
        <LegendItem><ColorDot color="#ff9f43" /> Low Confidence</LegendItem>
        <LegendItem>Bubble Size = Reach</LegendItem>
      </Legend>
      
      <div style={{ marginTop: '40px' }}>
        <h4>Feature Key</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '10px' }}>
          {features.map((feature, index) => (
            <li key={feature.id} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem', color: '#555' }}>
              <span style={{ 
                background: '#667eea', 
                color: 'white', 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </span>
              {feature.feature}
            </li>
          ))}
        </ul>
      </div>
    </ChartContainer>
  );
};

export default ComparisonChart;
