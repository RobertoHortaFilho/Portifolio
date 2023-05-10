import './globalStyle.css'
import Photo from './AsideComponents/Photo'
import ContactItem from './Icon/ContactItem'
import Achivements from './AsideComponents/Achievements'

const Aside = () => {
    return (
        <div className='AsideStyle bordas espacamento'>
            <Photo />
            <div className='contactSection'>
                <ContactItem src='/icons/location.png' label='Belo Horizonte, MG' url='' />
                <ContactItem src='/icons/whatsapp.png' label='+55 31 9 8832-8572' url='' />
                <ContactItem src='/icons/linkedin.png' label='/RobertoHortaFilho' url='' />
                {/* <ContactItem url='/icons/link.png' label='Belo Horizonte, MG' /> */}
                <ContactItem src='/icons/github.png' label='/RobertoHortaFilho, MG' url='github.com/RobertoHortaFilho' />
                <ContactItem src='/icons/email.png' label='robertohortafilho@gmail.com' url='' />
            </div>
            <div className='HtmlLine'/>
            <Achivements />
            <div className='HtmlLine'/>
        </div>
    )
}


export default Aside