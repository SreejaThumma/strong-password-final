import React,{useState} from 'react'
const Passwordchecker=()=>{
  const [password,setpassword]=useState('');
  const [strength,setstrength]=useState('');
  const Strengthchecker=(password)=>{
    let score=0;
    if(password.length>=8) score++;
    if(/\d/.test(password)) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;
    if (score<=2){
      setstrength('weak');
    }
    else if(score===3||score===4){
      setstrength('moderate');
    }
    else if(score===5){
      setstrength('strong');
    }
    else{
      setstrength('')
    }
  };
  const handlechange=(e)=>{
    const np=e.target.value;
    setpassword(np);
    Strengthchecker(np);
  };
  return(
    <div>
    <h1>password strength checker</h1>
    <input
    type="password"
    placeholder="enter password"
    value={password}
    onChange={handlechange}
    />
    <h1>passwordstrength : {strength}</h1>
    </div>
  )
}
export default Passwordchecker