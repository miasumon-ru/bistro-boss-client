
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/shared/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {

    const [menu, loading] = useMenu()

    const popularItems = menu.filter (item => item.category === "popular")

    if(loading){
        return "loading..."
    }

    return (
        <div className="my-24">

            <SectionTitle

            subHeading={"Check It Out"}
            heading={'From Our Menu'}
            
            >

            </SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-2 space-y-4">
                {
                    popularItems.map(item => <MenuItem

                        key={item._id}
                        item={item}
                                      
                    ></MenuItem>)
                }
            </div>

            


            
        </div>
    );
};

export default PopularMenu;