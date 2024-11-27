import Image from "next/image";
import ListCheck from "../../components/listas/ListCheck";
import styles from "./Pages.module.css";

const CertificatePage = () => {
  const lista = [
    "Certificado con código único",
    "Mejora tu CV",
    "Impulsa tu carrera profesional",
  ];
  return (
    <div
      className="w-full min-h-screen pt-40 flex justify-center"
      id="certificate"
    >
      <div className="relative">
        <Image
          src="/images/certificado2.png"
          width={330}
          height={325}
          alt="image"
          className="w-auto h-auto relative z-10 top-36 left-0"
        />
        <Image
          src="/images/certificado1.png"
          width={330}
          height={325}
          alt="image"
          className="w-auto h-auto absolute z-20 bottom-100 left-10"
        />
      </div>
      <div className="ml-40">
        <h3 className={styles.certificateTitle}>
          Certificate al aprobar<br />los examenes
        </h3>
        <p className="mt-8 mb-8">
          Al finalizar los modulos tendrás que aprobar los <br />
          examenes y te emitiremos un certificado
          <br /> interncacional digital que valide tus habilidades.
        </p>
        <ListCheck lista={lista} />
      </div>
    </div>
  );
};

export default CertificatePage;
