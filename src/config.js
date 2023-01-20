const CONTRACT_NAME = process.env.CONTRACT_NAME || "dfgdfgmycontract1.smarttest.testnet";

export default function getConfig(env) {
    switch (env) {
        case "mainnet":
        case "testnet":
            return {
                networkId: "testnet",
                nodeUrl: "https://rpc.testnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
            }
        default:
            throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js`);
    }
}