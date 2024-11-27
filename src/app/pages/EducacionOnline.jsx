
import Image from "next/image";
import styles from './Pages.module.css'
import ListCheck from '../../components/listas/ListCheck'
const EducacionOnlinePage = () => {
    const lista = ['Información concisa sobre skills específicos', 'Más fácil de aprender, y super prácticos']
  return (
    <div className={styles.educacionOnline} id="educacion">
        <h3 className={styles.titulo}>EDUCACIÓN ONLINE PARA TU <br/>CRECIMIENTO PROFESIONAL</h3>
        <div className="flex justify-around mt-40">
            <div>
                <p className="text-white text-4xl font-extrabold">Clases cortas</p>
                <p className="text-white mt-8 mb-8">Aprende con cada clase de 2 horas de duración en <br/>promedio.</p>
                <ListCheck lista={lista}  textColor='text-white'/>
            </div>
            <Image src='/images/educacion.png' width={351} height={345} alt="image"  className="w-auto h-auto"/>
        </div>
    </div>
  )
}

export default EducacionOnlinePage