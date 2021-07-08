const fetch = require("node-fetch");

async function getData() {
  let data = {"values": [10]};
  //data from the firebase
  try {
    const res = await fetch("http://127.0.0.1:12345/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    data = await res.json();
    // console.log("hi");
    console.log(data);
  } catch (error) {
    console.log("ERRRR", error);
  }
}

getData();
