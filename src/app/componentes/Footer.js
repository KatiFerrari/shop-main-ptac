import styles from "./footer.module.css";
import Image from "next/image"
export default function Footer(){
    return(
     <footer className={styles.footer}>
          <div className={styles.cabecalho2}>
              <p  className={styles.frase}><strong>A Shop Main, inaugurada em 25 de fevereiro de 2007, oferece produtos de qualidade 
              com excelente atendimento e preços competitivos.</strong></p>
           </div> 

          <div className={styles.cabecalho3}>
            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"/>
            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"/>
            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/174/174848.png"/>
            <Image width={30} height={30} src="https://cdn-icons-png.flaticon.com/128/4494/4494495.png"/>
            <Image className={styles.imagem_direita} width={50} height={50} src="https://cdn-icons-png.flaticon.com/128/4273/4273228.png"/>
          </div>
      </footer>
    );
};