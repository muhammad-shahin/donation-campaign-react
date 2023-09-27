import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const ShowStatistics = ({ yourDonation, totalDonation }) => {
  const [data, setData] = useState([
    { name: "Total Donation", value: 0 },
    { name: "Your Donation", value: 0 },
  ]);

  useEffect(() => {
    setData([
      { name: "Total Donation", value: totalDonation },
      { name: "Your Donation", value: yourDonation || 0 },
    ]);
  }, [yourDonation, totalDonation]);
  return (
    <div>
      <div className="w-fit mx-auto">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <span className="text-[18px] font-medium mr-5 ">
            Your Donation
            <button className="w-[100px] h-[12px] bg-[#00C49F] ml-2"></button>
          </span>
          <span className="text-[18px] font-medium ">
            Total Donation
            <button className="w-[100px] h-[12px] bg-[#FF444A] ml-2"></button>
          </span>
        </div>
      </div>
    </div>
  );
};

ShowStatistics.propTypes = {
  yourDonation: PropTypes.number.isRequired,
  totalDonation: PropTypes.number.isRequired,
};

export default ShowStatistics;
