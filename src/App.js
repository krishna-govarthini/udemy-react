import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Popular from "./components/Popular"
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Categories></Categories>
      <Banner></Banner>
      <Recommended></Recommended>
      <Topic></Topic>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
