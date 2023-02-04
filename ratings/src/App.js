import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";


function App() {
  return (
    <>
      <Header bgColor="#F39C12" textColor="black" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
