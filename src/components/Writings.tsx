import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Main Container
const WritingsContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Hero Section
const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
  
  ${media.mobile} {
    margin-bottom: 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.tablet} {
    font-size: 2.8rem;
  }
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  ${media.mobile} {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Filter Section
const FilterSection = styled.div`
  margin-bottom: 60px;
  
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  
  ${media.mobile} {
    gap: 10px;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e0e0e0'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }
  
  ${media.mobile} {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// Articles Grid
const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  
  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
  }
  
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
  }
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleImage = styled.div<{ backgroundImage: string }>`
  height: 250px;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)), url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ArticleCard}:hover &::before {
    opacity: 1;
  }
`;

const ArticleContent = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #888;
`;

const ReadTime = styled.span`
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 8px;
`;

const PublishDate = styled.span``;

const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #f8f9fa;
  color: #666;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
`;

// Article data
export const articles = [
  // New articles (Latest)
    {
    id: 'pm-os-2025',
    title: 'My PM Operating System for 2025: Working With AI as a True Partner',
    excerpt: 'After a year of experimenting, here\'s how I actually work with LLMs: the delegation framework, decision-making rituals, and hard lessons learned.',
    category: 'Product Management',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop',
    readTime: '14 min read',
    date: 'Nov 26, 2025',
    tags: ['Product Management', 'AI Delegation', 'Data Storytelling', 'Strategy', 'Playbooks']
  },
    {
      id: 'great-ai-model-commoditization',
      title: 'The Great AI Model Commoditization: Why I Stopped Caring About GPT-5',
      excerpt: 'When every model performs within 5% of every other model, the real competition moves elsewhere. Here\'s where I\'m looking now.',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
      readTime: '11 min read',
      date: 'Nov 18, 2025',
      tags: ['AI Models', 'Commoditization', 'Strategy', 'Open Source', 'Infrastructure']
    },
   {
     id: 'ai-governance-gap',
    title: 'The AI Governance Gap: What I\'ve Learned About Regulation That\'s Already Obsolete',
    excerpt: 'After watching governments struggle to keep up with AI, I\'ve concluded that companies must build their own governance frameworks.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 20, 2025',
    tags: ['AI Governance', 'Regulation', 'Policy', 'Risk Management', 'Strategy']
  },
  {
    id: 'multimodal-ai-end-of-specialized-software',
    title: 'The Day I Realized Specialized Software Was Dying',
    excerpt: 'I spent 15 years mastering Photoshop, Premiere, and a dozen other tools. Then multimodal AI made most of that expertise optional.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 15, 2025',
    tags: ['Multimodal AI', 'Software Industry', 'Application Development', 'AI Integration', 'Technology Disruption']
  },
  {
    id: 'ai-infrastructure-wars',
    title: 'The AI Infrastructure Wars: Why I\'m Watching the Computing Layer More Than Models',
    excerpt: 'Everyone\'s talking about GPT-5 and Claude 4. But the real battle for AI\'s future is being fought at the infrastructure level.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 10, 2025',
    tags: ['AI Infrastructure', 'Cloud Computing', 'Semiconductors', 'Geopolitics', 'Strategy']
  },
  {
    id: 'platform-economics-unbundling-rebundling',
    title: 'The Pattern That Keeps Repeating: Unbundling and Rebundling',
    excerpt: 'After 15 years of watching platforms rise and fall, I\'ve learned to recognize the cycle. Here\'s how to spot where we are and where opportunity lies.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    readTime: '14 min read',
    date: 'Nov 15, 2025',
    tags: ['Platform Economics', 'Business Strategy', 'Digital Transformation', 'Market Dynamics', 'Innovation']
  },
  {
    id: 'creator-economy-maturation',
    title: 'The Creator Economy Grows Up: What I\'ve Learned About Building a Sustainable Creator Business',
    excerpt: 'After watching hundreds of creators rise and fall, here\'s what separates those who last from those who burn out.',
    category: 'Industry Evolution',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 5, 2025',
    tags: ['Creator Economy', 'Digital Business', 'Content Strategy', 'Entrepreneurship', 'AI']
  },
  {
    id: 'attention-economy-backlash',
    title: 'The Attention Economy Backlash: Why I\'m Betting on Digital Minimalism',
    excerpt: 'After years of watching attention capture dominate tech, I\'m convinced the tide is turning. Here\'s why.',
    category: 'Society & Culture',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 12, 2025',
    tags: ['Digital Wellbeing', 'Technology Ethics', 'Consumer Behavior', 'Product Strategy', 'Minimalism']
  },
  {
    id: 'ai-alignment-control-problem',
    title: 'Why I Think About AI Alignment Differently Now',
    excerpt: 'After diving deep into this challenge, I\'ve realized the problem isn\'t just technical. It\'s philosophical, social, and deeply human.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 15, 2025',
    tags: ['AI Alignment', 'AI Safety', 'Ethics', 'Technology Policy', 'Philosophy']
  },
  {
    id: 'ai-regulation-innovation-balance',
    title: 'AI Regulation: My Take on the Innovation vs. Safety Debate',
    excerpt: 'After watching different jurisdictions try different approaches, here\'s what I think actually works.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 8, 2025',
    tags: ['AI Regulation', 'Policy', 'Innovation', 'Governance', 'Strategy']
  },
  {
    id: 'consulting-industry-ai-disruption',
    title: 'The Consulting Industry\'s AI Reckoning: What I\'m Seeing Inside the Firms',
    excerpt: '40% of consulting work can now be augmented or automated by AI. Here\'s what that means for the trillion-dollar industry.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 22, 2025',
    tags: ['Consulting', 'AI Transformation', 'Professional Services', 'Future of Work', 'Strategy']
  },
  {
    id: 'growth-hacking-maturation',
    title: 'From Growth Hacks to Growth Science: My Journey',
    excerpt: 'I spent years chasing viral tricks before realizing the real magic is in systematic, data-driven growth engines.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 28, 2025',
    tags: ['Growth Strategy', 'Marketing', 'Product-Led Growth', 'Data Science', 'Startups']
  },
  {
    id: 'pricing-psychology-revolution',
    title: 'What I Learned Rebuilding Our Entire Pricing Strategy',
    excerpt: 'We were leaving 40% of revenue on the table. Not because our product was wrong, but because our pricing psychology was stuck in 2015.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 18, 2025',
    tags: ['Pricing Strategy', 'Behavioral Economics', 'AI', 'Business Models', 'Marketing']
  },







  // Original articles
  {
    id: 'ai-winter-that-never-came',
    title: 'The AI Winter That Never Came: Why I\'m Convinced This Time Is Different',
    excerpt: 'History predicted another bust. The fundamentals say otherwise. Here\'s what I\'m seeing that changes everything.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 15, 2025',
    tags: ['AI', 'Tech Trends', 'Innovation', 'History', 'Analysis']
  },
  {
    id: 'beyond-chatgpt-enterprise-ai',
    title: 'Beyond ChatGPT: What Enterprise AI Actually Looks Like',
    excerpt: 'The real AI revolution is happening in back offices and factory floors, not in demo videos. Here\'s what I\'m seeing.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 22, 2025',
    tags: ['Enterprise AI', 'Business Strategy', 'Implementation', 'AI Adoption', 'Digital Transformation']
  },
  {
    id: 'great-ai-talent-war',
    title: 'The Great AI Talent War: Why I\'m Watching Where People Go, Not What Models Release',
    excerpt: 'Talent flow predicts industry direction better than product announcements. Here\'s what the migration patterns reveal.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 18, 2025',
    tags: ['Talent', 'Tech Industry', 'Career', 'AI', 'Workforce']
  },
  {
    id: 'venture-capital-new-playbook',
    title: 'The VC Playbook Has Changed Forever: What I\'ve Learned',
    excerpt: 'After watching the 2022-2024 correction from the inside, here\'s what I know about how VCs actually evaluate startups now.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 8, 2025',
    tags: ['Venture Capital', 'Startups', 'Funding', 'Business Strategy', 'Entrepreneurship']
  },
  {
    id: 'subscription-economy-next-chapter',
    title: 'What I Learned Building Subscription Businesses for a Decade',
    excerpt: 'The subscription economy has matured. The playbook that worked in 2015 doesn\'t work in 2025. Here\'s what actually drives retention and growth now.',
    category: 'Industry Evolution',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 14, 2025',
    tags: ['Business Models', 'SaaS', 'Subscription', 'Recurring Revenue', 'Customer Retention']
  },
  {
    id: 'remote-work-settlement',
    title: 'The Remote Work Settlement: What I Learned Managing Distributed Teams for 5 Years',
    excerpt: 'After the RTO wars, the hybrid model won. But making it work requires more intentionality than most leaders realize.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 25, 2025',
    tags: ['Remote Work', 'Future of Work', 'Productivity', 'Company Culture', 'Management']
  },
  {
    id: 'death-of-ten-year-business-plan',
    title: 'The Death of the 10-Year Business Plan: Why I Stopped Making Long-Term Predictions',
    excerpt: 'In a world where AI can disrupt industries in 12 months, rigid planning is a liability. Here\'s what I do instead.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 12, 2025',
    tags: ['Strategy', 'Business Planning', 'Agility', 'Leadership', 'Innovation']
  }
];

const categories = ['All', 'AI & Technology', 'Business & Strategy', 'Industry Evolution', 'Society & Culture', 'Product Management'];

const Writings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Sort articles by date (descending)
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate dynamic stats
  const totalArticles = articles.length;
  const totalCategories = categories.length - 1; // Subtract 'All' category
  const estimatedWords = totalArticles * 4000; // Average 4k words per article
  const currentYear = new Date().getFullYear();

  const navigateToArticle = (articleId: string) => {
    navigate(`/writings/${articleId}`);
  };

  return (
    <WritingsContainer>
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Writings</HeroTitle>
          <HeroSubtitle>
            Thoughts on technology, business, and the forces shaping our digital future. 
            Analysis, observations, and insights from the intersection of tech and society.
          </HeroSubtitle>
          
          <StatsGrid>
            <StatCard>
              <StatNumber>{totalArticles}</StatNumber>
              <StatLabel>Articles</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{totalCategories}</StatNumber>
              <StatLabel>Categories</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{Math.round(estimatedWords / 1000)}k+</StatNumber>
              <StatLabel>Words</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{currentYear}</StatNumber>
              <StatLabel>Active Year</StatLabel>
            </StatCard>
          </StatsGrid>
        </HeroSection>

        <FilterSection>
          <FilterTitle>Explore by Category</FilterTitle>
          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterSection>

        <ArticlesGrid>
          {sortedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              onClick={() => navigateToArticle(article.id)}
            >
              <ArticleImage backgroundImage={article.image} />
              <ArticleContent>
                <ArticleCategory>{article.category}</ArticleCategory>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleMeta>
                  <PublishDate>{article.date}</PublishDate>
                  <ReadTime>{article.readTime}</ReadTime>
                </ArticleMeta>
                <ArticleTags>
                  {article.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ArticleTags>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </ContentWrapper>
    </WritingsContainer>
  );
};

export default Writings; 