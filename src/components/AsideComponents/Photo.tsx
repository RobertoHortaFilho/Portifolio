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
        </div>
    )
}

export default Photo