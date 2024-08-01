import React,{useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {
    const [data,setData] = useState({
        gmail:'',
        password:''
      });
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        if (data.gmail === 'Navaneeth' && data.password === 'Navaneeth11') {
            navigate('/initial');
        } 
        else {
            alert('Invalid credentials. Please try again.');
        }
    }
    return (
        <div style={{backgroundImage: `url('https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh'}}>
        <a href='/' style={{color:'snow'}}><b>---Back</b></a>
          <center>
            <h1>Login Page</h1>
            <form style={{width:'420px',
                        background:'rgba(108, 120, 156, 0.715)',
                        color: '#ffffff',
                        padding: '30px 40px'}}>
              <label><h2>Gmail Id:</h2></label>
              <input style={{'borderRadius':'20rem'}} type='gmail' name='gmail' onChange={changeHandler}/>
              <label><h2>Password:</h2>
              <input style={{'borderRadius':'20rem'}} type='password' name='password' onChange={changeHandler}/><br/><br/></label>
              <input type="checkbox" name="checkbox" id="checkbox" required/><span>Remember Me</span><Link to='' style={{color:'snow',paddingLeft:'60px'}}>Forgot Password ?</Link><br/><br/>
              <button style={{'borderRadius':'20rem',width:'40%',padding:'.3rem'}} onClick={submitHandler}>Login</button><br/><br/>
              <a href='/signin' style={{color:'snow'}}>Create an account ?</a>
            </form> 
          </center>
        </div>
      );
}

export default Login;
