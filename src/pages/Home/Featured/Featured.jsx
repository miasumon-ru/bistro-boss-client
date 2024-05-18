import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
    return (
        <div>
            <SectionTitle

                subHeading="Check It Out"
                heading="Featured Item"


            ></SectionTitle>

            <div className="featured-item  py-20 px-36">
                <div className="flex flex-row gap-4">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>

                    <div className="flex flex-col justify-center text-white">
                        <p> March 20, 2023 </p>
                        <p> Where can I get some ? </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis illo quisquam cupiditate ullam tempora veniam labore error illum, placeat, magnam quae ut. Debitis cumque iste, ratione ducimus quasi quas aspernatur, nihil architecto aperiam et eum eos rerum suscipit soluta blanditiis pariatur omnis? Veniam officia omnis perspiciatis qui molestias ea?</p>

                        <button className=" border-b-2 w-32 border-orange-600 rounded-b-md mt-6 p-2 font-bold hover:bg-gray-700 hover:rounded-t-md px-4">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;