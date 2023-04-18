import axios from "axios";

export async function getBodyparts() {
  const options = {
    headers: {
      "X-RapidAPI-Key": "361da33457msh321bb58d0e43461p1ecf11jsn542819c4b882",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const bodyParts = await axios.get(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    options
  );

  return bodyParts;
}
