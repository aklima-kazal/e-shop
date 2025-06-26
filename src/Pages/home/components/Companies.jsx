import Samsung from "../../../assets/Images/samsung.png";
import OpenAI from "../../../assets/Images/openai.png";
import Amazon from "../../../assets/Images/amazon.png";
import Tencent from "../../../assets/Images/tencent.png";
import Spotify from "../../../assets/Images/spotify.png";

const Companies = () => {
  return (
    <>
      <section className=" py-16 mt-20 px-10">
        <div className="flex items-center justify-between">
          <img src={Samsung} alt="companies" />
          <img src={OpenAI} alt="companies" />
          <img src={Amazon} alt="companies" />
          <img src={Tencent} alt="companies" />
          <img src={Spotify} alt="companies" />
        </div>
      </section>
    </>
  );
};

export default Companies;
