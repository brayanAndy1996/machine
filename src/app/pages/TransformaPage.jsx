import Image from "next/image";
import { motion } from "framer-motion";
import useAnimation from "../../hooks/useAnimation";
import ModalTransformaPage from '../../components/componentsPage/ModalTransformaPage'
import styles from "./Pages.module.css";

const animationsCard = {
  animationHide: {
    x: 100,
  },
  animationVisible: {
    x: 0,
  },
};

const TransformaPage = () => {
  const {
    elementRef: refCard,
    iselementInView: viewCard,
    elementVariants: variantCard,
  } = useAnimation({
    ...animationsCard,
  });
  return (
    <div className={styles.transform + " w-full h-screen py-20"} id="transform">
      <div className="w-9/12 h-full mx-auto">
        <h3>Transforma tu futuro profesional</h3>
        <div className="w-full mx-auto h-10/12 flex justify-between items-center">
          <div className="h-96 flex flex-col justify-around items-start">
            <p className="text-start w-2/3 text-lg font-semibold">
              Aprende Machine Learning de manera práctica y conviértete en un
              experto en la industria.
            </p>
            <ModalTransformaPage/>
          </div>
          <motion.div
            ref={refCard}
            variants={variantCard}
            initial="hidden"
            animate={viewCard ? "visible" : "hidden"}
          >
            <Image
              src="/images/img_cta.png"
              width={400}
              height={400}
              alt="image"
              className="w-auto h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TransformaPage;
