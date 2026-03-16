
// import { useContext } from "react";
// import Navbar from "../Navbar/Navbar";
 import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
// const { createUser }= useContext(AuthContext)

const handleRegister = e =>{
    e.preventDefault ();
    console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, password,name, photo );
//create user

createUser(email, password)
.then(result =>{
    console.log(result.user)
})
.catch(error =>{
    console.error(error)
})


}



    return (
        <div>
          {/* <Navbar></Navbar> */}
           <h2 className="text-3xl">Please login</h2> 
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
             <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered" required />
          </div>
           <div className="form-control">
             <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
           <input type="text" name="Photo" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
       <p className="text-center m-4">Already have an account 
        <Link to="/login"  className="text-blue-700">Login</Link> </p>
    </div>
  </div>


    );
};

export default Register;
