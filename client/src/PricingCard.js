import PropTypes from "prop-types";

const PricingCard = ({ content, selectMonthly }) => {
  // Function to calculate price based on the selected pricing period
  const calculatePrice = (price) => {
    return selectMonthly ? price : price * 12;
  };

  // Function to calculate period based on the selected pricing period
  const calculatePeriod = () => {
    return selectMonthly ? "/month" : "/year";
  };

  const price = calculatePrice(content.price);
  const subscriptionPeriod = calculatePeriod();
  const buttonText = content.title === "Teams" ? "Contact us" : "Buy plan";

  return (
    <div className="pricing-card">
      <div>
        <h4>{content.title}</h4>
        {content.label && <p>{content.label}</p>}
      </div>
      <p>{content.tagline}</p>
      <h1>
        <span>₹{price}</span>
        <span>{subscriptionPeriod}</span>
      </h1>
      <button>{buttonText}</button>
      <ul>
        {content.features.map((feature, index) => (
          <li key={index}>
            <i className="checkmark">✓</i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

PricingCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    label: PropTypes.string,
  }).isRequired,
  selectMonthly: PropTypes.bool.isRequired,
};

export default PricingCard;
