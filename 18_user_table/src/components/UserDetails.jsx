import { addUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import DeleteAllUser from "./DeleteAllUser";

function UserDetails() {
  const dispatch = useDispatch();
  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button
          className="addBtn"
          onClick={() => {
            dispatch(addUser("payload"));
          }}
        >
          Add New Users
        </button>
      </div>
      <ul>
        <li>Jay Shree Ram ✨</li>
        <li>Jay Shree Krushna 💥</li>
        <li>Jay Shree Hari</li>
        <li>Jay Shree Dnyanoba Mauli Tukaram </li>
      </ul>
      <hr
        style={{ height: "2px", margin: "10px 0", backgroundColor: "#fff" }}
      />
      <DeleteAllUser />
    </div>
  );
}

export default UserDetails;
