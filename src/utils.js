import { connect, Contract, keyStores, WalletConnection, Account, utils } from 'near-api-js';
import * as buffer from 'buffer';
import getConfig from './nearconfig';
window.Buffer=buffer.Buffer;



// const nearConfig = getConfig(process.env.NODE_ENV || "development");
const nearConfig = getConfig("development");
export async function initContract() {
    const near = await connect(
        Object.assign(
            {
                deps: {
                    keyStore:new keyStores.BrowserLocalStorageKeyStore()
                }
            },
            nearConfig
        )
    );

    window.near=near;

    window.walletConnection=new WalletConnection(near);

    window.accountId=window.walletConnection.getAccountId();
    
    window.configInfo=nearConfig;

    window.account=new Account(near, window.accountId);
    
    window.currentUser='';
    if(window.accountId){
        window.currentUser={
            accountId:window.accountId,
            balance:await window.walletConnection.account().state()
        }
    }

    window.contract=await new Contract(
        window.walletConnection.account(),
        nearConfig.contractName,
        {
            viewMethods:[""],
            changeMethods:["nft_mint"]
        }
    );

    console.log(window.contract)
}

export function signout(){
    window.walletConnection.signOut();

    window.location.replace(window.location.origin+window.location.pathname);
}

export function signin(){
    window.walletConnection.requestSignIn(nearConfig.contractName, "REITIO");
}