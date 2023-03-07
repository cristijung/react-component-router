import styles from './Header.module.scss';
import minhaFoto from '../../assets/minha-foto.png';

export default function Header() {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Rhaenyra Targaryen
                </h1>

                <p className={styles.paragrafo}>
                Aqui vai o texto
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Rhaenyra Targaryen"
                    />
            </div>

        </div>
        
        </>
    )
}