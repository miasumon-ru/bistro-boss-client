import Cover from "./Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>

            <Cover
            img={img}
            title={"Our Menu"}
            ></Cover>

            <PopularMenu></PopularMenu>

            
            
        </div>
    );
};

export default Menu;