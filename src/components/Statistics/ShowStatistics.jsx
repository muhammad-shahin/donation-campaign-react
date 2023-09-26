import PropTypes from "prop-types";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const ShowStatistics = ({ yourDonation, totalDonation }) => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Your Donation Against Total Donation",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: totalDonation, label: "Total Donation" },
          { y: yourDonation, label: "Your Donation" },
        ],
      },
    ],
  };
  return (
    <div className="lg:w-[100%] w-[90%] cursor-pointer ">
      <CanvasJSChart options={options} />
    </div>
  );
};

ShowStatistics.propTypes = {
  yourDonation: PropTypes.number.isRequired,
  totalDonation: PropTypes.number.isRequired,
};

export default ShowStatistics;
