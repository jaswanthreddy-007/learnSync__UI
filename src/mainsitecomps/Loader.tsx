// Filename - loader.js

import { TailSpin } from "react-loader-spinner";

import React from 'react'

const LoaderCOmp = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#007bff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default LoaderCOmp
