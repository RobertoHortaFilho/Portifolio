import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
    return(
        <div className={styles.header}>
            <Image
                src="/images/perfil-picture.png"
                alt="picture-profile"
                className={styles.circleImage}
                width={40}
                height={40}
                priority
            />
            <h1 className={styles.name}>Roberto Alessandro Horta Filho</h1>
            <div className={styles.darkContainer}>
                <Image
                    src="/icons/dark.png"
                    alt="dark-mode"
                    className={styles.imageDarkmode}
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default Header