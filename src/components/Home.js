import React from "react";
import Products from "./Products";
import SideImg from "../assets/main.jpg"

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="d-flex justify-content-between align-items-center p-4">
        <div className="align-self-start p-5">
          <h1 className="mb-5 fs-1 fw-bold">Welcome to <span className="border-bottom border-black">Lorem</span></h1>
          <p className="fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores ipsa. Obcaecati earum reprehenderit, velit beatae eum deserunt in maiores facere odit consequuntur, hic porro, voluptates minus! Repellendus, delectus exercitationem. Reiciendis nisi quasi deleniti pariatur necessitatibus ea ipsa delectus eos unde beatae, sed amet.</p>
        </div>
        <img src={SideImg} alt="SideImg" height="480px" width="45%"/>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
