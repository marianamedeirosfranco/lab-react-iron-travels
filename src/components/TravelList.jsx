import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import FavoritesList from "./FavouritesList";

function TravelList() {
  const [travel, setTravel] = useState(travelPlansData);
  const [favoritePlans, setFavoritePlans] = useState([]);

  /* INTERATION 3 */
  function deletePlan(id) {
    console.log(`Deleting plan with id ${id}`);
    // Filter out the plan with the specified id from the travelPlans array.
    const filteredPlans = travel.filter((plan) => plan.id !== id);
    // Update the state with the new filtered array
    setTravel(filteredPlans);
  }

  function addToFavorites(id) {
    console.log(`Adding plan with id ${id} to favorites`);
    // Filter out the plan with the specified id from the travelPlans array.
    let favoritePlan;
    const filteredPlans = travel.filter((plan) => {
      // When the plan with the specified id is found, store it in the favoritePlan variable
      // and return false to remove it from the filtered array
      if (plan.id === id) {
        favoritePlan = plan;
        return false;
      }
      return true;
    });

    // Update the state with the new filtered array
    setTravel(filteredPlans);
    // Add the favoritePlan to the favorites array
    setFavoritePlans([favoritePlan, ...favoritePlans]);
  }
  return (
    <div className="TravelList">
      <div className="list">
        {/* Bonus: Iteration 4 | Extract Component */}
        {travel &&
          travel.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              deletePlan={deletePlan}
              addToFavorites={addToFavorites}
            />
          ))}
      </div>
      {/* Bonus: Iteration 5 | Favorites */}
      <FavoritesList favoritePlans={favoritePlans} />
    </div>
  );
}

/* INTERATION 1 - THEN WILL BE MOVED TO TRAVELCARD */
/*           <div className="travelPlanCard" key={travel.id}>
            <div className="left-section">
              <img src={travel.image} />
            </div>
            <div className="right-section">
              <h2>
                {travel.destination}{" "}
                <span className="sub-heading">({travel.days} Days)</span>
              </h2>
              <p className="destination-description">
                <em>{travel.description}</em>
              </p>
              <p>
                <b>Price:</b> {travel.totalCost} € */ /* INTERATION 2 */
/*                 <div className="labels">
                  {travel.totalCost <= 350 && (
                    <span className="label-green">Great Deal</span>
                  )}
                  {travel.totalCost >= 1500 && (
                    <span className="label-blue">Premium</span>
                  )}
                  {travel.allInclusive && (
                    <span className="label-blue">All-Inclusive</span>
                  )}
                </div>
              </p>
            </div> */
/* INTERATION 3 */
/*             <button className="btn" onClick={() => deletePlan(travel.id)}>
              Delete
            </button> */

export default TravelList;
