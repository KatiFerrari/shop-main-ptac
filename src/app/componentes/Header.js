import styles from "./header.module.css"
export default function Header(){
    return(
          <header className={styles.header}>
            <div className={styles.cabecalho2}> <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/128/4273/4273228.png"></img>
        <h1 className={styles.titulo}>SHOP MAIN</h1>
        <p className={styles.frase}>Torre seu dinheiro aqui e leve para casa qualidade e estilo incomparáveis!</p>
        </div>
        <div className={styles.cabecalho3}>
             <img width={50} height={50} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"></img>
            <button type="button" className={styles.button}>Novo Produto</button>
        </div>
          </header>
    );
};