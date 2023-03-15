import { Navigate, useNavigate,Routes,Route } from "react-router-dom";
import MyCard from "./Shared/MyCard";
//the hook above "useNavigate its being called to navigate the below function to see_reviews page"
function Post() {
  const status = 200;

  const navigate = useNavigate();
  const onClick = () => {
    console.log("hello");
    //this is the redirect function with a button to("/see_review") page
    navigate("/see_reviews");
  };
  if (status === 404) {
    return <Navigate to="/Notfound" />;
  }
  return (
    <MyCard>
      <div>
        <h2>We're redirecting you to our new website! Click here if you're not automatically redirected.</h2>
        <h1>
          <button onClick={onClick} style={{color:"black", background:"#D68910 "}}>See Rankers</button>
          </h1>
          <Routes><Route path="/show" element={<p>Thanks for rating with us!</p>}></Route></Routes>
      </div>
    </MyCard>
  );
}

export default Post;

// {/* //calling the id
// <h1>Post{params.id}</h1>
// <h2>name: {params.name}</h2>
// <p>comment{params.comments}</p> */}
