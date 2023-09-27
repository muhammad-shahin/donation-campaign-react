import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ShowDonation = ({ donated }) => {
  const {
    id,
    cover_image,
    category,
    title,
    card_bg_color,
    ctg_bg_color,
    ctg_primary_color,
    donation_amount,
  } = donated;
  const navigate = useNavigate();
  const handleDonateDetails = () => {
    navigate(`/donation-details/${id}`);
  };
  return (
    <div
      style={{ backgroundColor: `${card_bg_color}` }}
      className={` lg:w-[40vw] rounded-lg flex justify-start`}
    >
      <div className="lg:w-[350px]  overflow-hidden rounded-l-lg">
        <img
          className="w-full h-full object-cover"
          src={cover_image}
          alt="Cover Image"
        />
      </div>
      <div className="p-5 lg:space-y-3">
        <p
          className={`px-2 py-0 rounded font-medium text-[18px] w-fit`}
          style={{
            backgroundColor: `${ctg_bg_color}`,
            color: `${ctg_primary_color}`,
          }}
        >
          {category}
        </p>
        <h2 className={`font-semibold text-[24px]`}>{title}</h2>
        <p
          className="font-medium text-[18px] lg:my-3 my-2"
          style={{ color: `${ctg_primary_color}` }}
        >
          ${donation_amount}.00
        </p>
        <button
          className="text-white lg:text-[20px] text-[16px] font-semibold lg:px-5 px-2 py-1 rounded-md cursor-pointer"
          style={{ backgroundColor: `${ctg_primary_color}` }}
          onClick={handleDonateDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

ShowDonation.propTypes = {
  donated: PropTypes.object.isRequired,
};

export default ShowDonation;
