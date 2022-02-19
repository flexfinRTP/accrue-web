## Technologies Used

Front-end:
Next.js (React), Tailwind CSS, Ethers.js, MetaMask, IPFS, Pinata

Smart Contracts:
Hardhat, Ethers.js, TypeChain, OpenZeppelin, Mocha, Chai, Waffle

Back-end:
Node.js, MongoDB, Mongoose, Express, Ethers.js, Joi

## How to Use

It's required that you have `yarn` installed. If you don't, simply run `npm i -g yarn`.
Using `yarn create ether-dapp` ensures that you always use the latest version.

Once the app is running using `yarn dev` you can view at:

- Frontend <http://localhost:3000>
- Backend <http://localhost:5000>

### How to Install

After creating a new repo, clone your new repo into your IDE of choice.
Once cloned, go into your new cloned repo & run:

```bash
yarn install
```

You can also `cd` into all 3 directories (`frontend`, `backend`, & `hardhat`) & run `yarn install`.

## How to Run

You can run the backend, frontend, and local blockchain node all from 1 single terminal instance.
To do so, run the following command from your project's root directory.

```bash
yarn dev
```

This utilizes a package called `concurrently` that allows you to concurrently run all instances from a single terminal.

Run the frontend
cd /frontend
yarn dev

Run the backend
cd /frontend
yarn dev

Run Hardhat
cd /hardhat
npx hardhat node - spin up local eth blockchain in hardhat
npx hardhat compile - compile changes to your smart contract
npx hardhat run --network localhost scripts/deploy.ts - deploy contracts to defaultNetwork, set in hardhat.config.ts


## Code Environment and Metamask Setup for Solidity

Download Github repo into local folder

Open up Git Bash/cmd, navigate to local repo directory and type in code . to bring up VS Code

After VS Code opens up, go to the top nav bar and press “Terminal”, “New Terminal”

In the terminal box that opens up type in yarn install

You will most likely receive errors, fix those errors by installing the dependencies in the logs it tells you to install or googling the issue. If success, fantastic you’re past most of the difficult part.

After success, In the main directory, type in yarn dev

This will boot up a testnet Ethereum blockchain in your local environment!

View your app at http://localhost:3000/. 

Connect your Metamask wallet via Hardhat test network. Go to metamask extension on browser. Go the settings menu. Under Settings, go to Networks. Scroll down to Custom RPC. Enter these credentials:

Network Name: Hardhat Local

New RPC URL: http://127.0.0.1:8545/

Chain ID: 1337 or 31337

Select Hardhat Local network

Go back to your dev environment and locate the testnet keys that are in your terminal after running yarn dev or npx hardhat. Copy the Private key of whatever Hardhat test account you would like. PS. Address #0 is used in testing as the contract deployer address and the others as test user addresses

Go back to your Metamask extension in your browser and Import Account. Paste the private key you got from hardhat

That account should now have the 10000 testnet ETH that you can also see in the hardhat log in the terminal console in VS code

Your Web3 blockchain, backend, frontend website and metamask are all hooked up, calls from the developer enviornment to the frontend wallet should work as expected! Happy Buidling!