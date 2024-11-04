import { verify } from "jsonwebtoken";
import JwksRsa from "jwks-rsa";
import { jwtDecode } from "jwt-decode";

export const verifyToken = async (token: string) => {
  const kid = jwtDecode(token, { header: true }).kid;
  const payload = jwtDecode(token);
  const key = await getPublicKey(kid ?? "", payload.iss ?? "");
  let result: undefined | string;

  verify(token, key, { algorithms: ["RS256"] }, (err) => {
    if (!err) {
      result = payload.sub;
    }
  });

  return result;
};

const getPublicKey = async (kid: string, domain: string) => {
  return (
    await JwksRsa({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${domain}.well-known/jwks.json`,
    }).getSigningKey(kid)
  ).getPublicKey();
};

//https://stackoverflow.com/questions/75261592/how-can-i-verify-a-token-from-auth0-in-nodejs-backend-with-jwt-jsonwebtokenerro
