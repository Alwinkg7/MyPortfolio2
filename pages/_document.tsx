import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Alwin K G - Full Stack Developer & Software Engineer Portfolio" />
        <meta name="description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta name="keywords" content="Full Stack Developer, React Developer, Node.js Developer, TypeScript, JavaScript, Web Developer, Software Engineer, Frontend Developer, Backend Developer, Portfolio, Web Applications, Mobile Apps, Software Development, Next.js, Express.js, MongoDB, PostgreSQL, AWS, Docker, Git, Agile Development" />
        <meta name="author" content="Alwin K G" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="google-site-verification" content="XE3_CiGzKFBAfMYUxsMz-HbyFCpbSz01tRWwJXQOLl4" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alwinkgportfolio.vercel.app/" />
        <meta property="og:title" content="Alwin K G - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta property="og:image" content="https://alwinkgportfolio.vercel.app/portfolio1.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Alwin K G Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alwinkgportfolio.vercel.app/" />
        <meta property="twitter:title" content="Alwin K G - Full Stack Developer Portfolio" />
        <meta property="twitter:description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta property="twitter:image" content="https://alwinkgportfolio.vercel.app/portfolio1.jpg" />
        <meta property="twitter:creator" content="@alwinkg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://alwinkgportfolio.vercel.app/" />
        
        {/* Google Site Verification - Add your verification code here */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alwin K G",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies",
              "url": "https://alwinkgportfolio.vercel.app",
              "image": "https://alwinkgportfolio.vercel.app/portfolio1.jpg",
              "sameAs": [
                "https://github.com/alwinkg",
                "https://linkedin.com/in/alwinkg",
                "https://twitter.com/alwinkg"
              ],
              "knowsAbout": [
                "React",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Software Engineering",
                "Frontend Development",
                "Backend Development",
                "Next.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
