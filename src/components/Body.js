import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let listOfRes2 = [
    {
      info: {
        id: "395202",
        name: "McDonald's Gourmet Burger Collection",
        cloudinaryImageId: "rqdtdkc3iqzxodv6vtyf",
        costForTwo: "\u20B9600 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4,
        avgRatingString: "4.0",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "41 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "395201",
        name: "McDonald's Gourmet Burger Collection",
        cloudinaryImageId: "rqdtdkc3iqzxodv6vtyf",
        costForTwo: "\u20B9600 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        avgRatingString: "4.0",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "41 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ];
  const [listOfRes, setListOfRes] = useState(listOfRes2);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
            setListOfRes(filteredList);
          }}
        >
          {" "}
          Top Rated{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
