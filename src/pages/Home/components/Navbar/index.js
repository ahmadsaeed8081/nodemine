import React, { useState } from "react";
import Logo from "../../../../assets/LogoIcon.svg";
// import Web3 from "web3";
// import {contract_address,contract_ABI} from "../../config"


function Navbar(props) {

   const[userAddress,setAddress]=useState("");
   const[networkId,setNetworkID]=useState("0");
   const[isWalletConnected,setisWalletConnected]=useState(false);


  // async function connectWallet() {


  //   const CHAIN_ID= "0xa86a";
  //   const CHAIN_ID1= "43114";
  //     if (!window.ethereum) {
  //       alert(
  //         "it looks like that you dont have metamask installed,please install"
  //       );
  //       return;
  //     }
    
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       const networkId = await window.ethereum.request({
  //         method: "net_version",
  //       });
  //       setNetworkID(networkId);
  //       console.log(
  //         "id from async func is: " + CHAIN_ID + "hellggg " + networkId.toString()
  //       );
    
  //       // console.log(IDs)
  //       if (networkId == CHAIN_ID1) {
  //         setisWalletConnected(true);
  //         console.log("its in net" );
    
  //       //   mount() ;       
    
  //         setAddress(window.ethereum.selectedAddress);
  //       } else {
  //         window.ethereum.request({
  //           method: "wallet_switchEthereumChain",
  //           params: [{ chainId: CHAIN_ID }],
  //         });
  //       }
  //     } catch (err) {
  //       alert("Something went wrong.");
  //     }
  //   }

    

  return (
    <div className="w-full h-[70px] fixed top-0 left-0 right-0 z-50 bg-[#111730] flex items-center justify-between">
      <div className="flex pl-5">
        <img src={Logo} alt="logo" />
        &nbsp;
        <h1 className="text-xl sm:text-3xl font-bold font-Space-Mono text-white">
          NODEMINE
        </h1>
      </div>
      <div className="flex items-center pr-[15px]">
      <button onClick={()=> window.open('https://mint.nodemine.io/')}  className="bg-[#264DF7] w-fit py-[10px] px-5 text-white border-0 cursor-pointer font-bold text-base	font-Space-Mono m-[9px]">
          MINT NOW
        </button>
        <button onClick={async()=>{
           const res= await props.connectWallet()
           setAddress(res)
        
        }} className="hidden sm:block bg-[#264DF7] w-fit py-[10px] px-5 text-white border-0 cursor-pointer font-bold text-base	font-Space-Mono m-[9px]">
        {!userAddress ? "Connect Wallet" : userAddress.slice(0, 3)+"..."+userAddress.slice(39, 42)}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
