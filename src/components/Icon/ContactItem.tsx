import Image from "next/image"
import './style.css'

interface IProps {
  url?: string
  src: string
  label: string
}

const ContactItem = (props: IProps) => {
  return (
    <>
    {props.url ? (
      <a className="container" href={props.url} target="_blank">
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
    ) : (
      <div className="container">
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
      </div>

    )}
    
    </>
  )
}

export default ContactItem