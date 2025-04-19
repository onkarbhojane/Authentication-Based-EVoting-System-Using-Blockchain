require("dotenv").config();
const express = require("express");
const Web3 = require("web3"); // Use the Web3 constructor
const VotingABI = require("./Voting.json").abi; // The ABI of the contract

const app = express();
const port = process.env.PORT || 5000;

// Set up Web3 provider (connect to local Hardhat network)
const web3 = new Web3("http://localhost:8545");

const votingAddress = "0x59b670e9fA9D0A427751Af201D676719a970857b"; // Replace with your contract address
const votingContract = new web3.eth.Contract(VotingABI, votingAddress);

app.use(express.json());

// Route to create an election
app.post("/createElection", async (req, res) => {
  const { electionId, name } = req.body;

  const accounts = await web3.eth.getAccounts();
  try {
    const tx = await votingContract.methods.createElection(electionId, name).send({
      from: accounts[0],
    });
    res.send({ success: true, tx });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
});

// Route to add a party
app.post("/addParty", async (req, res) => {
  const { electionId, partyName } = req.body;

  const accounts = await web3.eth.getAccounts();
  try {
    const tx = await votingContract.methods.addParty(electionId, partyName).send({
      from: accounts[0],
    });
    res.send({ success: true, tx });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
});

// Route to vote in an election
app.post("/vote", async (req, res) => {
  const { electionId, partyName } = req.body;

  const accounts = await web3.eth.getAccounts();
  try {
    const tx = await votingContract.methods.vote(electionId, partyName).send({
      from: accounts[0],
    });
    res.send({ success: true, tx });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
});

// Route to end an election
app.post("/endElection", async (req, res) => {
  const { electionId } = req.body;

  const accounts = await web3.eth.getAccounts();
  try {
    const tx = await votingContract.methods.endElection(electionId).send({
      from: accounts[0],
    });
    res.send({ success: true, tx });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
});

// Route to get results of an election
app.get("/getResults/:electionId", async (req, res) => {
    const { electionId } = req.params;
    try {
      // Get results from the contract
      const results = await votingContract.methods.getResults(electionId).call();
      
      // Log the response to see its structure
      console.log(results);
      
      // Assuming results is an object with parties and results arrays
      const parties = results[0]; // parties are likely at index 0
      const resultsArray = results[1]; // results are likely at index 1
  
      res.send({ parties, results: resultsArray });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, error });
    }
  });
  

// Route to get election details
app.get("/getElectionDetails/:electionId", async (req, res) => {
  const { electionId } = req.params;
  try {
    const [name, isActive, parties] = await votingContract.methods
      .getElectionDetails(electionId)
      .call();
    res.send({ name, isActive, parties });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
