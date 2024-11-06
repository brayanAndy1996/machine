import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import styles from "./Pages.module.css";

const MainPage = () => {
  const imagen1Ref = useRef(null);
  const image2Ref = useRef(null);

  const imagenInView = useInView(imagen1Ref, {
    once: false,
    amount: 0.5,
    margin: "-100px 0px -100px 0px",
  });

  const imagen2InView = useInView(image2Ref, {
    once: false,
    amount: 0.5,
    margin: "-100px 0px -100px 0px",
  });

  const imagen1Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67], // Curva de animación suave
      },
    },
  };

  const imagen2Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67], // Curva de animación suave
      },
    },
  };

  return (
    <div
      className={
        styles.pageMain + " w-full flex flex-col justify-center items-center"
      }
      id="main"
    >
      <div>
        <h1 className={styles.titlePageMain + " text-6xl font-extrabold"}>
          Aprende Machine Learning
        </h1>
        <div className="w-full flex items-center justify-between mt-4">
          <motion.div
            ref={imagen1Ref}
            variants={imagen1Variants}
            initial="hidden"
            animate={imagenInView ? "visible" : "hidden"}
          >
            <Image
              src="/images/image_10.png"
              width={54}
              height={53}
              alt="image"
              className="w-auto h-auto"
            />
          </motion.div>
          <p className={styles.titlePageMain + " text-3xl font-normal"}>
            De Cero a Experto en Algoritmo Predictivo
          </p>
          <motion.div
             ref={image2Ref}
             variants={imagen2Variants}
             initial="hidden"
             animate={imagen2InView ? "visible" : "hidden"}
          >
          <Image
            src="/images/image_10.png"
            width={54}
            height={53}
            alt="image"
            className="w-auto h-auto"
          />
          </motion.div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          <Button color="primary" className="mx-auto">
            Aprende con Nosotros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
