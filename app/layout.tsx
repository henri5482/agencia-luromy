import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Agencia de Desarrollo y Diseño | Servicios Web Profesionales',
  description: 'Somos una agencia especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Potencia tu presencia en línea con nuestros servicios profesionales.',
  openGraph: {
    title: 'Agencia de Desarrollo y Diseño | Servicios Web Profesionales',
    description: 'Somos una agencia especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Potencia tu presencia en línea con nuestros servicios profesionales.',
    url: "https://etda.vercel.app/",
    images: [
      {
        url: "https://dxnayacucho.vercel.app/programacion.webp",
        width: 1200,
        height: 630,
        alt: "ETDA, servicios de desarrollo ,diseño y gestión de redes sociales",
      },
    ],
    siteName: "ETDA",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://etda.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta
          property="og:title"
          content='Agencia de Desarrollo y Diseño | Servicios Web Profesionales'
        />
        <meta
          property="og:description"
          content='Somos una agencia especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Potencia tu presencia en línea con nuestros servicios profesionales.'
        />
        <meta property="og:url" content="https://etda.vercel.app/" />
        <meta
          property="og:image"
          content="https://dxnayacucho.vercel.app/programacion.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DXN Ayacucho" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tuTwitterHandle" />
        <meta name="google-site-verification" content="s7rwNtOiZLTsTJkm10Dj-B1CNfnpkSjX7iDkXcjEVF4" />
        <meta
          name="twitter:title"
          content='Agencia de Desarrollo y Diseño | Servicios Web Profesionales'
        />
        <meta
          name="twitter:description"
          content='Somos una agencia especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Potencia tu presencia en línea con nuestros servicios profesionales.'
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/twitter-image.jpg"
        />
        <meta property="fb:page_id" content="tuFacebookPageID" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: 'Agencia de Desarrollo y Diseño | Servicios Web Profesionales',
              url: "https://etda.vercel.app/",
              logo: "https://etda.vercel.app/favicon.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 930 134 408",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100077437129801",
                "https://wa.me/51930134408",
              ],
            }),
          }}
        />
        
      </head>
      <body className={urbanist.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
