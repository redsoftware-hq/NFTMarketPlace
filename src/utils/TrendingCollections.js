import Puppy from '../assets/collections/puppy.png';
import Mouse from '../assets/collections/mouse.png';
import Bear from '../assets/collections/bear.png';
import Mushroom_1 from '../assets/collections/card2-mushroom1.png';
import Mushroom_2 from '../assets/collections/card2-mushroom2.png';
import Mushroom_3 from '../assets/collections/card2-mushroom3.png';
import Robot_1 from '../assets/collections/card3-robot1.png';
import Robot_2 from '../assets/collections/card3-robot2.png';
import Robot_3 from '../assets/collections/card3-robot3.png';
import art1 from '../assets/collections/art1.png';
import art2 from '../assets/collections/art2.png';
import art3 from '../assets/collections/art3.png';

export let collection = [
  {
    id: 1,
    url: Puppy,
    thumbnailOne: Mouse,
    thumbnailTwo: Bear,
    design: 'DSGN Animals',
    artistName: 'MrFox',
    avatar: art1,
    collectionSize: '143+'
  },

  {
    id: 2,
    url: Mushroom_1,
    thumbnailOne: Mushroom_2,
    thumbnailTwo: Mushroom_3,
    design: 'Magic Mushrooms',
    artistName: 'Shroomie',
    avatar: art2,
    collectionSize: '235+'
  },

  {
    id: 3,
    url: Robot_1,
    thumbnailOne: Robot_2,
    thumbnailTwo: Robot_3,
    design: 'Disco Machines',
    artistName: 'BeKind2Robots',
    avatar: art3,
    collectionSize: '62+'
  }
];

// export const collectionNft = [
//   {
//     id: 9,
//     image: [ Puppy, Mouse,: Bear ],
//     imgTitle: 'DSGN Animals',
//     avatar: art1,
//     avatarName: 'Mr Fox',
//     price: '1.63 ETH',
//     highestBid: '0.33 wETH',
//     fiatPrice: '4.95',
//     collectionSize: '143+'
//   }
// ];

export const collectionList = [
  {
    id: 1,
    imgTitle: 'DSGN Animals',
    avatarName: 'MrFox',
    avatar: art1,
    collectionSize: '143+',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    fiatPrice: '4.95',
    isAvailabe: true,
    nftList: [
      { id: 9, image: Puppy },
      { id: 10, image: Mouse },
      { id: 11, image: Bear }
    ]
  },
  {
    id: 2,
    imgTitle: 'Magic Mushrooms',
    avatarName: 'Shroomie',
    avatar: art2,
    collectionSize: '235+',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    fiatPrice: '4.95',
    isAvailabe: true,
    nftList: [
      { id: 12, image: Mushroom_1 },
      { id: 13, image: Mushroom_2 },
      { id: 14, image: Mushroom_3 }
    ]
  },
  {
    id: 3,
    imgTitle: 'Disco Machines',
    avatarName: 'BeKind2Robots',
    avatar: art3,
    collectionSize: '62+',
    price: '1.63 ETH',
    highestBid: '0.33 wETH',
    fiatPrice: '4.95',
    isAvailabe: true,
    nftList: [
      { id: 15, image: Robot_1 },
      { id: 16, image: Robot_2 },
      { id: 17, image: Robot_3 }
    ]
  }
];
