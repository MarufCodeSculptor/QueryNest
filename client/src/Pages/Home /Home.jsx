import Header from "../../Components/Home/Header/Header";
import LatestSurvey from "../../Components/Home/LatestSurvey/LatestSurvey";
import SurveyPage from "../../Components/Home/LatestSurvey/ServeyCard";
import Container from "../../Components/Shared/Container";

// React

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-slate-800 font-roboto">
        <Container>
          <LatestSurvey />
        </Container>
      </div>

      <div className="h-screen bg-pink-500 w-full"></div>
      <div className="h-screen bg-purple-500 w-full"></div>
    </div>
  );
};

export default Home;
