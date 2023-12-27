import React from "react";
import './App.css';
import ChartLine from "./ChartLine";
import whiteEth from "./luffy/white eth (1).png"
import ownerPng from "./luffy/owner png (1).png"
import treasureImg from "./luffy/mcap png (1).png"
import holdersImg from "./luffy/holders png (1).png"

function App() {
  return (
    <div className="App flex " >
      <div className="w-2/5">
        <div>
          <button className="bg-gradient-to-t from-cyan-500 to-blue-500 border border-black-500 rounded-md px-14 py-1 ml-16 my-8 mr-16">SWAP</button>
          <button className="bg-gradient-to-t from-cyan-500 to-blue-500 border border-black-500 rounded-md px-14 py-1 m-4">CHART</button>
        </div>
        <div className="border border-black-500 rounded-t-[24px] h-[46vw] ml-4">

        </div>
      </div>

      <div className="metric-data border border-500 py-2  m-4 h-vh rounded-[30px] w-3/5">
        <h1 className="px-4 py-2 pt-5 text-2xl">METRIC DATA</h1>
        <div className="border-t-2 mx-4 mr-11 my-3 border-500"></div>
        <div className="mainDiv flex">
          <div className="leftDiv">

            <div className="overflow-hidden border border-500  mx-4 my-2 w-[18vw] rounded-r-[15px]">
              <div className="px-4 py-2">
                <p className="text-[10px]">DOUBLOONS VALUE</p>
                <h1 className="text-[30px]">$0.00000143</h1>
                <div className="border-t-2 my-2 border-500"></div>
                <p className="text-[10px]" >TIDAL SHIFTS</p>
                <h2 className="text-[30px]" >0.00%</h2>
              </div>
              <button className="overflow-hidden text-sm bg-sky-500 px-14 py-2 w-full">VIEW GRAPH</button>
            </div>

            <div>
              <div className="flex color border mx-4 my-4 border-500 w-[18vw] rounded-[20px]">
                <div className="p-4">
                  <p className="text-[10px]">SUNKEN TREASURE</p>
                  <h2 className="text-[20px]">0.13 ETH</h2>
                </div>
                <img className="ml-[62px] mt-2 h-[60px]" src={whiteEth} alt="" />
              </div>
            </div>

            <div className="border-8 border-500 rounded-full w-[260px] h-[260px] mx-4 px-7 py-16">
              <p className="text-center"> TIDE'S REST</p>
              <div className="flex ml-2 mt-2">
                <div className="px-4 py-4">
                  <h1 className="text-center text-3xl">17</h1>
                  <h1>HRS</h1>
                </div>
                <div className="px-4 py-4 text-3xl">
                  :
                </div>
                <div className="px-4 py-4">
                  <h1 className="text-center text-3xl">52</h1>
                  <h1>MINS</h1>
                </div>
              </div>
            </div>

          </div>

          <div className="rightDiv">

            <div className="border border-500 rounded-[20px] w-[34.5vw] h-[35vh] mx-4 mr-11 my-2 mb-6">
              <ChartLine />
            </div>

            <div className="pt-6 flex flex-wrap ">
              <div className="flex color border border-500 px-8 py-2 mx-4 my-2 w-[16vw] h-[8vh] rounded-[30px]">
                <div>
                  <p className="text-[10px]">TREASURE HOARD</p>
                  <h2 className="text-[23px]">$172.02</h2>
                </div>
                <img className="mt-3 ml-[33px] h-[38px]" src={treasureImg} alt=""></img>
              </div>

              <div className="flex color border border-500 px-8 py-2 mx-4 my-2 w-[16vw] h-[8vh] rounded-[30px]">
                <div>
                  <p className="text-[10px]">CREW SIZE</p>
                  <h2 className="text-[23px]">777</h2>
                </div>
                <img className="mt-3 ml-[63px] h-[38px]" src={holdersImg} alt=""></img>
              </div>

              <div className="flex color border border-500 px-8 py-2 mx-4 my-2 w-[16vw] h-[8vh] rounded-[30px]">
                <div>
                  <p className="text-[10px]">PERSONAL LOOT</p>
                  <h2 className="text-[23px]">0</h2>
                </div>
                <img className="mt-3 ml-[42px] h-[38px]" src={ownerPng} alt=""></img>
              </div>

              <div className="color border border-500 px-8 py-2 mx-4 my-2 w-[16vw] h-[8vh] rounded-[30px]">
                <div>
                  <p className="text-[10px]">SEA TRACE VOLUME</p>
                  <h2 className="text-[23px]">$0</h2>
                </div>
              </div>
              
            </div>

            <div className="grid justify-items-center my-2">
              <div className="pl-9 border border-l-4 border-white-500  w-80 h-6">
                <p className="">498171hrj1hb1gd913913913 <span className="border-l-2 ml-9"></span></p>
              </div>
            </div>

          </div>
        </div>

        <div className="grid justify-items-center m-3">
          <div className="bg-gradient-to-t from-cyan-500 to-blue-500 flex border text-center rounded-[20px] h-[12vh] w-[30vw] p-3">
            <div className="color border bg-transparent text-center rounded-[20px] h-[9vh] w-[10vw] mr-2 pt-2">
              <p className="text-[9px]" > Crew's Share</p>
              <p className="text-xl pt-2" >12,34,000</p>
            </div>
            <div className="mr-2 p-2 pt-3">
              <p>CLAIMABLE</p>
              <p>BOUNTY</p>
            </div>
            <div className="color border text-center rounded-[20px] h-[9vh] w-[10vw] pt-2">
              <p className="text-[9px]">Bounty Harvest</p>
              <div className="flex pl-9 pt-2">
              <p className="text-xl">0.174</p>
              <img className="h-[30px]" src={whiteEth} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
