import { useEffect, useState } from "react";
import ShowDonationCards from "./ShowDonationCards";

const DonationCards = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  console.log(donations);
  return (
    <section className="container mx-auto grid grid-cols-4 justify-center gap-6">
      {donations.map((donation) => (
        <ShowDonationCards key={donation.id} donation={donation} />
      ))}
    </section>
  );
};

export default DonationCards;
