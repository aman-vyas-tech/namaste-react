import { IMAGE_URL } from "../utils/constant";
const styleCard = {
    backgroundColor: "#f0f0f1"
};

const RestaurantCard = (props) => {
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
            <img className="res-image" src={IMAGE_URL+resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;