import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import './Home.css'

export default function Home() {
  return (
    <>
    <div className="main-container">
      <NavBar />
      <Banner />
    </div>
    </>
  );
}
