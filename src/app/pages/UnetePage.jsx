import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import CardsUnete from "../../components/cards/CardsUnete";
import styles from "./Pages.module.css";

const UnetePage = () => {
  return (
    <div
      className="w-full h-screen pt-20  flex flex-col justify-between"
      id="unete"
    >
      <div>
        <div className={styles.uneteButton}>únete a ellos</div>
        <div className="w-11/12 mx-auto flex items-center">
          <div className="w-auto">
            <Image
              src="/images/flecha_1.png"
              width={85}
              height={85}
              alt="image"
              className="w-auto h-auto"
            />
          </div>
          <CardsUnete />
          <div>
            <Image
              src="/images/flecha_2.png"
              width={85}
              height={85}
              alt="image"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <div className="flex justify-between mb-4">
            <Link href="https://x.com/machine_ml" target="_blank">
              <Image
                src="/images/logo_x.png"
                width={24}
                height={24}
                alt="image"
                className="w-auto h-auto"
              />
            </Link>
            <Link
              href="https://www.instagram.com/mlcoding/profilecard/"
              target="_blank"
            >
              <Image
                src="/images/insta.png"
                width={24}
                height={24}
                alt="image"
                className="w-auto h-auto"
              />
            </Link>
            <Link href="https://x.com/machine_ml" target="_blank">
              <Image
                src="/images/yt.png"
                width={24}
                height={24}
                alt="image"
                className="w-auto h-auto"
              />
            </Link>
            <Link href="https://x.com/machine_ml" target="_blank">
              <Image
                src="/images/linkedin.png"
                width={24}
                height={24}
                alt="image"
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <p className="mb-4">2114403067@undac.edu.pe</p>
          <div className="flex">
            <Image
              src="/images/wts.png"
              width={20}
              height={20}
              alt="image"
              className="w-auto h-auto"
            />
            <p>+51 932886502</p>
          </div>
        </div>
        <div>
          <p className="mb-4">Verifica el Certificado</p>
          <p className="mb-4">Valida el certificado Netzun </p>
          <p className="mb-4">ingresando el código único</p>
          <Link href="https://netzun.com/" target="_blank">
            <Button>Verificar Certificado</Button>
          </Link>
        </div>
        <div>
          <p className="mb-8">Mas Informacion</p>
          <p className="mb-4">Terminos y Condiciones</p>
          <p className="mb-4">Politicas de privacidad</p>
          <p className="mb-4">Pregutas Frecuentes</p>
          <p className="mb-4">Politicas de privacidad</p>
        </div>
        <div>
          <p className="mb-8">Moneda</p>
          <div className="flex">
            <Image
              src="/images/bandera.png"
              width={26}
              height={26}
              alt="image"
              className="w-auto h-auto"
            />
            <p className="ml-2">SOL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnetePage;
