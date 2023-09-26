import { PieChart, Pie, Cell } from "recharts";
import { getStoredDonatedCategory } from "../../utility/localstorage";

const storedDonatedData = getStoredDonatedCategory();

const data = [
  { name: "Group B", value: 12 - storedDonatedData.length },
  { name: "Group A", value: storedDonatedData.length || 0 },
];

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

const App = () => {
  return (
    <section className="lg:w-full w-[90%] cursor-pointer container mx-auto">
      <h1 className="text-[2rem] text-[#79C281] text-center mt-4">
        Your Donation Against Total Donation
      </h1>
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
    </section>
  );
};

export default App;
