import React from "react";
import Main from "../layouts/Main";
import { Image } from "@chakra-ui/react";


const Home = () => {
  return (
    //  Align the Container to middle vertically
    <>
    
    <Main/>
    <Image src='https://i.pinimg.com/564x/e7/59/83/e75983d0104c63d9fbff045152508b08.jpg' alt='Star Wars' objectFit="fill" width="8xl"  />
   
    </>
    
  );
};

export default Home;
