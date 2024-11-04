import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { LogoutButton } from "../components/auth/logoutButton";

export const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const gettoken = async () => {
      // To get the acesstoken use getAccessTokenSilently(), do not add option or setting they are allready set in app.ts
      const accessToken = await getAccessTokenSilently();
    };

    gettoken();
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Avatar
        alt={user?.name}
        src={user?.picture}
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <Typography variant="h4">{user?.name}</Typography>
      <Typography variant="body1">{user?.email}</Typography>
      <Box sx={{ mt: 4 }}>
        <LogoutButton />
      </Box>
    </Box>
  );
};
