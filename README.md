# Authentication-Based E-Voting System Using Blockchain

A secure, transparent, and decentralized electronic voting system built with blockchain technology to ensure vote integrity and prevent tampering.

## 🏗️ System Architecture

This project consists of three main components:

1. **Admin Dashboard** - MERN Stack (MongoDB, Express.js, React, Node.js)
2. **Mobile Voting App** - React Native
3. **Blockchain Backend** - Ethereum with Hardhat

## ✨ Features

- 🔐 **Secure Authentication** - Multi-factor authentication for voters and administrators
- 🔗 **Blockchain Integration** - Immutable vote storage on Ethereum blockchain
- 📊 **Real-time Analytics** - Live voting statistics and results tracking
- 📱 **Mobile-First Design** - User-friendly mobile application for voters
- 👨‍💼 **Admin Dashboard** - Complete election management system
- 🔒 **Privacy & Security** - Encrypted vote storage with voter anonymity
- ✅ **Transparency** - Publicly verifiable voting records
- 🚫 **Tamper-Proof** - Immutable blockchain ledger prevents vote manipulation

## 🛠️ Tech Stack

### Admin Dashboard (MERN)
- **Frontend**: React.js, Redux, Material-UI/Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

### Voting App
- **Framework**: React Native
- **Navigation**: React Navigation
- **State Management**: Redux/Context API
- **UI Components**: React Native Paper/Native Base

### Blockchain
- **Network**: Ethereum (Testnet/Mainnet)
- **Development**: Hardhat
- **Smart Contracts**: Solidity
- **Web3 Integration**: ethers.js/web3.js
- **Wallet**: MetaMask integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (v4.4 or higher)
- Git
- MetaMask wallet
- React Native development environment (for mobile app)
- Hardhat

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/evoting-blockchain.git
cd evoting-blockchain
```

### 2. Blockchain Setup (Hardhat)

```bash
cd blockchain
npm install

# Create .env file
cp .env.example .env

# Add your configuration to .env:
# PRIVATE_KEY=your_wallet_private_key
# INFURA_API_KEY=your_infura_api_key
# ETHERSCAN_API_KEY=your_etherscan_api_key

# Compile smart contracts
npx hardhat compile

# Deploy to local network
npx hardhat node

# In a new terminal, deploy contracts
npx hardhat run scripts/deploy.js --network localhost

# Deploy to testnet (Sepolia/Goerli)
npx hardhat run scripts/deploy.js --network sepolia
```

### 3. Admin Dashboard Setup

```bash
cd admin-dashboard

# Install backend dependencies
cd backend
npm install

# Create .env file
cp .env.example .env

# Add your configuration:
# MONGODB_URI=mongodb://localhost:27017/evoting
# JWT_SECRET=your_jwt_secret
# PORT=5000
# BLOCKCHAIN_CONTRACT_ADDRESS=deployed_contract_address
# BLOCKCHAIN_RPC_URL=your_rpc_url

# Start backend server
npm run dev

# Install frontend dependencies
cd ../frontend
npm install

# Create .env file
cp .env.example .env

# Add your configuration:
# REACT_APP_API_URL=http://localhost:5000
# REACT_APP_CONTRACT_ADDRESS=deployed_contract_address

# Start frontend
npm start
```

### 4. Mobile App Setup

```bash
cd voting-app
npm install

# Create .env file
cp .env.example .env

# Add your configuration:
# API_URL=http://localhost:5000
# CONTRACT_ADDRESS=deployed_contract_address
# RPC_URL=your_rpc_url

# For iOS
cd ios && pod install && cd ..
npx react-native run-ios

# For Android
npx react-native run-android
```

## 📁 Project Structure

```
evoting-blockchain/
├── blockchain/
│   ├── contracts/
│   │   ├── Voting.sol
│   │   └── Authentication.sol
│   ├── scripts/
│   │   ├── deploy.js
│   │   └── verify.js
│   ├── test/
│   │   └── Voting.test.js
│   ├── hardhat.config.js
│   └── package.json
│
├── admin-dashboard/
│   ├── backend/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── server.js
│   │   └── package.json
│   │
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── redux/
│       │   ├── services/
│       │   ├── utils/
│       │   └── App.js
│       └── package.json
│
└── voting-app/
    ├── src/
    │   ├── components/
    │   ├── screens/
    │   ├── navigation/
    │   ├── services/
    │   ├── utils/
    │   └── App.js
    └── package.json
```

## 🔑 Key Components

### Smart Contracts

**Voting.sol**
- Manages election creation and vote casting
- Stores votes on blockchain
- Handles vote counting and result declaration
- Ensures one vote per voter per election

**Authentication.sol**
- Manages voter registration and verification
- Links blockchain addresses to verified identities
- Prevents duplicate registrations

### Admin Dashboard Features

- Create and manage elections
- Register and verify voters
- Monitor voting progress in real-time
- View and export election results
- Manage candidates and ballot items
- System analytics and reporting

### Mobile App Features

- Secure voter login
- Browse active elections
- Cast votes securely
- View voting history
- Receive election notifications
- QR code verification

## 🔐 Security Features

- **End-to-End Encryption**: All sensitive data encrypted in transit
- **Blockchain Immutability**: Votes cannot be altered once recorded
- **Multi-Factor Authentication**: Enhanced security for voter login
- **Smart Contract Auditing**: Contracts tested and verified
- **Zero-Knowledge Proofs**: Optional privacy enhancement
- **Rate Limiting**: Protection against DDoS attacks
- **Input Validation**: Comprehensive validation on all inputs

## 🧪 Testing

### Blockchain Tests
```bash
cd blockchain
npx hardhat test
npx hardhat coverage
```

### Backend Tests
```bash
cd admin-dashboard/backend
npm test
npm run test:coverage
```

### Frontend Tests
```bash
cd admin-dashboard/frontend
npm test
```

### Mobile App Tests
```bash
cd voting-app
npm test
```

## 📖 Usage Guide

### For Administrators

1. Login to admin dashboard
2. Create a new election with:
   - Election name and description
   - Start and end dates
   - Candidates/options
3. Register eligible voters
4. Monitor election progress
5. Declare results after election ends

### For Voters

1. Download and install mobile app
2. Register with valid credentials
3. Complete identity verification
4. Browse active elections
5. Select candidate and cast vote
6. Receive confirmation on blockchain
7. Verify vote was recorded (optional)

## 🌐 API Documentation

### Admin API Endpoints

```
POST   /api/auth/login          - Admin login
POST   /api/auth/register       - Register new admin
GET    /api/elections           - Get all elections
POST   /api/elections           - Create new election
PUT    /api/elections/:id       - Update election
DELETE /api/elections/:id       - Delete election
GET    /api/voters              - Get all voters
POST   /api/voters/register     - Register new voter
GET    /api/results/:electionId - Get election results
```

### Voter API Endpoints

```
POST   /api/voter/login         - Voter login
POST   /api/voter/verify        - Verify voter identity
GET    /api/voter/elections     - Get available elections
POST   /api/voter/vote          - Cast a vote
GET    /api/voter/history       - Get voting history
```

## 🚢 Deployment

### Blockchain Deployment

```bash
# Deploy to Ethereum mainnet
npx hardhat run scripts/deploy.js --network mainnet

# Verify contract on Etherscan
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS
```

### Backend Deployment (Example: Heroku)

```bash
cd admin-dashboard/backend
heroku create evoting-backend
heroku addons:create mongolab
git push heroku main
```

### Frontend Deployment (Example: Vercel)

```bash
cd admin-dashboard/frontend
npm run build
vercel --prod
```

### Mobile App Deployment

- **iOS**: Submit to App Store Connect
- **Android**: Upload to Google Play Console

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Project Lead & Blockchain Developer
- Full Stack Developer
- Mobile App Developer
- UI/UX Designer

## 📞 Support

For support, email support@evoting.com or join our Slack channel.

## 🔮 Future Enhancements

- [ ] Multi-chain support (Polygon, BSC)
- [ ] Biometric authentication
- [ ] AI-powered fraud detection
- [ ] Offline voting capability
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Integration with government ID systems

## ⚠️ Disclaimer

This system is intended for demonstration and educational purposes. For production use in actual elections, comprehensive security audits, legal compliance checks, and additional features would be required.

## 🙏 Acknowledgments

- Ethereum Foundation
- OpenZeppelin for smart contract libraries
- React Native community
- All contributors and supporters

---

**Built with ❤️ for transparent and secure elections**
