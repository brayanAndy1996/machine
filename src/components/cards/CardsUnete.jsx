import { Avatar } from "@nextui-org/react";
const CardsUnete = () => {
  const items = [
    {
      img: "/images/Avatar.png",
      descripcion:
        '"Gracias a este curso, obtuve las habilidades necesarias para aprobar mi certificación en seguridad informática. La inversión valió la pena, ya que ahora estoy trabajando en el área que siempre soñé."',
      nombre: "Miguel Torres",
      cargo: "Especialista en Seguridad de Redes",
    },
    {
      img: "/images/Avatar.png",
      descripcion:
        '"Este curso cambió completamente mi forma de ver el desarrollo de software. Antes de inscribirme, no tenía experiencia, pero ahora he desarrollado mi primera aplicación móvil con confianza. Lo recomiendo a todos los que quieran comenzar en este campo."',
      nombre: "Carla Ramírez",
      cargo: "Desarrolladora Junior",
    },
    {
      img: "/images/Avatar.png",
      descripcion:
        '"La combinación de teoría y práctica fue perfecta. Los ejemplos eran aplicables al mundo real y me ayudaron a entender conceptos complejos como bases de datos y ciencia de datos de forma sencilla."',
      nombre: "Luis Vargas",
      cargo: "Analista de Datos",
    },
  ];
  return (
    <div className="w-4/5 mx-auto flex gap-20">
      {items.map((item, index) => (
        <div key={index} className="flex justify-center gap-4">
          <div>
            <Avatar src={item.img} />
          </div>
          <div className="w-4/5 pt-8">
            <p>{item.descripcion}</p>
            <p>
              <span className="font-extrabold">- {item.nombre}, </span>
              {item.cargo}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsUnete;
