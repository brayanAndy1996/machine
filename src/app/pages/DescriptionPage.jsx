import { motion } from "framer-motion";
import Image from "next/image";
import useAnimation from "../../hooks/useAnimation";
import styles from "./Pages.module.css";

const animationsDescription = {
  animationHide: {
    x: -50,
  },
  animationVisible: {
    x: 0,
  },
}

const animationsImageCerebro = {
  animationHide: {
    y: -50,
  },
  animationVisible: {
    y: 0,
  },
}

const DescriptionPage = () => {
  const {
    elementRef: refDescripcion,
    iselementInView: viewDescripcion,
    elementVariants: variantDescripcion,
  } = useAnimation({
    ...animationsDescription,
  })

  const {
    elementRef: refTitle,
    iselementInView: viewTitle,
    elementVariants: variantTitle,
  } = useAnimation({
    ...animationsDescription,
  })

  const {
    elementRef: refImageCerebro,
    iselementInView: viewImageCerebro,
    elementVariants: variantImageCerebro,
  } = useAnimation({
    ...animationsImageCerebro,
  })

  return (
    <div className="w-full h-screen pt-20" id="Title">
      <div className="w-full h-1/6 flex">
        <motion.div
          className={styles.descriptionDiv}
          ref={refTitle}
          variants={variantTitle}
          initial="hidden"
          animate={viewTitle ? "visible" : "hidden"}
        >
          Descripción
        </motion.div>
        <motion.div
          className="ml-10"
          ref={refImageCerebro}
          variants={variantImageCerebro}
          initial="hidden"
          animate={viewImageCerebro ? "visible" : "hidden"}
        >
          <Image
            src="/images/image_3.png"
            width={181}
            height={176}
            alt="image"
            className="w-auto h-auto"
          />
        </motion.div>
      </div>
      <motion.div 
        className={styles.descriptionDivText}
        ref={refDescripcion}
        variants={variantDescripcion}
        initial="hidden"
        animate={viewDescripcion ? "visible" : "hidden"}
      >
        <p className="w-2/3 text-xl pl-10">
          Aprende Machine Learning: De Cero a Experto en Algoritmos Predictivos
          es un curso integral diseñado para guiar a los estudiantes desde los
          fundamentos hasta el dominio de técnicas avanzadas de machine
          learning. Ideal tanto para principiantes como para quienes buscan
          desarrollar habilidades especializadas, este curso cubre todos los
          aspectos esenciales del aprendizaje automático, con un enfoque
          particular en algoritmos predictivos. A lo largo de cada módulo,
          experimentarás una progresión estructurada que te llevará de aprendiz
          a experto, desarrollando la capacidad de aplicar predicciones y
          análisis de datos en situaciones del mundo real. ¡Inscríbete hoy y
          comienza tu camino hacia la excelencia en machine learning!
        </p>
        <div className="flex-col justify-items-center content-center absolute bottom-20 right-20 ml-auto">
          <Image
            src="/images/image_7.png"
            width={265}
            height={329}
            alt="image"
            className="w-auto h-auto"
          />
          <Image
            src="/images/image_6.png"
            width={147}
            height={147}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DescriptionPage;
