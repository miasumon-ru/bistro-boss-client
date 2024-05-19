import Cover from "./Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

import desertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'


import useMenu from "../../hooks/useMenu";



const Menu = () => {
    
const [menu] = useMenu()

const deserts = menu.filter(item => item.category === 'dessert')
const soup = menu.filter(item => item.category === 'soup')
const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')


console.log(deserts)
    return (
        <div>

            <Cover
            img={img}
            title={"Our Menu"}
            ></Cover>

            <PopularMenu></PopularMenu>

            <MenuCategory
            items={deserts}
            img={desertImg}
            title={"Our Desserts"}
            ></MenuCategory>

            <MenuCategory
            items={soup}
            img={soupImg}
            title={"Our Soup"}
            ></MenuCategory>

            <MenuCategory
            items={salad}
            img={saladImg}
            title={"Our Salad"}
            ></MenuCategory>

            <MenuCategory
            items={pizza}
            img={pizzaImg}
            title={"Our Pizza"}
            ></MenuCategory>



            
            
        </div>
    );
};

export default Menu;