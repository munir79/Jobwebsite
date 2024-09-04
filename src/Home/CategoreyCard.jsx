

const CategoreyCard = ({cat}) => {
    const {id,logo,category_name,availability}=cat;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={logo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{category_name}</h2>
    <p>{availability}</p>
    
  </div>
</div>
    );
};

export default CategoreyCard;