import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CardsPregunta from "../../components/cards/CardsPregunta";
import styles from "./Pages.module.css";

const PreguntasPage = () => {
  // Referencias para los elementos que queremos animar
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Configurar useInView para que se repita (once: false)
  const isTitleInView = useInView(titleRef, { 
    once: false, 
    amount: 0.5,
    margin: "-100px 0px -100px 0px" // Ajusta el margen de activación
  });
  
  const isImageInView = useInView(imageRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });
  
  const isContentInView = useInView(contentRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  // Variantes de animación para el título
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67] // Curva de animación suave
      }
    }
  };

  // Variantes para la imagen
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Variantes para el contenido
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full min-h-screen xl:py-20 relative" id="preguntas">
      <motion.h3 
        ref={titleRef}
        variants={titleVariants}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        className="text-center text-4xl font-bold xl:mb-10"
      >
        Preguntas <span className={styles.textBlue}>Frecuentes</span>
      </motion.h3>

      <div className="flex items-center">
        <motion.div 
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          className="w-2/5"
        >
          <Image
            src="/images/imagen_FAQ.png"
            width={450}
            height={410}
            alt="image"
          />
        </motion.div>

        <motion.div 
          ref={contentRef}
          variants={contentVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          className="w-3/5"
        >
          <CardsPregunta />
        </motion.div>
      </div>

      <div className={styles.preguntasDivider}></div>
    </div>
  );
};

export default PreguntasPage;