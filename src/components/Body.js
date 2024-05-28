import RestrauntCard from "./RestrauntCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRes, setListofRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const handleClick = () => {
    const filteredList = listofRes.filter((i) => i.info.avgRating > 4);
    setFilteredList(filteredList);
  };

  // const RestrauntPromoted = withPromotedLabel(RestrauntCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const facebookdata = await fetch(
      "https://www.walmart.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const facebookjson = await facebookdata.json();
    console.log(facebookjson);
    // console.log(Json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setListofRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // const { loggedInUser, setUserName } = useContext(UserContext);

  const Status = useOnlineStatus();
  if (Status === false)
    return (
    <h1>
      
      You are offline. Please turn the data on.

    </h1>
    );

  
  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 ">
          <input
            type="text"
            placeholder="restaurant..."
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 bg-gray-100 hover:bg-gray-300 m-4 rounded-md"
            onClick={() => {
              const filterRes = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredList(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-2 bg-gray-100 hover:bg-gray-300 m-4 rounded-md"
            type="filter-button"
            onClick={handleClick}
          >
            Top Rated Restraunts
          </button>
        </div>
        {/* <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
        {/* </div> */}
      </div>
      <div className="flex flex-wrap ">
        {/* <Res trauntCard resData = {resList[0]} />
          <RestrauntCard resData = {resList[1]} /> 
          <RestrauntCard resData = {resList[2]} /> */}
        {filteredList.map((i) => (
          <Link key={i.info.id} to={"/restraunts/" + i.info.id}>
            {/* { i.info.aggregatedDiscountInfoV3 ? (<RestrauntPromoted resData={i}/>) :( <RestrauntCard resData={i} />)} */}

            <RestrauntCard resData={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
