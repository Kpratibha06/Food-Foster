// import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRes, setListofRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const handleClick = () => {
    const filteredList = listofRes.filter((i) => i.info.avgRating > 4);
    setFilteredList(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const Json = await data.json();
    // console.log(Json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setListofRes(
      Json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      Json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // if(listofRes.length === 0){
  //   return <Shimmer/>;
  // }

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
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
        <button type="filter-button" onClick={handleClick}>
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {/* <Res trauntCard resData = {resList[0]} />
          <RestrauntCard resData = {resList[1]} />
          <RestrauntCard resData = {resList[2]} /> */}
        {filteredList.map((i) => (
          <RestrauntCard key={i.info.id} resData={i} />
        ))}
      </div>
    </div>
  );
};
export default Body;
