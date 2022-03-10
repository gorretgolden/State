import React from 'react';

function ButtonComponent({style, color, text}) {

    return ( 

     <>
     <button 
         color = {color}
         style={style}>{text}</button>
     </>
           
     
    )
}
export default ButtonComponent;
{/* <div style={{margin:'auto',width:200,height:130,display:'flex',flexDirection:'column',alignItems:'center',marginTop:50,backgroundColor:'green'}}>
          <h3 style={{ color:'white' }}>Counter Button</h3>
      <button  onClick={increament}></button>
      </div>
       */}