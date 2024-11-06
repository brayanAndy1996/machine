"use client";

import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import { motion, animate } from "framer-motion";
import styles from "./Nav.module.css";
const Nav = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const element = document.querySelector(sectionId);
    if (!element) return;

    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - 80; // Ajusta este valor según el tamaño de tu navbar

    animate(document.documentElement.scrollTop, offsetPosition, {
      duration: 0.8, // duración de la animación en segundos
      ease: [0.32, 0.72, 0, 1], // curva de animación personalizada
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className={
        styles.nav +
        " w-full flex justify-between items-center py-4 px-24 sticky top-0 z-50"
      }
    >
      <Image src="/images/image_8.png" width={54} height={54} alt="nav"  className="w-auto h-auto"/>
      <div className="flex justify-between w-2/3">
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#main"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#main")}
          >
            Inicio
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#descripcion"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#descripcion")}
          >
            Por que
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#why"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#why")}
          >
            Descripción
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#temario"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#temario")}
          >
            Temario
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#profes"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#profes")}
          >
            Instructores
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#transform"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#transform")}
          >
            Testimonios
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#preguntas"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#preguntas")}
          >
            Preguntas
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            href="#unete"
            as={Link}
            color="primary"
            variant="light"
            className={styles.colorText}
            onClick={(e) => scrollToSection(e, "#unete")}
          >
            Unirse
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Nav;
