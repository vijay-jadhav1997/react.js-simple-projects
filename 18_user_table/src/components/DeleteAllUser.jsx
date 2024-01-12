import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/userSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  return (
    <div className="deleteAllBtn-box">
      <button
        className="deleteAllBtn"
        onClick={() => dispatch(clearAllUsers())}
      >
        Clear All Users
      </button>
    </div>
  );
};

export default DeleteAllUser;
