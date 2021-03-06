import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SearchBox from '../components/search'
import Form from '../components/home/form'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <Form />
    </div>
  )
}
