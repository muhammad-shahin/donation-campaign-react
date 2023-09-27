import { getStoredDonatedCategory } from "../../utility/localstorage";
import { useState } from "react";
import ShowStatistics from "./ShowStatistics";
import donationData from "../../assets/donation.json";

const Statistics = () => {
  const storedDonatedData = getStoredDonatedCategory();
  const [yourDonation, setYourDonation] = useState(storedDonatedData.length);
  const [totalDonation, setTotalDonation] = useState(
    donationData.length - yourDonation
  );
  return (
    <section className="lg:w-full w-[90%] cursor-pointer container mx-auto">
      <h1 className="text-[2rem] text-[#79C281] text-center mt-4">
        Your Donation Against Total Donation
      </h1>
      <ShowStatistics
        yourDonation={yourDonation}
        totalDonation={totalDonation}
      ></ShowStatistics>
    </section>
  );
};

export default Statistics;
