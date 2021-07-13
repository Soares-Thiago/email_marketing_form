import { useContext } from 'react';
import styles from '../styles/components/Form.module.css' 

export function Form(){
  return( 
    <div className={styles.Form}>
        <form className={styles.Form}>
        <label >Nome *</label>
        <input type="text" id="name" name="name" />

        <label>Email *</label>
        <input type="email" id="email" name="email" />

        <label>9 + 5 = ?</label>
        <input type="number" id="result" name="result" />
      
        <input type="submit" value="QUERO FAZER PARTE DA LISTA VIP" />
        </form>
    </div>
  );
}