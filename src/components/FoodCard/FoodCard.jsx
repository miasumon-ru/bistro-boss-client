


const FoodCard = ({item}) => {

    const { name, image, price, recipe } = item

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute  right-4 top-6 px-4 rounded-md font-bold text-white"> ${price} </p>
            <div className="card-body flex flex-col text-center items-center">
                <h2 className="card-title"> {name} </h2>
                <p> {recipe} </p>
                
                <div className="card-actions">
                    <button className="btn btn-primary my-2"> Add To Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;