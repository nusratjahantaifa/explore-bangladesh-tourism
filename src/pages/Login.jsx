import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
   const { signInUser, googleLogin } = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
      //  console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
      //  console.log(form.get('password'));
        const email = form.get("email");
    const password = form.get("password");
      signInUser(email, password)
      .then((result) => {
        alert("Login Successful");
      })
      .catch(() => {
        alert("Invalid email or password");
      });
    }
     const handleGoogle = () => {
    googleLogin()
      .then(() => {
        alert("Google Login Success");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

    return (
        <div>
           <Navbar></Navbar>

              
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h2 className="text-3xl my-10 text-center">Please Login</h2> 
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {/* google login */}
        <div className="text-center">
        <button onClick={handleGoogle} className="btn btn-outline mt-2">
          Login with Google
        </button>
      </div>
      <p className="text-center mt-4">Do not have an account<Link className="text-blue-600" to="/register" >Register</Link></p>

    </div>
  </div>
</div>

    
    );
};

export default Login;