export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  metrics: ProjectMetric[];
  techStack: string[];
  impact: string;
  caseStudy: CaseStudy;
  caseStudyUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Prototyping Framework",
    category: "Product Innovation",
    description: "Co-developed an AI-powered prototyping framework leveraging Cursor AI for code automation and Figma AI for design, revolutionizing our development process.",
    metrics: [
      { label: "Development Time Reduction", value: "50%" },
      { label: "MVP Launch Timeline", value: "12w → 6w" },
      { label: "Team Productivity Gain", value: "2x" }
    ],
    techStack: ["Cursor AI", "Figma AI", "React", "TypeScript", "API Design"],
    impact: "Cut development cycles in half and reduced MVP launch timelines from 12 weeks to 6 weeks",
    caseStudy: {
      challenge: "Traditional development cycles were too slow for rapid market validation and competitive positioning.",
      solution: "Implemented an integrated AI-powered framework combining code automation and design tools to streamline the entire prototyping process.",
      results: "Achieved 50% reduction in development time, enabling faster market entry and improved team efficiency."
    },
    caseStudyUrl: "/projects/ai-prototyping-framework"
  },
  {
    id: 2,
    title: "Multi-Brand Digital Platform Launch",
    category: "Strategic Leadership",
    description: "Led strategic planning and execution of product roadmaps using SAFe Agile frameworks, launching 2 new digital brands and rebranding 3 post-acquisitions.",
    metrics: [
      { label: "Annual Recurring Revenue", value: "$2M+" },
      { label: "Brands Launched", value: "5" },
      { label: "Market Expansion", value: "Global" }
    ],
    techStack: ["SAFe Agile", "Product Roadmapping", "Brand Strategy", "Market Analysis"],
    impact: "Generated $2M+ ARR across five digital brands while establishing global market presence",
    caseStudy: {
      challenge: "Need to rapidly scale digital presence across multiple brands while maintaining consistency and market positioning.",
      solution: "Implemented SAFe Agile frameworks with cross-functional alignment to accelerate time-to-market for multiple brand launches.",
      results: "Successfully launched 5 digital brands generating $2M+ ARR with improved market positioning."
    },
    caseStudyUrl: "/projects/multi-brand-launch"
  },
  {
    id: 3,
    title: "Loyalty Program Platform",
    category: "Product Development",
    description: "Developed and launched a comprehensive loyalty program using Open Loyalty's API-first engine, leveraging real-time data to personalize rewards and drive engagement.",
    metrics: [
      { label: "User Engagement", value: "+35%" },
      { label: "Customer Retention", value: "+28%" },
      { label: "API Integrations", value: "10+" }
    ],
    techStack: ["Open Loyalty API", "Real-time Analytics", "Personalization Engine", "Customer Journey Mapping"],
    impact: "Significantly improved customer engagement and retention through personalized reward experiences",
    caseStudy: {
      challenge: "Low customer retention and engagement rates across digital touchpoints.",
      solution: "Built an API-first loyalty platform with real-time data integration and personalized reward mechanisms.",
      results: "Achieved 35% increase in user engagement and 28% improvement in customer retention."
    },
    caseStudyUrl: "/projects/loyalty-program-platform"
  },
  {
    id: 4,
    title: "A/B Testing Framework Implementation",
    category: "Growth Optimization",
    description: "Collaborated on the launch of comprehensive A/B testing frameworks using Optimizely, Google Optimize, and VWO to optimize user activation and conversion rates.",
    metrics: [
      { label: "User Activation Boost", value: "+10%" },
      { label: "Free-to-Paid Conversion", value: "+10%" },
      { label: "Testing Velocity", value: "3x" }
    ],
    techStack: ["Optimizely", "Google Optimize", "VWO", "Analytics", "Statistical Analysis"],
    impact: "Boosted user activation and free-to-paid conversion by 10% within 12 months",
    caseStudy: {
      challenge: "Inconsistent conversion rates and lack of systematic optimization processes.",
      solution: "Implemented comprehensive A/B testing framework with multiple tools for different use cases and rapid iteration cycles.",
      results: "Achieved 10% improvement in both user activation and conversion rates with increased testing velocity."
    },
    caseStudyUrl: "/projects/ab-testing-framework"
  },
  {
    id: 5,
    title: "Healthcare Professionals Platform",
    category: "Content Strategy",
    description: "Built and managed a targeted Healthcare Professionals website using WordPress, creating a comprehensive resource hub with educational content and infographics.",
    metrics: [
      { label: "Professional Engagement", value: "+45%" },
      { label: "Content Accessibility", value: "+60%" },
      { label: "Resource Utilization", value: "+50%" }
    ],
    techStack: ["WordPress", "Content Management", "Healthcare UX", "Educational Design"],
    impact: "Increased healthcare professional engagement through accessible, patient-friendly educational resources",
    caseStudy: {
      challenge: "Healthcare professionals needed accessible, comprehensive educational resources in a user-friendly format.",
      solution: "Developed a WordPress-based platform with structured educational content, infographics, and improved accessibility.",
      results: "Significantly increased professional engagement and resource utilization with improved content accessibility."
    },
    caseStudyUrl: "/projects/healthcare-platform"
  },
  {
    id: 6,
    title: "Performance Marketing Optimization",
    category: "Revenue Generation",
    description: "Leveraged Matomo and CRM analytics to refine campaign ROI, identifying high-value segments and optimizing paid media performance.",
    metrics: [
      { label: "Attributed Revenue", value: "$1M+" },
      { label: "CAC Reduction", value: "-25%" },
      { label: "Lead-to-MQL Conversion", value: "+30%" }
    ],
    techStack: ["Matomo Analytics", "CRM Integration", "Programmatic Ads", "Conversion Optimization"],
    impact: "Generated $1M+ in attributed revenue through data-driven campaign optimization and segment identification",
    caseStudy: {
      challenge: "Inefficient ad spend and poor visibility into high-value customer segments.",
      solution: "Implemented comprehensive analytics tracking with CRM integration to identify and optimize for high-value segments.",
      results: "Achieved $1M+ attributed revenue with 25% CAC reduction and 30% improvement in lead quality."
    },
    caseStudyUrl: "/projects/performance-marketing-optimization"
  },
  {
    id: 7,
    title: "Marketing Automation Infrastructure",
    category: "Process Optimization",
    description: "Built and maintained comprehensive marketing automation infrastructure supporting the complete customer journey from acquisition to retention.",
    metrics: [
      { label: "Lead-to-Customer Conversion", value: "+20%" },
      { label: "Automation Efficiency", value: "+40%" },
      { label: "Customer Journey Optimization", value: "End-to-End" }
    ],
    techStack: ["Marketing Automation", "CRM Integration", "Email Workflows", "Customer Journey Mapping"],
    impact: "Improved lead-to-customer conversion by 20% through automated, personalized customer journeys",
    caseStudy: {
      challenge: "Manual processes were causing lead leakage and inconsistent customer experiences.",
      solution: "Built comprehensive automation infrastructure with personalized workflows and trigger-based communications.",
      results: "Achieved 20% improvement in conversion rates with 40% increase in process efficiency."
    },
    caseStudyUrl: "/projects/marketing-automation"
  },
  {
    id: 8,
    title: "API Integration Suite",
    category: "Technical Product Management",
    description: "Collaborated with engineering to define API specifications for 10+ integrations, resolving critical customer workflow gaps and improving retention.",
    metrics: [
      { label: "API Integrations", value: "10+" },
      { label: "Customer Retention", value: "+15%" },
      { label: "Workflow Efficiency", value: "+35%" }
    ],
    techStack: ["API Design", "System Integration", "Workflow Optimization", "Customer Success"],
    impact: "Resolved critical customer workflow gaps through strategic API integrations, driving improved retention",
    caseStudy: {
      challenge: "Customers were experiencing workflow disruptions due to lack of system integrations.",
      solution: "Collaborated with engineering to design and implement comprehensive API integration suite addressing key customer needs.",
      results: "Successfully delivered 10+ integrations resulting in 15% improvement in customer retention."
    },
    caseStudyUrl: "/projects/api-integration-suite"
  }
];

export const projectCategories = [
  "All Projects",
  "Product Innovation",
  "Strategic Leadership", 
  "Growth Optimization",
  "Revenue Generation",
  "Process Optimization",
  "Technical Product Management",
  "Content Strategy",
  "Product Development"
];

