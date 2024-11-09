import Image from "next/image";
import FAQredes from "./components/faqredes";
import Logosredes from "./components/logosredes";

const page = () => {
  return (
    <div className="">
      <div className="text-center montserrat 2xl:px-80 md:px-32 md:pt-44 md:pb-20 pt-28 px-2  mx-auto">
        <h1 className="md:text-8xl text-3xl font-bold py-4 text-[#1C3C3F]">
          Desarrollo de Aplicaciones Web
        </h1>
        <p className=" text-slate-700 font-medium md:text-xl text-base py-4 md:px-20">
          Our web app development agency team builds web, and Front-end
          applications using modern web application frameworks for innovative
          tech brands and companies.
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 2xl:gap-72 md:gap-32 2xl:px-72 md:px-20 py-16 md:py-52 bg-black ">
        <h1 className=" md:text-5xl text-3xl px-2 py-2 font-bold montserrat text-white text-start ">
          Web app development approach
        </h1>
        <p className=" text-white text-base px-2  ">
          We act as an extension of product development departments within tech
          companies by providing remote staff augmentation. Our
          multidisciplinary development teams are in constant collaboration with
          the in-house departments and undergo many iterative improvements and
          full process transparency.
        </p>
      </div>
      <div className="py-12 md:pb-28">
  <h1 className="2xl:px-72 text-[#1C3C3F] md:px-20 py-4 md:text-5xl text-2xl px-2 font-bold montserrat md:py-20">
    Case studies
  </h1>
  <div className="grid lg:grid-cols-3 grid-cols-1 px-2 2xl:px-72 md:px-20 gap-10">
    <div>
      <Image
        src="/imagen1.jpg"
        alt="case-studies"
        width={1000}
        height={500}
        className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
      />
      <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
        NBCUniversal
      </h1>
      <p className="open-sans text-slate-500 text-base font-medium">
        Developing micro-interactions for the Lightning Design System
      </p>
    </div>
    <div>
      <Image
        src="/imagen1.jpg"
        alt="case-studies"
        width={1000}
        height={500}
        className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
      />
      <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
        NBCUniversal
      </h1>
      <p className="open-sans text-slate-500 text-base font-medium">
        Developing micro-interactions for the Lightning Design System
      </p>
    </div>
    <div>
      <Image
        src="/imagen1.jpg"
        alt="case-studies"
        width={1000}
        height={500}
        className="rounded-2xl transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
      />
      <h1 className="md:text-4xl text-3xl font-bold montserrat py-2 pt-4 text-[#1C3C3F]">
        NBCUniversal
      </h1>
      <p className="open-sans text-slate-500 text-base font-medium">
        Developing micro-interactions for the Lightning Design System
      </p>
    </div>
  </div>
</div>


      <div className="2xl:px-72 md:px-20  py-14 md:py-36 bg-black">
        <h1 className=" md:text-5xl text-3xl px-2 montserrat font-bold mb-6 text-center  text-white">
          Our Capabilities in Web Development Services
        </h1>
        <p className="text-lg px-2  mb-8 text-center lg:px-36 text-white open-sans">
          By extending our clientsteams, we provide a full development
          lifecycle, including UI/UX design for native mobile and web
          applications that helps innovative companies and established brands
          achieve their business goals.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 2xl:pl-40  xl:gap-24 2xl:gap-20 gap-14 text-white  px-2 md:pt-20">
          <div>
            <h2 className="text-3xl font-semibold montserrat mb-4 pb-2">
              Front-end
            </h2>
            <ul className="list-disc pl-5  space-y-2 text-white">
              <li>Requirements gathering</li>
              <li>POC and rapid prototyping</li>
              <li>UI development</li>
              <li>Business logic implementation</li>
              <li>3rd party integrations</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold montserrat mb-4 pb-2">
              Back-end
            </h2>
            <ul className="list-disc pl-5 text-white space-y-2">
              <li>API design & development</li>
              <li>Database architecture</li>
              <li>Microservices</li>
              <li>Continuous integration</li>
              <li>DevOps</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="2xl:px-72 md:px-20 py-14   md:pb-20">
        <h1 className=" md:text-6xl text-3xl  text-center md:pt-20 font-bold montserrat text-[#1C3C3F] ">
          Additional services
        </h1>
        <p className=" text-center md:text-lg text-base open-sans px-2 text-slate-600 py-4 md:pb-24 ">
          Experience the impact of our design services, centered on driving
          success, engaging users, and strengthening your digital footprint.
        </p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-2 max-md:py-10">
          <div>
            <h1 className="md:text-4xl text-3xl font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]">
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-3xl  font-bold montserrat pb-5 text-[#1C3C3F]" >
              Branding
            </h1>
            <p className="text-lg open-sans text-slate-500">
              Unleash your brands true potential with our creative design
              services that deliver results.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-48 2xl:px-72 md:px-20 md:py-28  ">
        <h1 className=" md:text-5xl  text-3xl px-2 font-bold montserrat  text-start text-[#1C3C3F]">
          ¿Por qué Ramotion?
        </h1>
        <p className="  text-base max-md:py-5  px-4">
          We act as an extension of product development departments within tech
          companies by providing remote staff augmentation. Our
          multidisciplinary development teams are in constant collaboration with
          the in-house departments and undergo many iterative improvements and
          full process transparency.
        </p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-48 2xl:px-72 md:px-20 md:py-28  py-10 ">
        <h1 className=" md:text-5xl text-3xl px-2 font-bold montserrat  text-start text-[#1C3C3F]">
          ¿Por qué Ramotion?
        </h1>
        <p className="  text-base max-md:py-5  px-4">
          We act as an extension of product development departments within tech
          companies by providing remote staff augmentation. Our
          multidisciplinary development teams are in constant collaboration with
          the in-house departments and undergo many iterative improvements and
          full process transparency.
        </p>
      </div>
      <Logosredes/>
      <FAQredes />
    </div>
  );
};

export default page;
