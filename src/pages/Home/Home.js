import Banner from "../../components/Banner/Banner";
import Introduction from "../../components/Introduction/Introduction";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import FeedbackWrapper from "../../components/Feedback_wrapper/Feedback_wrapper";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="main-container">
        <NavBar />
        <Banner />
        <Introduction />
      </div>
      <div className="complementary-wrapper">
        <FeedbackWrapper/>
        <div className="btn-wrapper">
          <Button/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
