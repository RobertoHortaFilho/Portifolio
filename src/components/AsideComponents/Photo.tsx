import './photo.css'
import Image from "next/image";


const Photo = () => {
  return (
    <div className="containerPhoto">
      <Image
        src="/images/perfil-picture.png"
        alt="picture-profile"
        className="photo"
        width={350}
        height={350}
      />
      <div className="iconeContainer">
        <Image
          src="/icons/open-book.png"
          alt="icon book"
          className='icone'
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}

export default Photo
