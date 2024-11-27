import Image from "next/image";
import styles from "./Pages.module.css";
import ListCheck from "../../components/listas/ListCheck";

const AprendizajePage = () => {
  const lista = [
    "Pon en práctica tus nuevas habilidades",
    "Tendrás feedback de mentores",
    "Crea un portafolio de proyectos, mejora tu CV.",
  ];
  return (
    <div className={styles.aprendizaje} id="aprendizaje">
      <div className="mr-10">
        <h3 className="text-5xl font-extrabold">
          Aprendizaje basado
          <br />
          en Proyectos
        </h3>
        <p className="mt-8 mb-8 font-semibold">
          Todos los modulos tendrán un proyecto final para <br /> que puedas
          poner en práctica tus nuevas
          <br /> habilidades
        </p>
        <ListCheck lista={lista} />
      </div>
      <Image
        src="/images/aprendizaje.png"
        width={317}
        height={308}
        alt="image"
        className="w-auto h-auto"
      />
    </div>
  );
};

export default AprendizajePage;
