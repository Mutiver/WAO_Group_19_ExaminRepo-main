import { Box } from "@mui/material";
import LoginButton from "../components/auth/loginButton";

export const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <LoginButton />
    </Box>
  );
};
