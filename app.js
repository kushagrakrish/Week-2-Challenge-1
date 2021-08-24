// fetch("https://covid-19-data.p.rapidapi.com/country/all", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//     "x-rapidapi-key": "c78d42fe3cmsh97f1cc518130ee2p1a662djsncccc0a7a8017",
//   },
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

console.log("heelo");
let setUp = document.querySelector(".set-up");
let PunchLine = document.querySelector(".punch-line");
let reload = document.querySelector(".btn");
function refresh() {
  location.reload(refresh);
}
function getData() {
  const api = "https://official-joke-api.appspot.com/random_joke";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const set = data.setup;
      const punchline = data.punchline;
      setUp.textContent = set;
      PunchLine.textContent = punchline;
    });
}
getData();
