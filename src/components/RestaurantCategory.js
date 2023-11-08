import ItemList from "./ItemList"
const RestaurantCategory = ({data, showItems, setShowItems}) =>{
    // console.log(data.title)
    const handleClick = ()  =>{
        // console.log("clicked")
        setShowItems(showItems)
    }

    return <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg  ">
          <div className="flex justify-between font-bold text-lg" onClick = {handleClick} >
          <span>{data.title} ({data.itemCards.length})</span>
            <span>▼</span>
          </div>
            {showItems && <ItemList items = {data.itemCards}/>}
        </div>
        
    </div>
}
export default RestaurantCategory