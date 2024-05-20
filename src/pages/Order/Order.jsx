import Cover from "../Menu/Cover/Cover";

import orderImg from '../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";


const Order = () => {

    const {category} = useParams()

    console.log(category)

    const categories = ["salad", 'pizza', "soup", 'desert', 'drink']
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);

   

    const [menu] = useMenu()

    const deserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Cover
                img={orderImg}
                title={'Order Food'}
            ></Cover>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad </Tab>
                        <Tab> Pizza</Tab>
                        <Tab> Soup </Tab>
                        <Tab> Desert </Tab>
                        <Tab> Drink </Tab>

                    </TabList>

                    <TabPanel>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            {
                                salad.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>


                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            {
                                pizza.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            {
                                soup.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>




                    </TabPanel>
                    <TabPanel> 

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            {
                                deserts.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>


                    </TabPanel>
                    <TabPanel> 

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                            {
                                drinks.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                            }
                        </div>


                    </TabPanel>
                </Tabs>



            </div>

        </div>
    );
};

export default Order;