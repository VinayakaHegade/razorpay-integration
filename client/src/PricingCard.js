import PropTypes from "prop-types";

const PricingCard = ({ content, selectMonthly, paymentHandler }) => {
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
      <button onClick={(e) => paymentHandler(e, content.currency, price * 100)}>
        Buy plan
      </button>
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
  paymentHandler: PropTypes.func.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    label: PropTypes.string,
  }).isRequired,
  selectMonthly: PropTypes.bool.isRequired,
};

export default PricingCard;
