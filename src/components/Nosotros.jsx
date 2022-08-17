import React, { useState } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
import Footer from "./Footer";

export default function Nosotros() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2500);
  return (
    <>
      <NavBar />
      {loader ? (
        <Loading />
      ) : (
        <div>
          <h1>Nosotros</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            adipisci expedita aliquam perferendis. Provident a itaque explicabo
            nihil excepturi quidem aliquid error optio. Quae ipsum sint enim,
            dignissimos magnam ut!
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}
