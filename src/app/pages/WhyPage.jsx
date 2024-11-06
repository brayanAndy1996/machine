import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Pages.module.css";
import useAnimation from "../../hooks/useAnimation";

const titleStyles = {
  animationHide: {
    scale: 0.7,
  },
  animationVisible: {
    scale: 1,
  },
};

const imagesStyles = {
  animationHide: {
    x: 50,
  },
  animationVisible: {
    x: 0,
  },
};

const textStyles = {
  animationHide: {
    x: -50,
  },
  animationVisible: {
    x: 0,
  },
};

const WhyPage = () => {
  const {
    elementRef: refTitle,
    iselementInView: viewTitle,
    elementVariants: variantTitle,
  } = useAnimation({
    ...titleStyles,
  });

  const {
    elementRef: refImages,
    iselementInView: viewImages,
    elementVariants: variantImages,
  } = useAnimation({
    ...imagesStyles,
  });

  const {
    elementRef: refText,
    iselementInView: viewText,
    elementVariants: variantText,
  } = useAnimation({
    ...textStyles,
  });

  return (
    <div className="w-full h-screen py-20" id="why">
      <div className="h-1/3 flex">
        <motion.p
          className="w-3/4 flex justify-center items-center text-6xl font-bold"
          ref={refTitle}
          variants={variantTitle}
          initial="hidden"
          animate={viewTitle ? "visible" : "hidden"}
        >
          ¿Por qué Machine <br></br>Learning?
        </motion.p>
        <div className="w-1/4 h-full ml-auto">
          <div className={styles.whyPageFirst}>
            <div></div>
          </div>
          <div className={styles.whyPageSecond}>
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-2/3 w-10/12 ml-auto flex">
        <div className={styles.whyPageThird}>
          <div className={styles.whyPageThird1}>
            <div></div>
          </div>
          <div className={styles.whyPageThird2}>
            <div></div>
          </div>
          <div className={styles.whyPageThird1}>
            <div></div>
          </div>
        </div>
        <div className={styles.whyPageFourth}>
          <div className="w-full flex h-full">
            <motion.div
              className="h-full w-1/3 flex flex-col justify-around items-center"
              ref={refImages}
              variants={variantImages}
              initial="hidden"
              animate={viewImages ? "visible" : "hidden"}
            >
              <Image
                src="/images/image_12.png"
                width={122}
                height={122}
                alt="image"
                className="w-auto h-auto"
              />
              <Image
                src="/images/image_11.png"
                width={243}
                height={243}
                alt="image"
                className="w-auto h-auto"
              />
            </motion.div>
            <motion.p 
            className="w-2/3 text-white text-xl font-medium flex justify-center items-center px-20"
              ref={refText}
              variants={variantText}
              initial="hidden"
              animate={viewText ? "visible" : "hidden"}
            
            >
              Porque el mundo ha cambiado. Ya no queremos productos genéricos,
              queremos experiencias únicas. El Machine Learning nos permite
              crear productos y servicios que se adaptan a cada persona, como un
              traje a medida. ¡Imagina una aplicación que te recomiende
              películas basadas en tus gustos o un sitio web que se ajuste a tu
              forma de navegar!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
