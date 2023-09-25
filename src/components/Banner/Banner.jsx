import "./Banner.css";
const Banner = () => {
  return (
    <section className="h-[600px]">
      <div className="bg-img text-center bg-opacity-[0.9] h-[600px] absolute top-0 left-0 w-full z-[-100]">
      <div className="bg-white bg-opacity-[0.85] absolute flex justify-center items-center flex-col gap-10 w-full h-full">
        <h1 className="text-[3rem] font-bold text-[#0B0B0B] mx-auto lg:w-full w-[90%]">
          I Grow By Helping People In Need
        </h1>
        <div className="relative w-fit h-[3rem] mx-auto text-[18px]">
          <input
            type="text"
            className="lg:w-[350px] placeholder:text-[#9D9D9D] text-[#ff444a] px-5 rounded-lg font-medium border-2 border-[#9D9D9D] rounded-r-none border-r-0 outline-0 h-full"
            placeholder="Search By Category"
          />
          <button className="bg-[#ff444a] text-white px-5 rounded-r-lg font-medium h-full">
            Search
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
