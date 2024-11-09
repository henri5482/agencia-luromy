import Comentarios from "@/components/comentario";
import Inicio from "@/components/inicio";
import Mapaconceptual from "@/components/mapaconceptual";
import Tecnologia from "@/components/tecnologia";


export default function Home() {
  return (
    <main>
      <Inicio />
      <Tecnologia />
      <Mapaconceptual />
      <Comentarios />
      
    </main>
  );
}
