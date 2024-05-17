


const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="max-w-96 text-center mx-auto my-12">

            <p className="text-yellow-600 font-bold"> --- {subHeading} --- </p>
            <h1 className="text-4xl uppercase border-y-2 p-3 font-bold mt-4"> {heading} </h1>
            
        </div>
    );
};

export default SectionTitle;