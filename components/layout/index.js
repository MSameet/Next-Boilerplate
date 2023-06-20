import React from "react";
import { Footer } from "../base/footer";
import { Header } from "../base/header";

const index = (children) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default index;
