const Inicio = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-between w-full mx-auto py-28 h-auto max-w-[1300px]">
          <div className="flex flex-col items-center py-5 pb-12">
            <h1 className="text-4xl md:text-7xl font-bold text-[#1C3C3F] mx-5 xl:mx-80 montserrat text-center py-5">
            Agencia Digital LUROMY
            </h1>
            <p className="text-center text-[16px] md:text-[18px] montserrats text-slate-500 font-semibold">
            Empoderamos a las empresas para que tengan éxito en el espacio digital
            </p>
          </div>
  
          <video
            src="/home.mp4"
            autoPlay
            loop
            muted
            className="w-full object-cover mt-5 h-auto"
          />
        </div>
      </>
    );
  };
  
  export default Inicio;
  