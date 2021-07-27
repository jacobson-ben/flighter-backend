const Amadeus = require("amadeus");
const router = require("express").Router();

// Getting env variables 
const { CLIENT_ID, CLIENT_SECRET } = process.env;

const API = `api`;

// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});


// Airports autocomplete routes
router.get(`/${API}/airports`, async (req, res) => {
  const { page, subType, keyword } = req.query;
  console.log('INSIDE API airports route!!!')
  // API call with params we requested from client app

  // Sending response for client
  try {
    const response = await amadeus.client.get("/v1/reference-data/locations", {
      keyword,
      subType,
      "page[offset]": page * 10
    });
    console.log(response.body)
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;