import { useEffect, useRef, useState } from "react";
import Banner from "../Banner/Banner";
import DonationCards from "../DonationCards/DonationCards";
import Swal from "sweetalert2";

const Home = () => {
  const [displayDonationCards, setDisplayDonationCards] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDisplayDonationCards(data));
  }, []);
  const searchInput = useRef(null);
  const handleSearchButton = () => {
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const input = searchInput.current.value.toLowerCase();
    const categoryName = capitalizeFirstLetter(input);
    if (
      input === "food" ||
      input === "education" ||
      input === "health" ||
      input === "clothing"
    ) {
      const searchedCategory = displayDonationCards.filter(
        (donation) => donation.category === categoryName
      );
      setDisplayDonationCards(searchedCategory);
    } else {
      Swal.fire(
        "Category Not Found",
        "The Category You are Looking for is Not Found in Our Database.",
        "error"
      );
    }
  };
  return (
    <section className="">
      <Banner
        handleSearchButton={handleSearchButton}
        searchInput={searchInput}
      />
      <DonationCards displayDonationCards={displayDonationCards} />
    </section>
  );
};

export default Home;
