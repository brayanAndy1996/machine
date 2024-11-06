import Image from "next/image";
import { motion } from "framer-motion";
import useAnimation from "../../hooks/useAnimation";
import styles from './Pages.module.css'
import CardTemario from '../../components/temario/CardTemario'

const animationsCard = {
  animationHide: {
    x: -50,
  },
  animationVisible: {
    x: 0,
  },
}

const animationsImage = {
  animationHide: {
    x: 50,
  },
  animationVisible: {
    x: 0,
  },
}

const Temario = () => {

  const {
    elementRef: refCard,
    iselementInView: viewCard,
    elementVariants: variantCard,
  } = useAnimation({
    ...animationsCard,
  })

  const {
    elementRef: refImage,
    iselementInView: viewImage,
    elementVariants: variantImage,
  } = useAnimation({
    ...animationsImage,
  })

  return (
    <div className={styles.temario} id="temario">
        <motion.div 
        className='w-3/5 h-full'
          ref={refCard}
          variants={variantCard}
          initial="hidden"
          animate={viewCard ? "visible" : "hidden"}
        >
            <CardTemario/>
        </motion.div>
        <motion.div
          ref={refImage}
          variants={variantImage}
          initial="hidden"
          animate={viewImage ? "visible" : "hidden"}
        >
        <Image src='/images/image_1.png' width={436} height={352} alt="image"  className="w-auto h-auto"/>
        </motion.div>
    </div>
  )
}

export default Temario