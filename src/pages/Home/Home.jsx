
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>

            <Featured></Featured>
        </div>
    );
};

export default Home;