import React from "react";
import ReactDOM from "react-dom/client";

/**
* Header
    Logo
    Nav Bar
* Body
    Search
    Restaurent Container
    Restaurent Card
* Footer
    Copyright
    Address
    Contact 
*/

const resOBj = {
    "info": {
      "id": "588619",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Brigade Rd",
      "areaName": "Ashok Nagar",
      "costForTwo": "\u20B9400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "588619",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3600
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-30 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO \u20B980"
      },
      "orderabilityCommunication": {
        "title": {

        },
        "subTitle": {

        },
        "message": {

        },
        "customIcon": {

        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {
      "context": "seo-data-7cb3fbfe-964b-4e79-bfc3-bc7c3abe82df"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-brigade-rd-ashok-nagar-bangalore-588619",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  };

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-cotainer">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarbFGOA8xl_IGcaB291JF16ZfgqEnfC5OxZn9xRFS&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f1"
}

const RestaurentCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(" , ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

const Body = ()=> {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurentCard resData={resOBj}/>
                <RestaurentCard resData={resOBj}/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div id="app" className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(<AppLayout />);
