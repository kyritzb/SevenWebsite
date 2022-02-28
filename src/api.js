import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const LISTINGAPIURL =
  process.env.NODE_ENV === "production"
    ? "https://gypsy-listing.azurewebsites.net"
    : "http://localhost:8003";

export const EMAILAPIURL =
  process.env.NODE_ENV === "production"
    ? "https://gypsy-email.azurewebsites.net"
    : "http://localhost:8001";

console.log("-------------------------");
console.log("Gypsy Client started!");
console.log("-------------------------");
console.log(process.env);
console.log("-------------------------");
console.log("listingUrl:", LISTINGAPIURL);
console.log("emailUrl:", EMAILAPIURL);
console.log("-------------------------");

export function getAllListings() {
  const urlEndpoint = LISTINGAPIURL + "/listing/getAll";

  return new Promise((resolve, reject) => {
    axios
      .get(urlEndpoint, {})
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

export function getListing(id) {
  const urlEndpoint = LISTINGAPIURL + "/listing/get";

  const request = {
    id: id,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(urlEndpoint, request)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

export function subscribeToEmailList(
  firstName,
  lastName,
  email,
  number,
  linkedIn
) {
  const urlEndpoint = EMAILAPIURL + "/email/subscribe";

  const request = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    number: number,
    linkedIn: linkedIn,
  };

  return new Promise((resolve, reject) => {
    axios
      .post(urlEndpoint, request)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}
