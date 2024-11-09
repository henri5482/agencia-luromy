import Head from "next/head";
import Clientes from "./components/clientes";
import Valores from "./components/valores";

const Page = () => {
  return (
    <>
      <Head>
        <title>ETDA - Agencia Digital para Marcas Exitosas</title>
        <meta
          name="description"
          content="Luromy es una agencia que combina diseño, tecnología y psicología para ofrecer resultados comerciales medibles. Nos enfocamos en marcas en crecimiento y empresas establecidas, brindando resultados cuantificables."
        />
        <meta
          name="keywords"
          content="agencia digital, diseño, tecnología, psicología, crecimiento empresarial, resultados comerciales"
        />
        <meta
          property="og:title"
          content="Luromy - Agencia Digital para Marcas Exitosas"
        />
        <meta
          property="og:description"
          content="Ofrecemos resultados comerciales medibles y cuantificables, ideal para empresas emergentes y establecidas."
        />
        <meta property="og:image" content="/path-to-image.jpg" />{" "}
        <meta property="og:url" content="https://tusitio.com" />{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luromy - Agencia Digital para Marcas Exitosas"
        />
        <meta
          name="twitter:description"
          content="Ofrecemos resultados comerciales medibles y cuantificables, ideal para empresas emergentes y establecidas."
        />
        <meta name="twitter:image" content="/path-to-image.jpg" />{" "}
        {/* Cambia por el path de la imagen real */}
      </Head>

      <div className="w-full max-w-[1300px] mx-auto">
        <div className="md:pt-40 pt-20 md:px-28 px-4 text-center">
          <h1 className="py-8 montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-[#1C3C3F]">
            Empoderamos a las marcas para que triunfen en lo digital
          </h1>
          <p className="text-base md:text-lg py-4  max-sm:text-justify text-slate-600 font-medium open-sans">
            Luromy es una agencia que combina experiencia en diseño, tecnología
            y psicología para ofrecer resultados comerciales medibles para
            empresas emergentes en crecimiento y empresas establecidas.
            Seleccionamos estratégicamente nuestra lista de clientes,
            centrándonos en relaciones en las que podemos ofrecer resultados
            distintos y cuantificables.
          </p>
        </div>

        <div className="px-4 md:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:pt-24 pt-10 pb-4 max-sm:text-center justify-center">
            <div>
              <p className="text-lg font-medium text-slate-500 montserrat">
                Expertos en equipos distribuido
              </p>
              <h1 className="text-4xl md:text-5xl text-[#1C3C3F] lg:text-[5.3rem] font-bold montserrat">
                3+
              </h1>
            </div>
            <div>
              <p className="text-lg font-medium text-slate-500 montserrat">
                Años en la industria
              </p>
              <h1 className="text-4xl md:text-5xl text-[#1C3C3F] lg:text-[5.3rem] font-bold montserrat">
                2
              </h1>
            </div>
            <div>
              <p className="text-lg font-medium text-slate-500 montserrat">
                ganancias de los clientes
              </p>
              <h1 className="text-4xl md:text-5xl text-[#1C3C3F] lg:text-[5.3rem] font-bold montserrat">
                +10k
              </h1>
            </div>
          </div>
          <div className="border-b-2"></div>
        </div>

        <Valores />
        <Clientes />
      </div>
    </>
  );
};

export default Page;
