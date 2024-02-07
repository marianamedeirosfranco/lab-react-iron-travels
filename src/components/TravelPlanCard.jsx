/* BONUS 4 */

function TravelPlanCard(props) {
  const { plan, deletePlan } = props;
  return (
    <div>
      <div className="travelPlanCard" key={plan.id}>
        <div className="left-section">
          <img src={plan.image} />
        </div>
        <div className="right-section">
          <h2>
            {plan.destination}{" "}
            <span className="sub-heading">({plan.days} Days)</span>
          </h2>
          <p className="destination-description">
            <em>{plan.description}</em>
          </p>
          <p>
            <b>Price:</b> {plan.totalCost} € {/* INTERATION 2 */}
            <div className="labels">
              {plan.totalCost <= 350 && (
                <span className="label-green">Great Deal</span>
              )}
              {plan.totalCost >= 1500 && (
                <span className="label-blue">Premium</span>
              )}
              {plan.allInclusive && (
                <span className="label-blue">All-Inclusive</span>
              )}
            </div>
          </p>
        </div>
        {/* INTERATION 3 */}
        <button className="btn" onClick={() => deletePlan(plan.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
