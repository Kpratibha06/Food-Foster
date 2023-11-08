import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
//   console.log(items[0].card.info.name);

const dispatch = useDispatch()

const handleAddItem =(item)=>{
  // dispatch an action
  dispatch(addItem(item));
  
}

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex border-gray-100 border-b-2 text-left justify-between m-2 p-2">
          <div className="w-9/12">
            
            <div className="py-2 text-lg font-bold cursor-pointer">
              <span>{item?.card?.info?.name}</span>
              <span> -- ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
                
                <button className="p-2 bg-slate-600 hover:bg-slate-800 text-white  shadow-lg mx-14 rounded-lg " onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
            <img
              className="w-full" 
              alt="item"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
