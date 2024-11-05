import { Button } from "@nextui-org/react";
import styles from "./Pages.module.css";
import Image from "next/image";

const MainPage = () => {
  return (
    <div
      className={
        styles.pageMain + " w-full flex flex-col justify-center items-center"
      }
    >
      <div>
        <h1 className={styles.titlePageMain + " text-6xl font-extrabold"}>
          Aprende Machine Learnin
        </h1>
        <div className="w-full flex items-center justify-between mt-4">
          <Image
            src="/images/image_10.png"
            width={54}
            height={53}
            alt="image"
          />
          <p className={styles.titlePageMain + " text-3xl font-normal"}>
            De Cero a Experto en Algoritmo Predictivo
          </p>
          <Image
            src="/images/image_10.png"
            width={54}
            height={53}
            alt="image"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-6">
        <Button color="primary" className="mx-auto">Aprende con Nosotros</Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
