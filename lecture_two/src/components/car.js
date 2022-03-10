import React, {useState} from 'react';

function CarComponent() {
    const [color, setColor] = useState('green');
    const [brand,setBrand] = useState('lexus');
    const [noOfWheels,setNoOfWheels] = useState(4)
    const [man_year,setMan_year] = useState('2022')

    return ( 

     <>
     <div style={{ marginLeft:100 }}>
     <h3>The car color is {color}</h3>
     <h3>The car has  {noOfWheels} wheels</h3>
     <h3>The car brand is {brand}</h3>
     <h3>The car was manufactured in {man_year}</h3>

     <button style={{ backgroundColor:'green',border:'none',color:'white' }} onClick={() => setColor('red')}>Change color</button>
     <p>{color}</p>
     </div>
    
    
           
     </>
    )
}
export default CarComponent;