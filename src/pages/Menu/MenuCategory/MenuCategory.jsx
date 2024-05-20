import { Link } from "react-router-dom";
import MenuItem from "../../../components/shared/MenuItem";

import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {



    return (
        <div className="my-12">
            {title && <Cover img={img} title={title} ></Cover>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-2 space-y-4 mt-8">
                {
                    items.map(item => <MenuItem key={item._id} item={item}>
                    </MenuItem>)
                }
            </div>

            <div className=" flex flex-col items-center">

                <Link to={`/order/${title}`}>

                    <button className="  border-b-2 w-32 border-orange-600 rounded-b-md mt-6 p-2 font-bold hover:bg-gray-700 hover:rounded-t-md px-4 hover:text-white
            "> Order Now </button>

                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;