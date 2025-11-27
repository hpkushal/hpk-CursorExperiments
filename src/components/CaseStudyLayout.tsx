import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GetInTouchSection from './GetInTouchSection';

const CaseStudyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #1f2937;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const Breadcrumb = styled.nav`
  margin-bottom: 40px;
  font-size: 14px;
  color: #6b7280;
  
  a {
    color: #6366f1;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Category = styled.span`
  display: inline-block;
  background: #f3f4f6;
  color: #6b7280;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 30px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const AuthorDetails = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const HeroImageSection = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 60px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 40px;
    border-radius: 15px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TLDRSection = styled(motion.div)`
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 50px;
`;

const TLDRTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f2937;
`;

const KeyResults = styled.div`
  margin-bottom: 25px;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const ResultIcon = styled.span`
  font-size: 1.2rem;
`;

const MetricsTable = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MetricCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
`;

const MetricLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

const MetricBefore = styled.div`
  color: #dc2626;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MetricAfter = styled.div`
  color: #059669;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1f2937;
`;

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;

  p {
    margin-bottom: 20px;
  }

  strong {
    color: #1f2937;
    font-weight: 600;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
    }
  }
`;

const Quote = styled.blockquote`
  border-left: 4px solid #6366f1;
  padding-left: 20px;
  margin: 30px 0;
  font-style: italic;
  font-size: 1.1rem;
  color: #4b5563;
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
`;

const QuoteAuthor = styled.div`
  margin-top: 15px;
  font-weight: 600;
  color: #1f2937;
  font-style: normal;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
`;

const Tag = styled.span`
  background: #e0e7ff;
  color: #3730a3;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  heroImage: {
    src: string;
    alt: string;
  };
  tldr: {
    keyResults: string[];
    metrics: Array<{
      label: string;
      before: string;
      after: string;
    }>;
  };
  customer: {
    title: string;
    content: React.ReactNode;
  };
  problem: {
    title: string;
    content: React.ReactNode;
    quote?: {
      text: string;
      author: string;
    };
  };
  solution: {
    title: string;
    content: React.ReactNode;
    features?: string[];
    quote?: {
      text: string;
      author: string;
    };
  };
  impact: {
    title: string;
    content: React.ReactNode;
    quote?: {
      text: string;
      author: string;
    };
  };
  tags: string[];
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  category,
  title,
  subtitle,
  date,
  heroImage,
  tldr,
  customer,
  problem,
  solution,
  impact,
  tags
}) => {
  return (
    <>
      <CaseStudyContainer>
        <Breadcrumb>
          <Link 
            to="/projects"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
              });
            }}
          >
            ← Back to Projects
          </Link>
        </Breadcrumb>

        <Header>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          
          <AuthorInfo>
            <AuthorAvatar>KP</AuthorAvatar>
            <AuthorDetails>
              <div><strong>Kushal Parameshwara</strong></div>
              <div>{date}</div>
            </AuthorDetails>
          </AuthorInfo>
        </Header>

        <HeroImageSection>
          <HeroImage src={heroImage.src} alt={heroImage.alt} />
        </HeroImageSection>

        <TLDRSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TLDRTitle><strong>TL;DR</strong></TLDRTitle>
          
          <KeyResults>
            <strong>Key Results:</strong>
            {tldr.keyResults.map((result, index) => (
              <ResultItem key={index}>
                <ResultIcon>🚀</ResultIcon>
                <span dangerouslySetInnerHTML={{ __html: result }} />
              </ResultItem>
            ))}
          </KeyResults>

          <MetricsTable>
            {tldr.metrics.map((metric, index) => (
              <MetricCard key={index}>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricBefore>❌ {metric.before}</MetricBefore>
                <MetricAfter>✅ {metric.after}</MetricAfter>
              </MetricCard>
            ))}
          </MetricsTable>
        </TLDRSection>

        <Section>
          <SectionTitle>{customer.title}</SectionTitle>
          <SectionContent>{customer.content}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>{problem.title}</SectionTitle>
          <SectionContent>{problem.content}</SectionContent>
          {problem.quote && (
            <Quote>
              "{problem.quote.text}"
              <QuoteAuthor>- {problem.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        <Section>
          <SectionTitle>{solution.title}</SectionTitle>
          <SectionContent>{solution.content}</SectionContent>
          {solution.features && (
            <SectionContent>
              <strong>Key Features Implemented:</strong>
              <ul>
                {solution.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </SectionContent>
          )}
          {solution.quote && (
            <Quote>
              "{solution.quote.text}"
              <QuoteAuthor>- {solution.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        <Section>
          <SectionTitle>{impact.title}</SectionTitle>
          <SectionContent>{impact.content}</SectionContent>
          {impact.quote && (
            <Quote>
              "{impact.quote.text}"
              <QuoteAuthor>- {impact.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        <TagList>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagList>
      </CaseStudyContainer>

      <GetInTouchSection />
    </>
  );
};

export default CaseStudyLayout; 