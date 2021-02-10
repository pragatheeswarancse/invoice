import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SearchBox from '../components/search'
import FormEmployer from '../components/employee/formEmployee'

export default function Employee() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <FormEmployer />
    </div>
  )
}