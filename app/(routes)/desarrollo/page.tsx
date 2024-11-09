import Image from "next/image";
import Link from "next/link";
import FAQ from "./components/faq";
import Logosdev from "./components/logos";

const page = () => {
  return (
    <>
     <head>
        <title>Desarrollo de Aplicaciones Web | ETDA</title>
        <meta
          name="description"
          content="En ETDA, ofrecemos desarrollo de aplicaciones web modernas y soluciones de diseño digital para empresas de tecnología e innovación. ¡Transforma tu negocio con nosotros!"
        />
        <meta
          name="keywords"
          content="desarrollo de aplicaciones web, diseño web, soluciones digitales, aplicaciones ecommerce, diseño UI/UX, desarrollo front-end, back-end"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.etda.com" />
      </head>

    <div className="">
      <div className="text-center montserrat 2xl:px-80 md:px-32 md:pt-44 md:pb-20 pt-28 px-2  mx-auto">
        <h1 className="md:text-8xl text-3xl font-bold py-4 text-[#1C3C3F]">
          Desarrollo de Aplicaciones Web
        </h1>
        <p className=" text-slate-700 font-medium md:text-xl text-base py-4 md:px-20">
          Nuestro equipo de desarrollo de aplicaciones web crea sitios web y
          paginas web. aplicaciones que utilizan marcos de aplicaciones web
          modernos para innovaciones marcas y empresas de tecnología.
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 2xl:gap-72 md:gap-32 2xl:px-72 md:px-20 py-16 md:py-52 bg-black ">
        <h1 className=" md:text-5xl text-3xl px-2 py-2 font-bold montserrat text-white text-start ">
          Enfoque de desarrollo de aplicaciones web
        </h1>
        <p className=" text-white text-base px-2  ">
          Nuestros equipos de desarrollo multidisciplinarios colaboran
          constantemente con los departamentos internos, sometiéndose a mejoras
          iterativas y manteniendo una total transparencia en el proceso, lo que
          optimiza y mejora continuamente el desarrollo.
        </p>
      </div>
      <div className="py-12 md:pb-28">
        <h1 className="2xl:px-72 md:px-20 py-4 md:text-5xl text-2xl px-2 font-bold montserrat md:py-20 text-[#1C3C3F]">
          Clientes
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 px-2 2xl:px-72 md:px-20 gap-10">
          <Link
            href="https://dxnayacucho.vercel.app/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/dxnpage.webp"
                alt="DXN Ayacucho"
                width={1000}
                height={500}
                className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
              />
              <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
                DXN Ayacucho
              </h1>
              <p className="open-sans text-slate-500 text-base font-medium">
                Aplicativo web tipo ecommerce con un página de admin para
                publicar sus productos y servicios
              </p>
            </div>
          </Link>

          <Link
            href="https://ayacucho-eventos.vercel.app/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src="/evntopage.webp"
                alt="case-studies"
                width={1000}
                height={500}
                className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
              />
              <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
                Eventos Ayacucho
              </h1>
              <p className="open-sans text-slate-500 text-base font-medium">
                Aplicativo web para compra y muestra de entradas en la ciudad de
                ayacucho
              </p>
            </div>
          </Link>
          <div>
            <Image
              src="/luromypage.webp"
              alt="case-studies"
              width={1000}
              height={500}
              className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
            />
            <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
              Restaurante Luromy
            </h1>
            <p className="open-sans text-slate-500 text-base font-medium">
              Pagina web para todos los servicios y alimentos que ofrece el
              restaurante
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:px-72 md:px-20  py-14 md:py-36 bg-black">
        <h1 className=" md:text-5xl text-3xl px-2 montserrat font-bold mb-6 text-center  text-white">
          Nuestras capacidades en servicios de desarrollo web
        </h1>
        <p className="text-lg px-2  mb-8 text-center lg:px-36 text-white open-sans">
          Al ampliar los equipos de nuestros clientes, brindamos un ciclo de
          vida de desarrollo completo, incluido el diseño UI/UX para
          aplicaciones web y móviles nativas que ayuda a las empresas
          innovadoras y las marcas establecidas a lograr sus objetivos
          comerciales.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 2xl:pl-40  xl:gap-24 2xl:gap-20 gap-14 text-white  px-2 md:pt-20">
          <div>
            <h2 className="text-3xl font-semibold montserrat mb-4 pb-2">
              Front-end
            </h2>
            <ul className="list-disc pl-5  space-y-2 text-white">
              <li>Toma de requisitos</li>
              <li>POC y creación rápida de prototipos</li>
              <li>desarrollo de interfaz de usuario</li>
              <li>Implementación de lógica de negocios</li>
              <li>Integraciones de terceros</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold montserrat mb-4 pb-2">
              Back-end
            </h2>
            <ul className="list-disc pl-5 text-white space-y-2">
              <li>Diseño y desarrollo de API</li>
              <li>Arquitectura de base de datos</li>
              <li>Microservicios</li>
              <li>Integración continua</li>
              <li>DevOps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="2xl:px-72 md:px-20 py-14   md:pb-20">
        <h1 className=" md:text-6xl text-3xl  text-center md:pt-20 font-bold montserrat text-[#1C3C3F]">
          Servicios adicionales
        </h1>
        <p className=" text-center md:text-lg text-base open-sans px-2 text-slate-600 py-4 md:pb-24 ">
          Experimente el impacto de nuestros servicios de diseño, centrados en
          impulsar el éxito, atraer a los usuarios y fortalecer su huella
          digital.
        </p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-2 max-md:py-10">
          <div>
            <h1 className="md:text-4xl text-3xl font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Libere el verdadero potencial de su marca con nuestros servicios
              de diseño creativo que brindan resultados.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Diseño Web
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Eleve su experiencia digital con nuestro diseño de sitio web que
              deleita y cautiva a los usuarios.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Diseño UI/UX
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Atraiga y retenga usuarios con nuestra experiencia en la creación
              de interfaces atractivas y fluidas.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Diseño de aplicaciones
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Libere el verdadero potencial de sus marcas con nuestro diseño
              creativo. servicios que entregan resultados.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Diseño para sistemas
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Actualice su flujo de trabajo contratando a nuestros expertos para
              diseñar sistemas de diseño escalables.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Startup 
            </h1>
            <p className="text-lg open-sans text-slate-500">
            Impulse el alcance digital de su startup con la experiencia de nuestro equipo en la entrega de soluciones de aplicaciones web personalizadas.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-48 2xl:px-72 md:px-20 md:py-28  ">
        <h1 className=" md:text-5xl  text-3xl px-2 font-bold montserrat  text-start text-[#1C3C3F]">
          ¿Por qué ETDA?
        </h1>
        <p className="  text-base max-md:py-5  px-4">
        En ETDA (Expertos en Tecnología y Diseño Avanzado), nos destacamos como líderes en el campo del desarrollo y diseño digital, ofreciendo soluciones innovadoras y personalizadas que transforman ideas en realidades impactantes. Aquí están las razones por las que somos la elección ideal para tus necesidades
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-48 2xl:px-72 md:px-20 md:py-28  py-10 ">
        <h1 className=" md:text-5xl text-3xl px-2 font-bold montserrat  text-start text-[#1C3C3F]">
          Empresas 
        </h1>
        <p className="  text-base max-md:py-5  px-4">
        Ayudamos a los negocios y empresas empresariales a aprovechar las tecnologías móviles modernas y las soluciones multiplataforma para seguir dominando sus sectores y destacarse en el mercado.
        </p>
      </div>
      <Logosdev />
      <FAQ />
    </div>
    </>
  );
};

export default page;
