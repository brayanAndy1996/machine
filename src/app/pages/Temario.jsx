import Image from "next/image";
import styles from './Pages.module.css'
import CardTemario from '../../components/temario/CardTemario'
const Temario = () => {
  return (
    <div className={styles.temario}>
        <div className='w-3/5 h-full'>
            <CardTemario/>
        </div>
        <Image src='/images/image_1.png' width={436} height={352} alt="image" />
    </div>
  )
}

export default Temario