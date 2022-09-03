import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/index.js";

import BackgroundBG from "../../assets/backgroundLogo.png";
import Banner from "./components/Banner/index.js";
import Giveaway from "./components/Giveaway/index.js";
import LatestWinner from "./components/LatestWinner/index.js";
import MyWinnings from "./components/MyWinnings/index.js";
import TreasureBalance from "./components/TreasureBalance/index.js";
import Hardware from "./components/Hardware/index.js";
import Investments from "./components/Investments/index.js";
import Metals from "./components/Metals/index.js";
import Web3 from "web3";
import {contract_address,contract_ABI} from "../Home/config"
import Axios  from "axios";
import img from "../../../src/assets/platinum.png";
import img1 from "../../../src/assets/copper.png";

import img2 from "../../../src/assets/gold.png";

import img3 from "../../../src/assets/silver.png";
function Home() {

 const[NFTaddress,set_NFTaddress]=useState("");
 const[ItsWinner,set_ItsWinner]=useState(false);
 const[mywinning,set_mywinning] = useState([])
 const[allWinners,set_allWinners] = useState([])
 const[latest_Winner,set_latest_Winner] = useState("")
 const[latest_reward,set_latest_reward] = useState("")

 const[latest_NFT,set_latest_NFT] = useState("")
 const[treasure_balance,set_treasure_balance] = useState("")


 const[userAddress,setAddress]=useState("");
 const[networkId,setNetworkID]=useState("0");
 const[ipfs,set_ipfs]=useState([]);

 const[isWalletConnected,setisWalletConnected]=useState(false);



useEffect(async()=>{
  const web3 = new Web3(window.ethereum);
      let bal = await web3.eth.getBalance("0xEb76A681A7b9cc6247E9B4220fB086437Ca911B8");
     const avalanche_usd = await Axios.get("https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd");
    const usd=avalanche_usd.data["avalanche-2"].usd;

      bal = web3.utils.fromWei(bal,"ether");
      // const av="avalanche-2";
      set_treasure_balance(parseFloat(bal).toFixed(2) +" ("+(parseFloat(bal)*usd).toFixed(1)+"  USD)  Avax");

},[treasure_balance,ipfs,mywinning])


async function data(){
  
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })
  const web3 = new Web3(window.ethereum);

  const contract =  new web3.eth.Contract(contract_ABI,contract_address);
  // const temp="0xc7035A6a86D603eCA1F2096d4E00C75eD91c2E75";

  const balance = await contract.methods.balanceOf(accounts[0]).call();
  let j=0;
  let arr=[];
  console.log("hello");
  for(let i = 0; i<balance;i++){

      const winner = await contract.methods.tokenOfOwnerByIndex(accounts[0],i).call();
      const ipfs = await contract.methods.tokenURI(winner).call();
      const res =await Axios.get("https://nananfts.mypinata.cloud/ipfs/"+ipfs.slice(7,));
      console.log("img3"+img3);

      arr.push(res.data);




   


  }
  set_ipfs(arr);
  console.log("my arr "+arr);
}

  async function mount() {
    
  try {
    if (!window.ethereum) {
      alert(
        "it looks like that you dont have metamask installed,please install"
      );
      return;
    }
   const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })
      // const winner = await contract.methods.ownerOf(1).call();


      console.log("huhuhu");
   
    await Axios.get("https://nodemine01.herokuapp.com/get?"+ new URLSearchParams({
      userAddress: accounts[0].toLowerCase(),})
    ).then((response)=>{
      console.log("its my winnning response" + response.data);
      set_mywinning(response.data)
      
    })
  
    await Axios.get("https://nodemine01.herokuapp.com/latest"
    ).then((response)=>{
      console.log("its response" +response.data);
      set_allWinners(response.data)
      
    })
  
    await Axios.get("https://nodemine01.herokuapp.com/latestwinner"
    ).then((response)=>{
      // console.log("its response" +typeof(response.data[0].NFT));
      try{
        set_latest_Winner(response.data[0].userAddress);
        set_latest_NFT(response.data[0].NFT);
        set_latest_reward(response.data[0].award);

        console.log(response.data[0].userAddress.toString().toLowerCase() +"dwfsafcf ");
  
        if(response.data[0].userAddress.toString().toLowerCase()===accounts[0].toString().toLowerCase())
        {
          console.log("winnner");
          set_ItsWinner(true);
        }
      }
      catch{

      }
    
  
      
    })
    await data();

 
  


  }
  catch(err){
    alert("Something1 went wrong."+err);
  }

}


async function connectWallet() {


  const CHAIN_ID= "0xa86a";
  const CHAIN_ID1= "43114";
    if (!window.ethereum) {
      alert(
        "it looks like that you dont have metamask installed,please install"
      );
      return;
    }
  
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const networkId = await window.ethereum.request({
        method: "net_version",
      });
      setNetworkID(networkId);
      console.log(
        "id from async func is: " + CHAIN_ID + "hellggg " + networkId.toString()
      );
  
      // console.log(IDs)
      if (networkId == CHAIN_ID1) {
        setisWalletConnected(true);
        console.log("its in net" );
  
      //   mount() ;       
  
        setAddress(window.ethereum.selectedAddress);
        mount();
                return window.ethereum.selectedAddress;

      } else {
        window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: CHAIN_ID }],
        });
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  }



  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(115.48deg, #040818 33.86%, #0C0C3F 100%)",
      }}
    >
      <Navbar connectWallet={connectWallet}  userAddress={userAddress}/>
      <div
        style={{
          backgroundImage: `url(${BackgroundBG})`,
          height: "calc(100vh - 70px)",
        }}
        className="w-full mt-[70px] overflow-auto overflow-x-hidden pb-[50px] bg-no-repeat bg-right-bottom	"
      >
        <button className="block sm:hidden mx-auto bg-[#264DF7] w-fit py-[10px] px-5 text-white border-0 cursor-pointer font-bold text-base	font-Space-Mono m-[9px]"
         onClick={async()=>{
           const res= await connectWallet()
           setAddress(res)
        
        }} >
                {!userAddress ? "Connect Wallet" : userAddress.slice(0, 3)+"..."+userAddress.slice(39, 42)}

        </button>
        {ItsWinner?(<Banner  allWinners={latest_reward} />):("")}
        
        <div className="w-full flex flex-wrap">
          <div className="min-w-[300px] sm:min-w-[400px] text-left px-5 py-[10px] flex-[3]">
            <Giveaway />
            <LatestWinner allWinners={allWinners} />
            <MyWinnings allWinners={mywinning}/>
          </div>
          <div className="min-w-[300px] sm:min-w-[400px] text-left px-5 py-[10px] flex-[3]">
            <TreasureBalance treasure_balance = {treasure_balance} />
            <Hardware />
            <Investments />
          </div>
          <div className="min-w-[300px] sm:min-w-[400px] text-left px-5 py-[10px] flex-[3]">
         <Metals ipfs={ipfs}/>
            {/* <Metals /> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
