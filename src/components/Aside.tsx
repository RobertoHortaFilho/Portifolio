'use client'
import './globalStyle.css'
import Photo from './AsideComponents/Photo'
import ContactItem from './Icon/ContactItem'
import Achivements from './AsideComponents/Achievements'
import generateClassName from '@/utils/generateClassName'


const Aside = () => {
    return (
        <div className={generateClassName('AsideStyle bordas espacamento', 'border')}>
            <Photo />
            <div className='contactSection'>
                <ContactItem src='/icons/location.png' label='Belo Horizonte, MG' />
                <ContactItem src='/icons/whatsapp.png' label='+55 31 9 8832-8572' url='https://wa.link/la0x7y' />
                <ContactItem src='/icons/linkedin.png' label='Roberto Filho' url='https://www.linkedin.com/in/robertohortafilho/' />
                <ContactItem src='/icons/github.png' label='/RobertoHortaFilho, MG' url='https://www.github.com/RobertoHortaFilho' />
                <ContactItem src='/icons/email.png' label='robertohortafilho@gmail.com' />
            </div>
            <div className='HtmlLine'/>
            <Achivements />
            <div className='HtmlLine'/>
        </div>
    )
}


export default Aside