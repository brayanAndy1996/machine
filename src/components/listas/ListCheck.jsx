
import Image from "next/image";

const ListCheck = ({ lista=[], textColor='text-black' }) => {
  return (
    <>
        {
            lista.map( (element, index)=>(
            <div className='flex mb-2'key={element + index}>
                <Image src='/images/check.png' width={23} height={23} alt="image"  className="w-auto h-auto"/>
                <p className={textColor + ' ml-2'}>{element}</p>
            </div> ))
        }
    </>
  )
}

export default ListCheck