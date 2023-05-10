import './globalStyle.css'
import Photo from './AsideComponents/Photo'
import ContactItem from './Icon/ContactItem'

const Aside = () => {
    return (
        <div className='AsideStyle bordas espacamento'>
            <Photo />
            <div className='contactSection'>
                <ContactItem url='/icons/location.png' label='Belo Horizonte, MG' />
                <ContactItem url='/icons/whatsapp.png' label='+55 31 9 8832-8572' />
                <ContactItem url='/icons/linkedin.png' label='/RobertoHortaFilho' />
                {/* <ContactItem url='/icons/link.png' label='Belo Horizonte, MG' /> */}
                <ContactItem url='/icons/github.png' label='/RobertoHortaFilho, MG' />
                <ContactItem url='/icons/email.png' label='robertohortafilho@gmail.com' />
            </div>
        </div>
    )
}


export default Aside