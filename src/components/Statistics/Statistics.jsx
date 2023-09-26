import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCategory } from "../../utility/localstorage";
import ShowStatistics from "./ShowStatistics";

const Statistics = () => {
  const allDonation = useLoaderData();
  const storedDonatedData = getStoredDonatedCategory();
  const yourDonation =
    (storedDonatedData.length / allDonation.length) * 100;
  console.log(yourDonation);
  const remainingPercentage = 100 - yourDonation;

  return (
    <section className="container mx-auto lg:w-full w-[90%] my-10 flex justify-center">
        <ShowStatistics
          yourDonation={yourDonation.toFixed(2)}
          totalDonation={remainingPercentage.toFixed(2)}
        />
    </section>
  );
};

export default Statistics;
