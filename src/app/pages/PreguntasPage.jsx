import Image from "next/image";
import CardsPregunta from "../../components/cards/CardsPregunta";
import styles from "./Pages.module.css";
const PreguntasPage = () => {
  return (
    <div className="w-full h-screen py-20 relative">
      <h3 className="text-center text-4xl font-bold mb-10">
        Preguntas <span className={styles.textBlue}>Frecuentes</span>
      </h3>
      <div className="flex items-center">
        <div className="w-2/5">
          <Image
            src="/images/imagen_FAQ.png"
            width={450}
            height={410}
            alt="image"
          />
        </div>
        <div className="w-3/5">
          <CardsPregunta />
        </div>
      </div>
      <div className={styles.preguntasDivider}></div>
    </div>
  );
};

export default PreguntasPage;
