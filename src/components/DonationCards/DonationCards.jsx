import { useEffect, useState } from "react";
import ShowDonationCards from "./ShowDonationCards";
import PropTypes from "prop-types";

const DonationCards = ({ displayDonationCards }) => {
  // const [donations, setDonations] = useState([]);

  // useEffect(() => {
  //   fetch("donation.json")
  //     .then((res) => res.json())
  //     .then((data) => setDonations(data));
  // }, []);
  return (
    <section className="container mx-auto flex flex-wrap justify-center gap-6 items-center">
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
