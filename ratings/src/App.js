import React from "react";

function App() {
  const title = "ALL RATINGS AVAILABLE @ZONE8.";
  const body = "Tell us how was your experience.";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];
  const loading = false;
  const showComments = true;
  if (loading) return <hi>Please Wait...</hi>;

  const commentBlock = (
    <div className="comments">
      <h3> Comments({comments.length})</h3>
      <ul>
        {/* returning a function .map()inform of a jsx */}
        {comments.map((comment, index) => (
          // adding a list of comments inform of text and an attribute key
          <li key={index}> {comment.text}</li>
        ))}
      </ul>
    </div>
  );
  const verifyUser =(
    <div>
      <p>please log in to Add Reviews @ZONE8</p>
    </div>
  )

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body.toUpperCase()}</p>
      {/* the altenary && is to add a boolean instead of adding No in the If statement */}
      {showComments && commentBlock}
      {/* //{Math.random() * (3 + 3)} */}
    </div>
  );
}

export default App;
