import {useState } from 'react'
import './index.css'
import { useAuth } from '../../context/AuthContext'
import plateIcon from '../../assets/logov.png';
import { useNavigate } from 'react-router-dom';

const SignInPage=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')

    const navigate = useNavigate();

    const {login}=useAuth()

    const onLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');

        try{
            const options={
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
           }

           const response  = await fetch('https://serverless-api-teal.vercel.app/api/auth/signin',options)
           const data =await response.json()

           if(data.success){
            login(data.data.user,data.data.token)
            navigate('/',{replace:true})

           }else{
            setError(data.message)
           }
        }catch{
            setError('Connection failed. Please check your internet and try again.');
        }finally{
            setLoading(false)
       }
    }

    return(
        <div className='login-bg'>
            <form onSubmit={onLogin} className='login-form'>
                <div className='login-form-top'>
                  <img src={plateIcon}/>
                  <h1 className='party-menu-title'>Party Menu</h1>
                  <p className='sign-in-description'>Sign in to explore our delicious menu</p>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className='input-container'>
                  <label htmlFor='email'>Email</label>
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id='email' placeholder='admin@example.com'/>
                </div>
                <div className='input-container'>
                  <label htmlFor='password'>Password</label>
                  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id='password' placeholder='Enter your password'/>
                </div>
                <button 
                  type='submit' 
                  className='signin-btn' 
                  disabled={loading}
                    >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    )

}

export default SignInPage
