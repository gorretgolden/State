import React from 'react';

function InputComponent({placeholder,type,name, style}) {

    return ( 

     <>
     <input placeholder={placeholder} type={type} name={name} style={style} />
     </>
           
     
    )
}
export default InputComponent;