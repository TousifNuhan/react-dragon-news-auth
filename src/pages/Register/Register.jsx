import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        const email=form.get('email');
        const name=form.get('name')
        const pass=form.get('password')
        console.log(email,name,pass);

        //create User

        createUser(email,pass)
        .then(result=>console.log(result.user))
        .catch(error=>console.error(error))

    }
    return (
        <div>
            <Navbar></Navbar>
             <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <div className="hero min-h-screen bg-base-200">
                <div >
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>If you have an account? <Link to="/login" className='text-purple-900'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;