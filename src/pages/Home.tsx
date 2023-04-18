import React, { useEffect, useState } from "react";
import Image from "../assets/workout.jpeg";
import { getBodyparts } from "../api/rapidapi";
import axios from "axios";

function Home() {
  useEffect(() => {
    async function fetchData() {
      const a = await getBodyparts();
      console.log({ a });
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-around items-center h-full">
        <div className="flex flex-col gap-10">
          <h3 className="text-red-600 font-bold text-lg">Fitness Club</h3>
          <p className="text-3xl font-bold">
            Sweat, Smile and <br />
            Repeat
          </p>
          <button
            type="button"
            className="text-red-500 outline outline-black   font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2s w-[170px]"
          >
            Explore Excercises
          </button>
        </div>

        <img src={Image} alt="" className=" w-2/6 rounded-bl-[100px]" />
      </div>
      {/* <h1 className="font-bold text-[200px]">Excercise</h1> */}
    </div>
  );
}

export default Home;
