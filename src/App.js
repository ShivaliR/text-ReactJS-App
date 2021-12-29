// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Word Counter Application" aboutText="About Us" />
      <div className="container my-3">
        {/* //container is a class of bootstrap */}
        <TextForm heading="Word Counter" />
      </div>
      {/* <About /> */}
      {/* <Navbar title="textUtils-blog-again" aboutText="About Us again" />; */}
    </>
  );
}
export default App;
