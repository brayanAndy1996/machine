import React from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <div className={ styles.nav+ ' w-full flex justify-between items-center py-4 px-24 sticky top-0'}>
      <Image src="/images/image_8.png" width={54} height={54} alt="nav" />
      <div className="flex justify-between w-2/3">
        <Button href="#ejemplo"  as={Link} color="primary" variant="light" className={styles.colorText}>Inicio</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Por que</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Descripción</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Temario</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Instructores</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Testimonios</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Preguntas</Button>
        <Button href="#ejemplo" as={Link} color="primary" variant="light" className={styles.colorText}>Unirse</Button>
      </div>
    </div>
  );
};

export default Nav;
