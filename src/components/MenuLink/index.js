import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.scss';

export default function MenuLink({children, to}) {
    const localizacao = useLocation();

    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkSublinhado : ''}
        `} to={to}>
            {children}
        </Link>
    )
}
