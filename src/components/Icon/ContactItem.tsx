import Image from "next/image"
import './style.css'

interface IProps {
    url: string
    label: string
}

const ContactItem = (props: IProps) => {
    return (
        <div className="container">
            <div className="iconContainer">
                <Image
                    className="icon"
                    src={props.url}
                    alt={props.label}
                    width={60}
                    height={60}
                />
            </div>
            <p className="info">{props.label}</p>
        </div>
    )
}

export default ContactItem