# Service-Rating
#commentBlock can also be added as a variable and the passed in the if statement as shown below

const commentBlock = (<div className="comments">
        <h3> Comments({comments.length})</h3>
        <ul>
          {/* returning a function .map()inform of a jsx */}
          {comments.map((comment, index) => (
            // adding a list of comments inform of text and an attribute key
            <li key={index}> {comment.text}</li>
          ))}
        </ul>
      </div>})

      the if statement 
      if{}