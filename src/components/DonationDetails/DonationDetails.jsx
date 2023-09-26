import { useLoaderData, useParams } from "react-router-dom";
import { saveDonatedCategory } from "../../utility/localstorage";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const donationData = useLoaderData();
  const { categoryId } = useParams();
  const donationDetails = donationData.filter(
    (donation) => donation.id === parseInt(categoryId)
  );
  const {
    title,
    description,
    ctg_primary_color,
    donation_amount,
    cover_image,
  } = donationDetails[0];

  // handle donate
  const handleDonate = (id) => {
    const setData = saveDonatedCategory(id);
    if (setData) {
      Swal.fire({
        title: "You Successfully Donated $290 for this Campaign❤️",
        icon: "success",
      });
    } else {
      Swal.fire(
        "Already Donated",
        "You Have Already Donated for this Campaign ❤️ You can Donate to other Campaign Now ❤️",
        "error"
      );
    }
  };

  return (
    <section className="mb-16 mt-6 container mx-auto space-y-5 lg:w-full w-[90%] lg:px-[10%]">
      <div className="relative w-full mx-auto lg:mx-0">
        <img
          className="mx-auto w-full rounded-lg"
          src={cover_image}
          alt="Cover Image"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-[0.6] w-full lg:h-[15%] h-[30%] rounded-b-lg flex justify-start items-center">
          <button
            className="text-white lg:text-[20px] text-[16px] font-semibold lg:px-5 px-2 py-1 lg:py-2 rounded-md ml-10"
            style={{ backgroundColor: `${ctg_primary_color}` }}
            onClick={() => {
              handleDonate(categoryId);
            }}
          >
            Donate ${donation_amount}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="lg:text-[2.4rem] text-[1.8rem] font-bold text-[#0B0B0B]">
          {title}
        </h1>
        <p className="lg:text-[18px] text-[#272626e0] text-justify">
          {description}
        </p>
      </div>
    </section>
  );
};

export default DonationDetails;
