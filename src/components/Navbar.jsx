import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
 const { user, logOut } = useContext(AuthContext);
 const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch(err => console.log(err));
  };

  const navLinks = (
    <>
      <NavLink to="/">Card</NavLink>
       <NavLink to="/home">Home</NavLink>
      <NavLink to="/allSpots">All Tourists Spot</NavLink>
      <NavLink to="/addSpot">Add Tourists Spot</NavLink>
      <NavLink to="/myList">My List</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          🌍 TravelBD
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-4 items-center">
        {navLinks}

        {/* Conditional Auth */}
        {
          user ? (
            <>
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <button onClick={handleLogout} className="btn btn-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm">Login</Link>
              <Link to="/register" className="btn btn-sm">Register</Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;


// const Navbar = () => {
//     return (
//         <div>
//             <h1 className="text-2xl">Navbar</h1>
//         </div>
//     );
// };

// export default Navbar;