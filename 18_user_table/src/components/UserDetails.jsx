import { addUser } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";

function UserDetails() {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);

  const addNewUser = (name) => {
    dispatch(addUser(name));
    console.log(name);
  };

  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button className="addBtn" onClick={() => addNewUser(fakeUserData())}>
          Add New Users
        </button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <hr
        style={{ height: "2px", margin: "10px 0", backgroundColor: "#fff" }}
      />
      <DeleteAllUser />
    </div>
  );
}

export default UserDetails;
