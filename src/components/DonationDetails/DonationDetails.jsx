import coverImage from "../../assets/Educational.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donationData = useLoaderData();
  const { categoryId } = useParams();
  const donationDetails = donationData.filter(
    (donation) => donation.id === parseInt(categoryId)
  );
  const { title, description, ctg_primary_color, donation_amount } =
    donationDetails[0];
  console.log(donationDetails);

  // handle toast
  const notify = () => toast.success("You Successfully Donated $290");
  return (
    <section className="mb-16 mt-6 container mx-auto space-y-5 lg:w-full w-[90%] lg:px-[10%]">
      <div className="relative w-full mx-auto lg:mx-0">
        <img className="mx-auto w-full" src={coverImage} alt="Cover Image" />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-[0.6] w-full lg:h-[15%] h-[30%] rounded-b-lg flex justify-start items-center">
          <button
            className="text-white lg:text-[20px] text-[16px] font-semibold lg:px-5 px-2 py-1 lg:py-2 rounded-md ml-10"
            style={{ backgroundColor: `${ctg_primary_color}` }}
            onClick={notify}
          >
            Donate ${donation_amount}
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="lg:text-[2.4rem] text-[1.8rem] font-bold text-[#0B0B0B]">{title}</h1>
        <p className="lg:text-[18px] text-[#272626e0] text-justify">
          {description}
        </p>
      </div>
      <ToastContainer autoClose={3000} />
    </section>
  );
};

export default DonationDetails;
