import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ShowDonationCards = ({ donation }) => {
  const {
    id,
    cover_image,
    category,
    title,
    card_bg_color,
    ctg_bg_color,
    ctg_primary_color,
  } = donation;
  const navigate = useNavigate();
  const handleDonateDetails = () => {
    navigate(`/donation-details/${id}`);
  };
  return (
    <div
      style={{ backgroundColor: `${card_bg_color}` }}
      className={` w-[350px] rounded-lg cursor-pointer`}
      onClick={handleDonateDetails}
    >
      <div>
        <img
          className="rounded-t-lg"
          src={cover_image}
          alt="Cover Image Of Card"
        />
      </div>
      <div className="pl-4 py-4 space-y-2">
        <p
          className={`px-2 py-0 rounded font-medium text-[18px] w-fit `}
          style={{
            backgroundColor: `${ctg_bg_color}`,
            color: `${ctg_primary_color}`,
          }}
        >
          {category}
        </p>
        <h2
          className={`font-semibold text-[20px]`}
          style={{ color: `${ctg_primary_color}` }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

ShowDonationCards.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default ShowDonationCards;
