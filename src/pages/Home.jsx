
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";







const Home = () => {
    return (
        <div>
         <Banner></Banner>
<Outlet>
  
</Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Home;