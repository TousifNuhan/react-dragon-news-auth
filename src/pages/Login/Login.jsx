
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {userLogin}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
    const navigate=useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email=form.get('email')
        const pass=form.get('password')
        console.log(email,pass);

        userLogin(email,pass)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="hero min-h-screen bg-base-200 ">              
                <div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Do not have an account? <Link to="/register" className='text-purple-900'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;