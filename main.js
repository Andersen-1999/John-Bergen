let userName = "John";
let userAge = 20;
let userCity = "Bergen";

if (userAge > 18) {
  console.log("Du er over 18, velkommen inn");
} else if (userAge <= 18 || userCity === "Oslo") {
  console.log("Du er ikke gammel nok,og er fra feil by");
} else if (userName === "John" && userCity === "Bergen") {
  console.log("Velkommen inn, John fra Bergen!");
}
