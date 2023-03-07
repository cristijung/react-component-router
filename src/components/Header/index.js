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
                Rhaenyra Targaryen foi a filha mais velha do Rei Viserys I. 
                Ela disputou o Trono de Ferro com seu meio-irmão mais novo, Aegon II, numa guerra civil que ficou 
                conhecida como Dança dos Dragões. Foi casada duas vezes e mãe de cinco filhos, entres os quais Aegon 
                e Viserys, sendo que ambos se tornaram reis após sua morte.
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