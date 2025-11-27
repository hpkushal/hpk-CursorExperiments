import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: #FFFFFF !important;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background: #FFFFFF !important;
    background-color: #FFFFFF !important;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  /* Mobile touch optimizations */
  @media (max-width: 480px) {
    body {
      font-size: 16px; /* Prevents zoom on iOS */
    }
    
    input, textarea, select {
      font-size: 16px; /* Prevents zoom on iOS */
    }
    
    button {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }
    
    a {
      -webkit-tap-highlight-color: transparent;
    }
  }

  /* Improved scrolling on mobile */
  * {
    -webkit-overflow-scrolling: touch;
  }

  /* Keyframe animations from original */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
  }

  @keyframes floatCode1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    25% { transform: translate(20px, -30px) rotate(5deg); opacity: 0.6; }
    50% { transform: translate(-10px, -20px) rotate(-3deg); opacity: 0.5; }
    75% { transform: translate(15px, -10px) rotate(2deg); opacity: 0.7; }
  }

  @keyframes floatCode2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
    33% { transform: translate(-25px, 20px) rotate(-4deg); opacity: 0.6; }
    66% { transform: translate(10px, 15px) rotate(3deg); opacity: 0.4; }
  }

  @keyframes floatCode3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    40% { transform: translate(30px, -25px) rotate(6deg); opacity: 0.7; }
    80% { transform: translate(-15px, -15px) rotate(-2deg); opacity: 0.3; }
  }

  @keyframes floatCode4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    20% { transform: translate(-20px, -30px) rotate(-5deg); opacity: 0.6; }
    60% { transform: translate(25px, -10px) rotate(4deg); opacity: 0.5; }
  }

  @keyframes blink-caret {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  /* Font imports */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Dancing+Script:wght@400;500;600;700&display=swap');
`;

// Responsive breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1024px',
  large: '1200px',
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (max-width: ${breakpoints.large})`,
}; 