import Image from "next/image";
import Link from "next/link";
import styles from "./Pages.module.css";

const SoportePage = () => {
  return (
    <div className={styles.soporte}>
      <h3 className="mb-4">
        Ayuda y Soporte <span>Contactate con Nosotros...</span>
      </h3>
      <div className="flex justify-between items-center w-3/5 mx-auto mb-2">
        <div className={styles.soporteCaja}>
          <Image
            src="/images/qr_bryan.png"
            width={231}
            height={238}
            alt="image"
            className="w-auto h-auto"
          />
          <div className="ml-10">
            <div className="flex items-center mb-4">
              <Image
                src="/images/user_2.png"
                width={56}
                height={56}
                alt="image"
                className="w-auto h-auto"
              />
              <p className={styles.nombre}>Bryan Hurtado</p>
            </div>
            <div>
              <p className={styles.red}>Soporte tecnico</p>
              <div className="flex justify-around">
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="/images/insta_2.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
                <Link href="https://www.facebook.com/brayan.hurtadoalvarado/" target="_blank">
                  <Image
                    src="/images/fb.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/soporte.png"
          width={142}
          height={142}
          alt="image"
          className="w-auto h-auto"
        />
      </div>
      <div className="flex justify-between items-center w-3/5 mx-auto mb-2">
        <Image
          src="/images/soporte.png"
          width={142}
          height={142}
          alt="image"
          className="w-auto h-auto"
        />
        <div className={styles.soporteCaja}>
          <Image
            src="/images/qr_piero.png"
            width={231}
            height={238}
            alt="image"
            className="w-auto h-auto"
          />
          <div className="ml-10">
            <div className="flex items-center mb-4">
              <Image
                src="/images/user_2.png"
                width={56}
                height={56}
                alt="image"
                className="w-auto h-auto"
              />
              <p className={styles.nombre}>Piero Meza</p>
            </div>
            <div>
              <p className={styles.red}>Soporte tecnico</p>
              <div className="flex justify-around">
                <Link href="https://www.instagram.com/piero_wm/profilecard/" target="_blank">
                  <Image
                    src="/images/insta_2.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
                <Link href="https://www.facebook.com/pw.mezanieto/" target="_blank">
                  <Image
                    src="/images/fb.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-3/5 mx-auto">
        <div className={styles.soporteCaja}>
          <Image
            src="/images/qr_yes.png"
            width={231}
            height={238}
            alt="image"
            className="w-auto h-auto"
          />
          <div className="ml-10">
            <div className="flex items-center mb-4">
              <Image
                src="/images/user_2.png"
                width={56}
                height={56}
                alt="image"
                className="w-auto h-auto"
              />
              <p className={styles.nombre}>Yessica Vela</p>
            </div>
            <div>
              <p className={styles.red}>Soporte tecnico</p>
              <div className="flex justify-around">
                <Link href="https://www.instagram.com/yess_c.y" target="_blank">
                  <Image
                    src="/images/insta_2.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
                <Link href="https://www.facebook.com/yessica.vela.505?rdid=ZDgKOolq1VqStPGa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FAe3MxEQVVGKZiRHf%2F" target="_blank">
                  <Image
                    src="/images/fb.png"
                    width={56}
                    height={56}
                    alt="image"
                    className="w-auto h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/soporte.png"
          width={142}
          height={142}
          alt="image"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default SoportePage;
