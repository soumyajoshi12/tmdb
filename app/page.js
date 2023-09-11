"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Home from "./home/home"
import { MyContextProvider, useMyContext } from '@/utils/context'

const page = () => {

  
  // const [users, setusers] = useContext(MyContextProvider);
  const {users, setusers} = useContext(MyContextProvider);

  console.log(users);
  return (
    <div>
      <Header/>
      <Home/>
        <Link href="/"></Link>
        <Link href="/movie/:id"></Link>
        <Link href="/movies/:type"></Link>
    </div>
  )
}

export default page