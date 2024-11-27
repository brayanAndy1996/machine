import Image from "next/image";
import styles from "./Pages.module.css";

const LideresPage = () => {
  return (
    <div className={styles.lideres} id="lideres">
      <h3 className="text-center text-6xl font-extrabold">3 líderes, un curso, tus objetivos.</h3>
      <div className="w-4/5 mx-auto flex justify-between mt-8">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/inge.png"
            width={244}
            height={244}
            alt="image"
            className="w-auto h-auto"
          />
          <div className="flex items-center mt-4 mb-4">
            <Image
              src="/images/user.png"
              width={56}
              height={56}
              alt="image"
              className="w-auto h-auto"
            />
            <p className="text-2xl font-semibold ml-4">Bryan Hurtado</p>
          </div>
          <p className="text-xl  mb-4">Coordinador de Marketing</p>
          <Image
            src="/images/logo_unheval.png"
            width={232}
            height={70}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/inge.png"
            width={244}
            height={244}
            alt="image"
            className="w-auto h-auto"
          />
           <div className="flex items-center mt-4 mb-4">
            <Image
              src="/images/user.png"
              width={56}
              height={56}
              alt="image"
              className="w-auto h-auto"
            />
            <p className="text-2xl font-semibold ml-4">Piero Meza</p>
          </div>
          <p className="text-xl mb-4">Coordinador de Marketing</p>
          <Image
            src="/images/logo_unheval.png"
            width={232}
            height={70}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/inge.png"
            width={244}
            height={244}
            alt="image"
            className="w-auto h-auto"
          />
          <div className="flex items-center mt-4 mb-4">
            <Image
              src="/images/user.png"
              width={56}
              height={56}
              alt="image"
              className="w-auto h-auto"
            />
            <p className="text-2xl font-semibold ml-4">Yessica Vela</p>
          </div>
          <p className="text-xl mb-4">Coordinador de Marketing</p>
          <Image
            src="/images/logo_unheval.png"
            width={232}
            height={70}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LideresPage;
