"use client";

import { Button } from "@/components/ui/button"; // Asegúrate de tener el componente Button en tu proyecto
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-40 pt-32 sm:px-20">
      <div className="flex flex-col md:gap-16 gap-4 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/imagen2.jpg" // Cambia la ruta de la imagen si es necesario
            alt="Success"
            width={500}
            height={250}
            className="rounded-lg h-auto"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-start text-start sm:text-left">
          <h1 className="text-3xl montserrat font-bold mb-4">¡Gracias por contactarnos!</h1>
          <p className="my-3 text-gray-700 open-sans text-start">
            Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.
          </p>
          <p className="my-3 text-gray-700 open-sans text-start">
            Agradecemos tu interés y esperamos que tengas una excelente experiencia con nosotros.
          </p>
          <Button onClick={() => router.push("/")}>Volver a la página principal</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
