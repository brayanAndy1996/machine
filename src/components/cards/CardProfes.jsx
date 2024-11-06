import Image from "next/image";
import { motion } from "framer-motion";
import useAnimation from "../../hooks/useAnimation";

const animationsCard = {
  animationHide: {
    x: 50,
  },
  animationVisible: {
    x: 0,
  }
}

const CardProfes = () => {
  const {
    elementRef: refCard1,
    iselementInView: viewCard1,
    elementVariants: variantCard1,
  } = useAnimation({
    ...animationsCard,
    duration: 0.3
  })

  const {
    elementRef: refCard2,
    iselementInView: viewCard2,
    elementVariants: variantCard2,
  } = useAnimation({
    ...animationsCard,
    duration: 0.6
  })

  const {
    elementRef: refCard3,
    iselementInView: viewCard3,
    elementVariants: variantCard3,
  } = useAnimation({
    ...animationsCard,
    duration: 0.9
  })

  const items = [
    {
      urlImage: "/images/Imagen_Inst._1.png",
      name: "Dr. Ana Torres",
      color:"#FBBC0573",
      descripcion:
        "Experta en Machine Learning y doctora en Ciencias de la Computación. Más de 10 años de experiencia trabajando con modelos predictivos y análisis de datos.",
    },
    {
      urlImage: "/images/Img_Inst._2.png",
      name: "Ing. Carlos Pérez",
      color:"#FF415573",
      descripcion:
        "Ingeniero en Software con especialización en inteligencia artificial. Ha liderado varios proyectos de implementación de Machine Learning en la industria.",
    },
    {
      urlImage: "/images/IMG_Inst_3.png",
      name: "M.Sc. Lucía Ramírez",
      color:"#0C85A573",
      descripcion:
        "Científica de datos con más de 7 años de experiencia en el sector financiero y retail, aplicando modelos de predicción y optimización.",
    },
  ];
  return (<div className="w-11/12 xl:w-2/3 max-h-full mx-auto flex flex-row gap-8 xl:flex-col">
    {
        items.map((item, index)=>{
            const margen = {
                0:'mr-auto',
                1:'mx-auto',
                2:'ml-auto',
            }
            const elementosUse = {
              refs : {
                0:refCard1,
                1:refCard2,
                2:refCard3
              },
              views:{
                0:viewCard1,
                1:viewCard2,
                2:viewCard3
              },
              variants:{
                0:variantCard1,
                1:variantCard2,
                2:variantCard3
              }
            }
            return <div key={item.name} className={ margen[index]+' w-3/5 h-full flex flex-col justify-between items-center xl:flex-row'}>
            <Image src={item.urlImage} width={200} height={200} alt="image"  className="w-auto h-auto"/>
            <motion.div 
              className=" w-full xl:w-2/3 p-10 rounded-sm text-end" 
              style={{backgroundColor:item.color}}
              ref={elementosUse['refs'][index]}
              variants={elementosUse['variants'][index]}
              initial="hidden"
              animate={elementosUse['views'][index] ? "visible" : "hidden"}
            >
                <p className="text-2xl font-bold mb-6">{item.name}</p>
                <p>{item.descripcion}</p>
            </motion.div>
        </div>
        })
    }
  </div>)
}

export default CardProfes;
