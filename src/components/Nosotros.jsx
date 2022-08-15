import React, { useState } from "react";
import NavBar from './NavBar'
import Loading from "./Loading";

export default function Nosotros() {
  const [loader, setLoader] = useState(true)
  setTimeout(() => {
    setLoader(false)
  }, 3000);
  return (
    <>
    <NavBar />
    {loader ? (
        <Loading />
      ) :        
        <h1>Nosotros</h1>
    }
    </>
  )
}
