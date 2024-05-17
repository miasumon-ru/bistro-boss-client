import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/shared/MenuItem";



const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(()=> {

        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter (item => item.category === "popular")

            setMenu(popularItems)

        })

    },[])

    console.log(menu)


    return (
        <div className="my-24">

            <SectionTitle

            subHeading={"Check It Out"}
            heading={'From Our Menu'}
            
            >

            </SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-2 space-y-4">
                {
                    menu.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    
                    ></MenuItem>)
                }
            </div>

            


            
        </div>
    );
};

export default PopularMenu;