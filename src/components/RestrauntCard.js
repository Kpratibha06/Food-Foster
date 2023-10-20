import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
    const {resData} = props;
    return <div className="res-card">
      <img alt="card-res"  className="food-logo" src = {CDN_URL+ resData.info.cloudinaryImageId} />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4> Rs {resData.info.feeDetails.totalFee/100} for Two</h4>
    </div>
  };

  export default RestrauntCard;