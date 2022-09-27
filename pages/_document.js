import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='id'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#0D265A' />
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Josefin+Sans:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet" /> 
      </Head>
      <body className="bg-white text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}