// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Voting {
    address public admin;

    struct Election {
        string name;
        bool isActive;
        string[] parties;
        mapping(string => uint256) votes;
        mapping(address => uint256) addressVotes;  // Track how many votes each address has cast
    }

    uint public electionCount;
    mapping(uint => Election) public elections;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createElection(uint _electionId, string memory _name) public onlyAdmin {
        elections[_electionId].name = _name;
        elections[_electionId].isActive = true;
    }

    function addParty(uint _electionId, string memory _partyName) public onlyAdmin {
        require(elections[_electionId].isActive, "Election not active");
        elections[_electionId].parties.push(_partyName);
    }

    function vote(uint _electionId, string memory _party) public {
        Election storage election = elections[_electionId];
        require(election.isActive, "Election not active");

        bool validParty = false;
        for (uint i = 0; i < election.parties.length; i++) {
            if (keccak256(bytes(election.parties[i])) == keccak256(bytes(_party))) {
                validParty = true;
                break;
            }
        }
        require(validParty, "Invalid party");

        // Track the votes for each address
        election.votes[_party]++;
        election.addressVotes[msg.sender]++; // Increment the vote count for the sender's address
    }

    function endElection(uint _electionId) public onlyAdmin {
        elections[_electionId].isActive = false;
    }

    function getResults(uint _electionId) public view returns (string[] memory, uint256[] memory) {
        Election storage election = elections[_electionId];
        uint length = election.parties.length;

        uint256[] memory results = new uint256[](length);
        for (uint i = 0; i < length; i++) {
            results[i] = election.votes[election.parties[i]];
        }

        return (election.parties, results);
    }

    function getElectionDetails(uint _electionId) public view returns (string memory, bool, string[] memory) {
        Election storage election = elections[_electionId];
        return (election.name, election.isActive, election.parties);
    }
}
