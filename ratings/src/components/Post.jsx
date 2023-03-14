import { useParams } from "react-router-dom";
import MyCard from './Shared/MyCard'

function Post() {
  const params = useParams();
  return (
    <MyCard>
    <div>
      {/* //calling the id  */}
      <h1>Post{params.id}</h1>
      <h2>name: {params.name}</h2>
      <p>comment{params.comments}</p>
    </div>
    </MyCard>
  );
}

export default Post;
