import React,{useState} from 'react';

const Signin = () => {
    const [data,setData] = useState({
        gmail:'',
        password:''
      });
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    return (
        <div style={{backgroundImage: `url('https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh'}}>
        <a href='/' style={{color:'snow'}}><b>---Back</b></a>
          <center>
            <h1><b>Sign in Page</b></h1>
            <form style={{width:'420px',
                        background:'rgba(108, 120, 156, 0.715)',
                        color: '#ffffff',
                        padding: '30px 40px'}}>
                <label><h2>Username:</h2></label>
                <input style={{'borderRadius':'20rem'}} type='text' name='uname' onChange={changeHandler}/>
                <label><h2>Number:</h2></label>
                <input style={{'borderRadius':'20rem'}} type='text' name='number' onChange={changeHandler}/>
                <label><h2>Gmail Id:</h2></label>
                <input style={{'borderRadius':'20rem'}} type='gmail' name='gmail' onChange={changeHandler}/>
                <label><h2>Password:</h2>
                <input style={{'borderRadius':'20rem'}} type='password' name='password' onChange={changeHandler}/><br/><br/></label>
                <input type="checkbox" name="checkbox" id="checkbox" required/><span>Remember Me</span><a href='/login' style={{color:'snow',paddingLeft:'60px'}}>Already have an account ?</a><br/><br/>
                <button style={{'borderRadius':'20rem',width:'40%',padding:'.3rem'}} onClick={''}>Signin</button><br/><br/>
            </form> 
          </center>
        </div>
      );
}

export default Signin;
