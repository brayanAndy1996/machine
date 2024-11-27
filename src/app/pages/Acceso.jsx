import Image from "next/image";
import ListCheck from "../../components/listas/ListCheck";
import styles from "./Pages.module.css";

const AccesoPage = () => {
  const lista = [
    "Accede al material cuando quieras",
    "Accede al material las veces que quieras",
  ];
  return (
    <div className={styles.acceso} id="acceso">
      <div className="w-2/3 mx-auto flex justify-around items-center">
        <div>
          <Image
            src="/images/caja.png"
            width={330}
            height={325}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
        <div>
          <h3>Acceso para siempre</h3>
          <p className="mt-8 mb-8">
            Tendrás acceso a los contenidos grabados, textos <br />y material
            extra para siempre.
          </p>
          <ListCheck lista={lista} />
        </div>
      </div>
    </div>
  );
};

export default AccesoPage;
