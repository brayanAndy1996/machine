import styles from '../../app/pages/Pages.module.css'

const CardsPregunta = () => {
    const items = [
        {
            pregunta: '¿Cuál es la duración del curso?',
            respuesta: 'El curso está estructurado para ser completado en un período de 16 semanas, permitiendo un ritmo de aprendizaje gradual, asegurando una buena comprensión de los conceptos y la posibilidad de realizar proyectos significativos.'
        },
        {
            pregunta: '¿Necesito tener conocimientos previos en programación?',
            respuesta: 'Aunque se recomienda tener experiencia previa con programación en Python, no es indispensable para inscribirse en el curso. Se ofrecen recursos y materiales para ayudar a los principiantes.'
        },
        {
            pregunta: '¿Se proporcionará alguna certificación al finalizar el curso?',
            respuesta: 'Sí, una vez que los participantes completen satisfactoriamente el programa, recibirán un certificado digital avalado por la plataforma y los facilitadores.'
        },
        {
            pregunta: '¿Qué recursos y materiales se proporcionarán durante el curso?',
            respuesta: 'Se proporcionará acceso a una variedad de materiales didácticos, incluyendo videos explicativos, presentaciones, lecturas, notebooks de Jupyter y datasets para practicar. Todo estará disponible en la plataforma de aprendizaje online.'
        },
        {
            pregunta: '¿Hay alguna promoción o descuento disponible?',
            respuesta: 'Sí, se ofrecerán descuentos tempranos para las primeras inscripciones, descuentos grupales y becas parciales para estudiantes.'
        },
    ]
  return (
    <div className='w-4/5 mx-auto flex flex-col gap-4'>
        {
            items.map( (item, index)=>(
                <div key={index} className='w-full border-2 border-gray-200 py-6 px-8'>
                    <p className={styles.textBlue}>{item.pregunta}</p>
                    <p className='text-center px-2 text-sm mt-2'>{item.respuesta}</p>
                </div>
            ) )
        }
    </div>
  )
}

export default CardsPregunta