import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/getUser"
    }).then(res => { setUsername(res.data.username)}).catch(err => console.log(err));
  };

  return (
    <>
     <div className='{styles.container}'>
        <h1>Home</h1>
        <p>Logged in user: {username} </p>
     </div>
      
    </>
  )
}
