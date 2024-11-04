import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const client = new ApolloClient({
  uri: "https://swwao.courses.orbit.au.dk/grp-19/router",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("accessToken") ?? " ",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d3l0yu3uo32bt5wm.us.auth0.com"
      clientId="lXq1ZpYzcfnM2U5Td1zuLtw02BcmSEPP"
      authorizationParams={{
        redirect_uri: "https://swwao.courses.orbit.au.dk/grp-19/web-app/",
        audience: "http://localhost:4000/",
      }}
    >
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>
);
