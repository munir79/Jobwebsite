

const FeatureCard = ({feat}) => {
    const {id,logo,remote_or_onsite,job_title,company_name,salary,location}=feat;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default FeatureCard;