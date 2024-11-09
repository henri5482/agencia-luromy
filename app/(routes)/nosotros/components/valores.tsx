const Valores = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto pt-28 px-4">
      <h1 className="text-center text-[#1C3C3F] text-4xl md:text-5xl lg:text-6xl montserrat font-bold">
        Nuestros valores
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-24 pb-4 justify-center montserrat">
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Maestría
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            La repetición constante de procesos conduce al dominio. Hemos estado
            perfeccionando nuestro oficio y mejorando nuestros procesos durante
            años, todos los días.
          </p>
        </div>
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Confianza
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            No se puede crear valor sin un socio de confianza. Mantenernos
            fieles a nuestra palabra es una necesidad intrínseca, no sólo una
            obligación externa.
          </p>
        </div>
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Pasión
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            El verdadero amor por lo que haces se manifiesta en dónde inviertes
            tu tiempo. La pasión por nuestro trabajo es silenciosa y tranquila,
            pero potente.
          </p>
        </div>
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Flexibilidad
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            Nos basamos en nuestros procesos pero nos adaptamos a las
            necesidades específicas de los proyectos o socios. La flexibilidad
            conduce a mejoras duraderas.
          </p>
        </div>
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Disciplina
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            La disciplina comienza dentro y da forma a todos nuestros procesos.
            Aunque meticulosos, nuestros estándares garantizan una entrega
            sólida a largo plazo.
          </p>
        </div>
        <div className="pb-14">
          <h1 className="text-2xl md:text-3xl text-[#1C3C3F] lg:text-4xl font-semibold py-4">
            Creatividad
          </h1>
          <p className="text-base md:text-lg open-sans text-slate-500">
            Combinamos la inspiración con el flujo de trabajo para fomentar la
            creatividad sistemática y ofrecer resultados predecibles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valores;
