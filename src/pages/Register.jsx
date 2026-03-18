
import { useContext } from "react";
//  import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
const { createUser } = useContext(AuthContext)

const handleRegister = e =>{
    e.preventDefault ();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
  

//password validation
        if (!/[A-Z]/.test(password)) {
    return alert("Password must have an uppercase letter");
}
if (!/[a-z]/.test(password)) {
    return alert("Password must have a lowercase letter");
}
if (password.length < 6) {
    return alert("Password must be at least 6 characters");
}
//create user

createUser(email, password)
.then(result =>{
    const user = result.user;
 
    updateProfile(user, {
        displayName: name,
        photoURL: photo,
    })
      .then(() => {
         alert("Registration Successful");
    
    });
    
})
.catch(error =>{
    console.error(error.massage)
});


};
  return (
        <div>
          {/* <Navbar></Navbar> */}
           <h2 className="text-3xl">Register</h2> 
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
           <input type="text" name="photo" className="input input-bordered" required />
       
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
