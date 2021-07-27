import axios from 'axios';
import React from 'react';
import styles from '../styles/components/Form.module.css' 

export function Form(){
  async function handleSubmit(e: any) {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());
    if(value.name.toString()!=="" && value.email.toString()!==""){
      if(value.result.toString() == "14"){
        value.page = "60f6cedfaba11a5e352a2ab1"
        await axios
        .post("https://belle-strapi.herokuapp.com/emails/", value)
        .then(({ data }) => {
          alert("Obrigado por se inscrever!")
          window.location.reload()
        })
        .catch((e) => {
          alert("Ops! Esse e-mail já está cadastrado")
        });
      }else{
        alert("Ops! A soma está errada")
      }
    }
    
  }

  return( 
    <div className={styles.Form}>
        <form className={styles.Form} onSubmit={handleSubmit}>
        <label >Nome *</label>
        <input type="text" id="name" name="name" />

        <label>Email *</label>
        <input type="email"  id="email" name="email" />

        <label>9 + 5 = ?</label>
        <input type="number"  id="result" name="result" />
      
        <input type="submit" value="QUERO FAZER PARTE DA LISTA VIP" />
        </form>
    </div>
  );
}