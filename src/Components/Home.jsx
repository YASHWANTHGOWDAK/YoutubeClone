import Banner from "./Banner";
import Categories from "./Categories";
import Vedios from "./Vedios";

const Home = () => {
    return ( 
        <div className="home">

            <Categories/>
            
            <Banner/>

            <Vedios/>

        </div>
     );
}
 
export default Home;