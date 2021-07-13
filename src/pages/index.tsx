import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
export default function Home() { 
  
  return (
        <div className={styles.container}> 
            <div className={styles.content}>
              <Header/>
              <Form/>
              <Footer/>
            </div>
        
        </div>
  )
}
