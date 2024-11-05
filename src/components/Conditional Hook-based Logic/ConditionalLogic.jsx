/*eslint-disable*/
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const ConditionalLogic = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const [message, setMessage] = useState(isDesktop ? "Welcome Desktop User" : "Welcome Mobile User");

  return <p>{message}</p>;
};

export default ConditionalLogic;
