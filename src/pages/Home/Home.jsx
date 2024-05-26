
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>

            {/* <Helmet>
                <title> Home || Bistro Boss </title>
            </Helmet> */}


            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>

            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;