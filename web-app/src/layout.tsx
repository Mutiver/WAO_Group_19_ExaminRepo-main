import { useAuth0 } from "@auth0/auth0-react";
import { Card, Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Balance } from "./pages/balance";
import { Create } from "./pages/create";
import { Login } from "./pages/login";
import { Overview } from "./pages/overview";
import { Profile } from "./pages/profile";

export const Layout = () => {
  const [tabValue, setTabValue] = useState("0");
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const handleTabChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
      setTabValue(newValue);
    },
    []
  );

  const tabPage = useMemo(() => {
    switch (true) {
      case tabValue === "2":
        return <Create />;
      case tabValue === "3":
        return <Balance />;
      case tabValue === "4":
        return <Profile />;
      default:
        return <Overview />;
    }
  }, [tabValue]);

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (!isAuthenticated) return;

      try {
        const token = await getAccessTokenSilently();
        localStorage.setItem("accessToken", token);
      } catch (error) {
        console.error("Failed to get access token:", error);
      }
    };

    fetchAccessToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) return <Login />;
  return (
    <Container>
      <Card
        sx={{
          backgroundColor: "#CDE8E5",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={false} onChange={handleTabChange}>
          <Tab label="overview" value="1" />
          <Tab label="Create" value="2" />
          <Tab label="Balance" value="3" />
          <Tab label="Profile" value="4" />
        </Tabs>
      </Card>
      {tabPage}
    </Container>
  );
};
