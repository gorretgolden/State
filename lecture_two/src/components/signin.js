import React from 'react';
import ButtonComponent from './button';
import InputComponent from './input';

function SignInComponent() {

    return ( 
      <>
      <div style={{borderRadius:20,marginBottom:30,margin:'auto',width:300,height:340, padding:20, display:'flex', flexDirection:'column',justifyContent:'space-around',backgroundColor:'whitesmoke',alignItems:'center' }}>
      <h3>Login Form</h3>
            <form>
            <div className="field">
              <div style={{ fontSize:18,marginBottom:5 }}>
              <label  >Email Address:</label>
              </div>
                
                <div className="control">
                <InputComponent style={{ width:250,height:30, borderRadius:10,border:'none' }}  type="email" name="email" placeholder="Enter your email"/>
                 
                </div>
              </div>
              <br/>
              <div className="field">
                <div style={{ fontSize:18,marginBottom:5 }}>
                <label className="label">Password</label>
                </div>
                
                <div className="control">

                 <InputComponent style={{ width:250,height:30, borderRadius:10, border:'none' }} type="password" name="password" placeholder="Enter your password"/>
                </div>

              </div>
              <br/>
             <ButtonComponent style={{marginTop:30, color:'white',backgroundColor:'black',width:250,borderRadius:30,height:40,border:'none' }} text="SignIn"/>
            </form>
      </div>
     
            
      </>
     
    )
}
export default SignInComponent;