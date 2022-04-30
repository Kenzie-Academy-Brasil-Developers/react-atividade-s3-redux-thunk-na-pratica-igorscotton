import { useDispatch } from "react-redux";
import { addMessageThunk } from "../../store/modules/user/thunk";
import { useState } from "react";

const Message = () => {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
              if(comment){
                  dispatch(addMessageThunk(comment));
              }        
          setComment("");
        }}
      >
        New comment
      </button>
    </div>
  );
};

export default Message;
