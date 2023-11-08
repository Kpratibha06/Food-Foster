import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const { resData } = props;
  // console.log(resData)
  return (
    <div className="m-4 p-4 h-86 w-[200px] bg-slate-200 hover:bg-slate-400 rounded-lg">
      <img
        alt="card-res"
        className="rounded-lg h-48 object-cover"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      {/* <h4>{resData.info.cuisines.join(", ")}</h4> */}
      <h4>{resData.info.avgRating} stars</h4>
      <h4> Rs {resData.info.feeDetails.totalFee / 100} for Two</h4>
    </div>
  );
};


// export const withPromotedLabel = (RestrauntCard) =>{
//   return (props) => {
//     // console.log(props.resData.info.aggregatedDiscountInfoV3.header+" "+props.resData.info.aggregatedDiscountInfoV3.subHeader+" "+props.resData.info.aggregatedDiscountInfoV3.discountTag)
//     return (
      
//       <div>
//         {/* <label className="bg-green-100">Open</label> */}
//         <h3 className="absolute text-xs m-2 pt-48 px-4 text-center text-black-300 font-bold ">{props?.resData?.info?.aggregatedDiscountInfoV3?.header+" "+props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader+" "+props?.resData?.info?.aggregatedDiscountInfoV3?.discountTag}</h3>
        
//         <RestrauntCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestrauntCard;
