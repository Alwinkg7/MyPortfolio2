import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --teal: #64ffda;
    --teal-tint: rgba(100, 255, 218, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--navy);
    color: var(--slate);
    font-family: 'Calibre', 'Inter', sans-serif;
    line-height: 1.5;
  }

  .glass-nav {
    background: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
  }
`;