import Image from "next/image";
import styles from "./Pages.module.css";

const WhyPage = () => {
  return (
    <div className="w-full h-screen py-20">
      <div className="h-1/3 flex">
        <p className="w-3/4 flex justify-center items-center text-6xl font-bold">
          ¿Por qué Machine <br></br>Learning?
        </p>
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
            <div className="h-full w-1/3 flex flex-col justify-around items-center">
              <Image
                src="/images/image_12.png"
                width={122}
                height={122}
                alt="image"
              />
              <Image
                src="/images/image_11.png"
                width={243}
                height={243}
                alt="image"
              />
            </div>
            <p className="w-2/3 text-white text-xl font-medium flex justify-center items-center px-20">
              Porque el mundo ha cambiado. Ya no queremos productos genéricos,
              queremos experiencias únicas. El Machine Learning nos permite
              crear productos y servicios que se adaptan a cada persona, como un
              traje a medida. ¡Imagina una aplicación que te recomiende
              películas basadas en tus gustos o un sitio web que se ajuste a tu
              forma de navegar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
