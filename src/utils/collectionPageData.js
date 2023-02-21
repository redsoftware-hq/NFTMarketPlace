import avatar from "../assets/collectionsPage/avatar.png";
import bg from "../assets/collectionsPage/BG.png";
import w1 from "../assets/collectionsPage/artistWorks/w1.png";
import w2 from "../assets/collectionsPage/artistWorks/w2.png";
import w3 from "../assets/collectionsPage/artistWorks/w3.png";
import w4 from "../assets/collectionsPage/artistWorks/w4.png";
export const HEADER = bg;
export const ARTIST = {
  name: "Orbitian",
  avatar: avatar,
};
export const COLLECTION = {
  name: "The Orbitians",
  minted: "Sep 30, 2022",
  description: `The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,
  There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
  They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.  
  `,
};
export const artistWorks = [
  {
    id: 1,
    image: w1,
    imgTitle: "Foxy Life",
    avatar: avatar,
    avatarName: "Obsidian",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    id: 2,
    image: w2,
    imgTitle: "Cat from future",
    avatar: avatar,
    avatarName: "Obsidian",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    id: 3,
    image: w3,
    imgTitle: "Psycho Dog",
    avatar: avatar,
    avatarName: "Obsidian",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    id: 4,
    image: w4,
    imgTitle: "Designer Bear",
    avatar: avatar,
    avatarName: "Obsidian",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];
