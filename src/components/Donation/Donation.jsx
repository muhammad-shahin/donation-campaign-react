import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import ShowDonation from "./ShowDonation";

const Donation = () => {
  const donationData = useLoaderData();
  const getStoredData = getStoredDonatedCategory();
  const [displayDonated, setDisplayDonated] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    if (donationData.length > 0) {
      const donatedData = donationData.filter((donation) =>
        getStoredData.includes(donation.id.toString())
      );
      setDisplayDonated(donatedData);
    }
  }, [donationData]);
  return (
    <section className="container mx-auto lg:w-full w-[90%] my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayDonated.slice(0, dataLength).map((donated) => (
          <ShowDonation key={donated.id} donated={donated}></ShowDonation>
        ))}
      </div>
      <button
        className={`${
          dataLength === 4 ? "block" : "hidden"
        } mt-4 px-5 py-2 rounded-md border-none text-[#79C281] text-[20px] font-bold bg-[#d9f8bf] hover:scale-[1.1] duration-500 mx-auto`}
        onClick={() => {
          setDataLength(donationData.length);
        }}
      >
        Show All
      </button>
    </section>
  );
};

export default Donation;
