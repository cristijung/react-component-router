//import MenuLink from 'components/MenuLink';

import styles from './Menu.module.scss';

export default function Menu() {
    return(
        <header>
            <nav className={styles.navegacao}>
               <a href="/">Home</a>
               <a href="/SobreMim">Sobre Mim</a>
               <a href="/Opiniao">Mande sua Opiniao</a>             
            </nav>
        </header>
    )
}
