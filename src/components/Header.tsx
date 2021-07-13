import { useContext } from 'react';
import styles from '../styles/components/Header.module.css' 

export function Header(){
  return( 
    <div className={styles.Header}>
      <img src='/logo.jpeg' />
      <p>FAÇA PARTE DA LISTA VIP PARA RECEBER NOSSAS NOVIDADES POR E-MAIL</p>
      </div>
  );
}