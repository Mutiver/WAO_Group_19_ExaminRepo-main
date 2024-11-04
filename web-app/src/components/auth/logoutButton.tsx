import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handelLogout = () => {
    localStorage.removeItem("accessToken");
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return <button onClick={handelLogout}>Log Out</button>;
};
