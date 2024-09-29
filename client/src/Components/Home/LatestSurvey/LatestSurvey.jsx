import { useEffect, useState } from "react";
import SurveyCard from "./ServeyCard";

const LatestSurvey = () => {
  const [surveys, setSurveys] = useState(null);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        setSurveys(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen pb-10">
      <div className="mb-10 pt-10">
        <h2 className="lg:text-6xl md:text-4xl text-blue-600 text-2xl md:mb-5 mb-3 font-lato font-bold">
          Top Picks from the Community
        </h2>
        <p className="text-lg text-blue-100 font-forum">
          Discover the most-loved recommendations from our vibrant community.
          Explore the selections that have made a lasting impact and find
          inspiration for your next adventure!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {surveys?.map((item, index) => {
          return (
            <>
              <SurveyCard key={index} item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LatestSurvey;
