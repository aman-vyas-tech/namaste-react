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

const resList = [
    {
        "info": {
          "id": "395202",
          "name": "McDonald's Gourmet Burger Collection",
          "cloudinaryImageId": "rqdtdkc3iqzxodv6vtyf",
          "locality": "Kasturba Road",
          "areaName": "MG Road",
          "costForTwo": "\u20B9600 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "395202",
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
          "parentId": "10761",
          "avgRatingString": "4.0",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "41 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 02:45:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
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

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-kasturba-road-mg-road-bangalore-395202",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "17376",
          "name": "Glen's Bakehouse",
          "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
          "locality": "Lavelle Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "\u20B9500 for two",
          "cuisines": [
            "Desserts",
            "Bakery",
            "Beverages",
            "Continental",
            "Italian"
          ],
          "avgRating": 4.4,
          "feeDetails": {
            "restaurantId": "17376",
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
          "parentId": "3220",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "40 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 00:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
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

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/glens-bakehouse-lavelle-road-ashok-nagar-bangalore-17376",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "17118",
          "name": "Social",
          "cloudinaryImageId": "uvdkvtb6ibzjn1aol15k",
          "locality": "Church Street",
          "areaName": "Church Street",
          "costForTwo": "\u20B9500 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Biryani",
            "Pizzas",
            "Salads",
            "Kebabs",
            "Juices",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "17118",
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
          "parentId": "2146",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-29 23:30:00",
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
            "header": "\u20B9125 OFF",
            "subHeader": "ABOVE \u20B9249",
            "discountTag": "FLAT DEAL"
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

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/social-church-street-bangalore-17118",
          "type": "WEBLINK"
        }
      }
]

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
    console.log(props);
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.deliveryTime}</h4>
            <h4>{costForTwo}</h4>
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
                {
                    resList.map(res=> {
                       return <RestaurentCard key={res.info.id} resData={res}/>
                    })
                }
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
