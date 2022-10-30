import React from 'react'

function Button(props){
  let {id, name, link} = props;
  return(
    <>
      <button id = {id} href={link}>{name}</button>
    </>
  );
}
export default Button;