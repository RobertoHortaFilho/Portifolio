import Image from "next/image"
import './style.css'

interface IProps {
  url: string
  src: string
  label: string
}

const ContactItem = (props: IProps) => {
  return (
    <a className="container" href={`https://${props.url}`} target="_blank">
      <div className="iconContainer">
        <Image
          className="icon"
          src={props.src}
          alt={props.label}
          width={60}
          height={60}
        />
      </div>
      <p className="info">{props.label}</p>
    </a>
  )
}

export default ContactItem