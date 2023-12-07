import obsOfChaos from "../../public/cat - orbs of chaos.jpg";
import gelacticTrance from "../../public/galactic_trance.gif";
import universalCharm from "../../public/cat-universal charm.gif";
import hoolagens from "../../public/hoolagen cat.jpg";
import tender from "../../public/tender_teddy.jpg";


const collection = [
  {
    name: "The Orbs of chaos",
    img: obsOfChaos
  },
  {
    name: "Arah, of Universal Charm",
    img: universalCharm
  },
  {
    name: "FooFoo, of Galactic Trance",
    img: gelacticTrance
  },
  {
    name: "The dancing minions of insanity",
    img: hoolagens
  },
  {
    name: "Miani, of home comforts",
    img: tender
  }
]

const getRandomCat = () => {
  const i = Math.floor(Math.random() * collection.length);
  return collection[i]
};

export default getRandomCat