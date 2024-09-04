

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className="text-center">
           <h4 className="text-3xl font-extrabold">{heading} </h4> 
           <h5>{subHeading}</h5>
        </div>
    );
};

export default SectionTittle;