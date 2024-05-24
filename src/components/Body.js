import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filtertedListOfRes, setFiltertedListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response =  await data.json();
    console.log(response);
    setListOfRes(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltertedListOfRes(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = searchText
                ? listOfRes.filter((item) =>
                    item.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  )
                : listOfRes;
              filteredRes? setFiltertedListOfRes(filteredRes): setFiltertedListOfRes(listOfRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredList);
          }}
        >
          {" "}
          Top Rated{" "}
        </button>
      </div>
      <div className="res-container">
        {filtertedListOfRes.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
