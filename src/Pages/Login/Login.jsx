import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";


const Login = () => {
    const { SignIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        console.log(form)
        const email = form.get('email')
        const password = form.get('password')
        // signin user or login user 
        SignIn( email,password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <h2 className="text-3xl my-10 text-center">Place Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                 <div className="text-center mt-4 ">
                    <p>Do Not Have An Account?
                        <Link className="text-blue-600" to='/Register'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;