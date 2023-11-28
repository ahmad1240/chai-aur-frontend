import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logouthandler}
      className="  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
