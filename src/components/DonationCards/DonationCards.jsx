import ShowDonationCards from "./ShowDonationCards";
import PropTypes from "prop-types";

const DonationCards = ({ displayDonationCards }) => {
  return (
    <section className="container mx-auto flex flex-wrap justify-center gap-6 items-center my-10">
      {displayDonationCards.map((donation) => (
        <ShowDonationCards key={donation.id} donation={donation} />
      ))}
    </section>
  );
};

DonationCards.propTypes = {
  displayDonationCards: PropTypes.array.isRequired,
};
export default DonationCards;
