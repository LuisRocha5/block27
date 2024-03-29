import { useState } from 'react'
import './App.css'
import Authenticate from "./Authenticate";
import SignUpForm from "./SignUpForm";
function App() {
  const [token, setToken] = useState(null);

 return (
    <>
            
      <SignUpForm token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />
          
    </>
  );
}
export default App
