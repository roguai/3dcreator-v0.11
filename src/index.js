import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import App from './components/App/App';
import { AppProvider } from './components/App/context';
import reportWebVitals from './reportWebVitals';

import AssetCreator from './components/AssetCreator';
import Profile from './components/Profile/Profile';
import ErrorPage from './components/RouteErrorPage';

// initializing contract
import * as nearAPI from "near-api-js";
import getConfig from './config';

async function initContract() {
  const nearConfig = getConfig("testnet");

  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()
    },
    ...nearConfig
  });

  console.log(near)
  const walletConncection = new nearAPI.WalletConnection(near);

  let currentUser;
  if (walletConncection.getAccountId()) {
    currentUser = {
      accountId: walletConncection.getAccountId(),
      balance: (await walletConncection.account().state()).amount
    }
  }

  const contract = await new nearAPI.Contract(walletConncection.account(), nearConfig.contractName, {
    viewMethods: ["read"],
    changeMethods: ["create_update"],
    sender: walletConncection.getAccountId()
  });
  console.log(contract)
  return { contract, currentUser, nearConfig, walletConncection };
}

const root = createRoot(document.getElementById("root"));


window.nearInitPromise = initContract().then(({ contract, currentUser, nearConfig, walletConncection }) => {
  root.render(
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App contract={contract} currentUser={currentUser} nearConfig={nearConfig} wallet={walletConncection} />}>
            <Route index path='/assetcreator' element={<AssetCreator />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
