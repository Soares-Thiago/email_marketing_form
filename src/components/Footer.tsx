import { useContext } from 'react';
import styles from '../styles/components/Footer.module.css' 

export function Footer(){
  return( 
    <div className={styles.Footer}><p>Prometemos não utilizar suas informações 
    de contato para enviar qualquer tipo de SPAM
    </p></div>
  );
}