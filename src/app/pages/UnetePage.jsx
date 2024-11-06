import Image from "next/image";
import { Input } from "@nextui-org/react";
import CardsUnete from "../../components/cards/CardsUnete";
import styles from "./Pages.module.css";
import {MailIcon} from '../../icons/Mail'
import {TelefonoIcon}  from '../../icons/Telefono'

const UnetePage = () => {
  return (
    <div className="w-full h-screen pt-20  flex flex-col justify-between" id='unete'>
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
        <div className="w-1/5">
          <Image
            src="/images/image_3.png"
            width={85}
            height={85}
            alt="image"
            className="w-auto h-auto"
          />
          <p className="text-white">Suscribete</p>
          <Input
            type="email"
            variant="underlined"
            color="default"
            placeholder="Ingresa tu correo"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="w-1/5 ml-8">
          <p className="text-white">Contactenos</p>
          <Input
            variant="underlined"
            color="default"
            value="9988776654"
            startContent={
              <TelefonoIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            type="email"
            variant="underlined"
            color="default"
            value="contacto@gmail.com"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UnetePage;
