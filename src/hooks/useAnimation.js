import { useRef } from "react";
import { useInView } from "framer-motion";

const useAnimation = ({animationHide, animationVisible, duration}) => {
    const elementRef = useRef(null);

    const iselementInView = useInView(elementRef, { 
        once: false, 
        amount: 0.5,
        margin: "-100px 0px -100px 0px" 
      });
    
    const elementVariants = {
        hidden: { 
          opacity: 0, 
          ...animationHide
        },
        visible: { 
          opacity: 1, 
          ...animationVisible,
          transition: {
            duration: duration || 0.5,
            ease: [0.17, 0.67, 0.83, 0.67] 
          }
        }
    };
    
  return {
    elementRef,
    iselementInView,
    elementVariants
  }
}

export default useAnimation