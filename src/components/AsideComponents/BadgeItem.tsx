import Image from "next/image";
import './badgeItem.css'

const BadgeItem = () => {
    return (
        <div className="containerBadge">
            <Image
                className="ImageBadge"
                src='/images/Icon-anime.png'
                alt='Medalha'
                width={250}
                height={250}
            />
        </div>
    )
}

export default BadgeItem