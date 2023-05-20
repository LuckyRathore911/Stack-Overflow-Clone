import { useState } from "react";
import { useSelector } from "react-redux";

import heart from '../../assets/heart-solid.svg'
import thumbs_down from '../../assets/thumbs-down-solid.svg'

const LikeDislike = ({ message }) => {
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likedBy, setLikedBy] = useState(message.likedBy || []);
  const [dislikedBy, setDislikedBy] = useState(message.dislikedBy || []);

  const handleLike = () => {
    if (likedBy.includes(currentUser.result._id)) {
      // If the user has already liked the message, remove their like
      setLikes(likes - 1);
      setLikedBy(likedBy.filter((userId) => userId !== currentUser.result._id));
    } else {
      // Otherwise, add their like
      setLikes(likes + 1);
      setLikedBy([...likedBy, currentUser.result._id]);
    }
  };

  const handleDislike = () => {
    if (dislikedBy.includes(currentUser.result._id)) {
      // If the user has already disliked the message, remove their dislike
      setDislikes(dislikes - 1);
      setDislikedBy(
        dislikedBy.filter((userId) => userId !== currentUser.result._id)
      );
    } else {
      // Otherwise, add their dislike
      setDislikes(dislikes + 1);
      setDislikedBy([...dislikedBy, currentUser.result._id]);
    }
  };

  return (
    <div>
      <button onClick={handleLike}> 
          <img src={heart} alt='Search' width='18' className='search-icon'></img>
          {likes}
          </button>
      <button onClick={handleDislike}>
          <img src={thumbs_down} alt='Search' width='18' className='search-icon'></img> 
          {dislikes}
      </button>
    </div>
  );
};

export default LikeDislike;
