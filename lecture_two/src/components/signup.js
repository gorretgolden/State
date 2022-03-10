import React, {useState} from "react";
import ButtonComponent from "./button";
import InputComponent from "./input";

function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <>
      <div
        style={{
          marginBottom: 30,
          borderRadius: 20,
          margin: "auto",
          width: 300,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "whitesmoke",
          alignItems: "center",
        }}
      >
        <h3>Register Here</h3>

        {/* form */}
        <form>
          <div className="field">
            <div style={{ fontSize: 18, marginBottom: 5 }}>
              <label className="label">Username</label>
            </div>

            <div className="control">
              <InputComponent
                style={{
                  width: 250,
                  height: 30,
                  borderRadius: 10,
                  border: "none",
                }}
                type="text"
                value={username}
                name="usernamee"
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="field">
            <div style={{ fontSize: 18, marginBottom: 5 }}>
              <label className="label">Email Address</label>
            </div>

            <div className="control">
              <InputComponent
                style={{
                  width: 250,
                  height: 30,
                  borderRadius: 10,
                  border: "none",
                }}
                type="email"
                value={email}
                name="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="field">
            <div style={{ fontSize: 18, marginBottom: 5 }}>
              <label className="label">Password</label>
            </div>

            <div className="control">
              <InputComponent
                style={{
                  width: 250,
                  height: 30,
                  borderRadius: 10,
                  border: "none",
                }}
                type="password"
                value={password1}
                name = "password1"
                placeholder="Enter your password"
                onChange={e => setPassword1(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="field">
            <div style={{ fontSize: 18, marginBottom: 5 }}>
              <label className="label">Confirm password</label>
            </div>

            <div className="control">
              <InputComponent
                style={{
                  width: 250,
                  height: 30,
                  borderRadius: 10,
                  border: "none",
                }}
                type="password"
                value={password2}
                name = "password2"
                placeholder="Confirm your  password"
                onChange={e => setPassword2(e.target.value)}
              />
            </div>
          </div>
          <br />
          <ButtonComponent
            style={{
              color: "white",
              backgroundColor: "green",
              width: 250,
              borderRadius: 30,
              height: 40,
              border: "none",
            }}
            text="Register"
          />
        </form>
      </div>
      <UserInfo name={name} email={email}/>
    </>
  );
}
export default SignUpComponent;



const UserInfo = ({name,email})=> {
  return ( 

   <>
   <div style={{ marginLeft:100 }}>
   <h3> {name}</h3>
   <p>{email}</p>
   <p></p>
   </div>
  
  
         
   </>
  )
}

