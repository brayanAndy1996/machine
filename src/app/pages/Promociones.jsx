import Image from "next/image";
import styles from "./Pages.module.css";
const PromocionesPage = () => {
  return (
    <div className={styles.promociones} id="promociones">
      <div className="mr-10 flex flex-col justify-center items-center">
        <h3 className="text-6xl font-bold mb-8">Promociones</h3>
        <div>
          <Image
            src="/images/tarjeta_credito.png"
            width={330}
            height={325}
            alt="image"
            className="w-auto h-auto"
          />
        </div>
        <p className="mt-8 text-4xl font-semibold">Curso + Certificado</p>
        <div className="relative">
          <Image
            src="/images/precio.png"
            width={330}
            height={325}
            alt="image"
            className="w-auto h-auto"
          />
          <p className="absolute z-20 top-20 left-20 text-black text-6xl font-bold">S/ 150!!</p>
        </div>
      </div>
      <div>
        <div className={styles.anuncio}>
          <Image
            src="/images/reloj.png"
            width={75}
            height={75}
            alt="image"
            className="w-auto h-auto"
          />
          <p>
            Descuentos tempranos: 15% de descuento
            <br /> para las primeras 50 inscripciones.
          </p>
        </div>
        <div className={styles.anuncio}>
          <Image
            src="/images/personas.png"
            width={75}
            height={75}
            alt="image"
            className="w-auto h-auto"
          />
          <p>
            Promoción grupal: Descuento adicional del
            <br /> 10% para grupos de 3 o más personas.
          </p>
        </div>
        <div className={styles.anuncio}>
          <Image
            src="/images/diploma.png"
            width={75}
            height={75}
            alt="image"
            className="w-auto h-auto"
          />
          <p>
            Becas parciales: Disponibilidad de becas
            <br /> parciales para estudiantes con méritos
            <br /> académicos o dificultades económicas, <br />
            previa solicitud y evaluación.
          </p>
        </div>
        <div className={styles.anuncio}>
          <Image
            src="/images/ticket.png"
            width={75}
            height={75}
            alt="image"
            className="w-auto h-auto"
          />
          <p>
            Referidos: Obtén un 5% de descuento
            <br /> adicional por cada persona que se inscriba
            <br />
            utilizando tu código de referencia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromocionesPage;
