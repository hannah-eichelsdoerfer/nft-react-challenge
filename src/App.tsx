import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";
import NFTs from "./components/NFTs";

function App() {
  const [collectionData, setCollectionData] = useState([]);

  const collection = "0x7a4c632eF997192C232551a2818952a07b58d415";

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=${collection}&order_direction=asc`
      );
      console.log(openseaData.data.assets);
      setCollectionData(openseaData.data.assets);
    };

    getNfts();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <NFTs collectionData={collectionData} />
    </div>
  );
}

export default App;
