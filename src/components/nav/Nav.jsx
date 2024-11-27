"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Link, Button } from "@nextui-org/react";
import { motion, animate } from "framer-motion";
import styles from "./Nav.module.css";
const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [nombre, setNombre] = useState(null);
  const isLogin = useMemo(() => pathname === "/login", [pathname]);
  const logout = () => {
    localStorage.clear();
    router.push("/login");
  };
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
  useEffect(() => {
    const nombreUsuario = localStorage.getItem("nombre");
    setNombre(nombreUsuario);
  }, [pathname]);

  return (
    <>
      {isLogin ? (
        <></>
      ) : (
        <motion.div
          className={
            styles.nav +
            " w-full flex justify-between items-center py-4 px-24 sticky top-0 z-50"
          }
        >
          <div className="flex">
            <Image
              src="/images/image_8.png"
              width={54}
              height={54}
              alt="nav"
              className="w-auto h-auto"
            />
            {nombre && (
              <div className="ml-8 flex items-center justify-center">
                <p>Hola {nombre}</p>
                <Button href="https://classroom.google.com/c/NzM0NDQwOTc4ODk5" as={Link} color="primary" variant="light"  target="_blank">
                  Ingresa a tus clases
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-between w-2/3">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                href="#descripcion"
                as={Link}
                color="primary"
                variant="light"
                className={styles.colorText}
                onClick={(e) => scrollToSection(e, "#why")}
              >
                Por que
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                href="#aprendizaje"
                as={Link}
                color="primary"
                variant="light"
                className={styles.colorText}
                onClick={(e) => scrollToSection(e, "#aprendizaje")}
              >
                Aprendizaje
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                href="#promociones"
                as={Link}
                color="primary"
                variant="light"
                className={styles.colorText}
                onClick={(e) => scrollToSection(e, "#promociones")}
              >
                Promociones
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
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
            <div>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                onPress={logout}
              >
                Log out
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Nav;
