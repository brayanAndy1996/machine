import Image from "next/image";
import styles from "../../app/pages/Pages.module.css";

const CardTemario = () => {
  const items = [
    {
      urlImage: "/images/image_8.png",
      title: "Fundamentos de Machine Learning y Preprocesamiento de Datos",
      descripcion: [
        "Introducción al Machine Learning",
        "Aprendizaje Supervisado vs. No Supervisado",
        "Preprocesamiento de Datos",
        "Evaluación de Modelos",
      ],
    },
    {
      urlImage: "/images/curva.png",
      title: "Modelos Lineales y Logísticos",
      descripcion: [
        "Regresión Lineal",
        "Regresión Logística",
        "Regularización",
        "Evaluación de Modelos de Clasificación",
      ],
    },
    {
      urlImage: "/images/image_4.png",
      title: "Árboles de Decisión y Ensambles",
      descripcion: [
        "Árboles de Decisión",
        "Random Forest",
        "Gradient Boosting",
        "XGBoost",
      ],
    },
    {
      urlImage: "/images/image_5.png",
      title: "Modelos avanzados",
      descripcion: [
        "Redes Neuronales Artificiales",
        "Deep Learning",
        "Aprendizaje por Refuerzo",
        "Aplicaciones en el Mundo Real",
      ],
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={item.index} className={styles.temarioCard}>
          <div className="rotate-180 mr-8">
            <Image src={item.urlImage} width={60} height={60} alt="image" />
          </div>
          <div>
            <h3 className="font-bold mb-4">{item.title}</h3>
            {item.descripcion?.map((desc, item) => (
              <p key={item + desc}><span className="font-black text-xl">.</span> {desc}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTemario;
