import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'Agencia de Desarrollo y Diseño | Servicios Web Profesionales',
  description: 'Somos una agencia especializada en desarrollo web, diseño gráfico y gestión de redes sociales. Potencia tu presencia en línea con nuestros servicios profesionales.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://etda.vercel.app/',
    site_name: 'Agencia de Desarrollo y Diseño | Servicios Web Profesionales',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
