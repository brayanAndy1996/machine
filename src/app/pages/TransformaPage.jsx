import Image from "next/image";
import { Button } from "@nextui-org/react";
import styles from './Pages.module.css'

const TransformaPage = () => {
  return (
    <div className={ styles.transform+ ' w-full h-screen py-20'}>
      <div className="w-9/12 h-full mx-auto">
        <h3>Transforma tu futuro profesional</h3>
        <div className="w-full mx-auto h-10/12 flex justify-between items-center">
          <div className="h-96 flex flex-col justify-around items-start">
            <p className="text-start w-2/3 text-lg font-semibold">
              Aprende Machine Learning de manera práctica y conviértete en un
              experto en la industria.
            </p>
            <Button color="primary" className="mr-auto p-8 rounded-3xl" size="lg">
              ÚNETE AHORA
            </Button>
          </div>
          <Image
            src="/images/img_cta.png"
            width={400}
            height={400}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default TransformaPage;
