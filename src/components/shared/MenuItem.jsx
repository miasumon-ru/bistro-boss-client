

const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item
    return (
        <div>

            <div className="flex flex-row  gap-4">
                <img style={{borderRadius: "0 200px 200px 200px "}} className={'max-w-24'} src={image} alt="" />
                <div className="">
                    <p className="uppercase mb-2"> {name} ----------- </p>
                    <p  > {recipe} </p>
                </div>

                <p className="text-yellow-600"> ${price} </p>
            </div>

        </div>
    );
};

export default MenuItem;