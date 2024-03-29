export const contract = {
  address: '0xCf9A56B5d0b617B7403F4753AF6E4D3C09346953',
  abi: [
    { type: 'constructor', payable: false, inputs: [] },
    {
      type: 'event',
      anonymous: false,
      name: 'Approval',
      inputs: [
        { type: 'address', name: 'owner', indexed: true },
        { type: 'address', name: 'approved', indexed: true },
        { type: 'uint256', name: 'tokenId', indexed: true }
      ]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'ApprovalForAll',
      inputs: [
        { type: 'address', name: 'owner', indexed: true },
        { type: 'address', name: 'operator', indexed: true },
        { type: 'bool', name: 'approved', indexed: false }
      ]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'NFTDelistedEvent',
      inputs: [{ type: 'uint256', name: 'tokenId', indexed: true }]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'NFTListedEvent',
      inputs: [
        { type: 'uint256', name: 'price', indexed: false },
        { type: 'uint256', name: 'tokenId', indexed: true },
        { type: 'address', name: 'oldOwnerOfnft', indexed: true }
      ]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'NFTSoldEvent',
      inputs: [
        { type: 'uint256', name: 'price', indexed: false },
        { type: 'uint256', name: 'tokenId', indexed: true },
        { type: 'address', name: 'oldOwnerOfnft', indexed: true },
        { type: 'address', name: 'newOwnerOfNft', indexed: true }
      ]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'NftMintedEvent',
      inputs: [
        { type: 'uint256', name: 'tokenId', indexed: true },
        { type: 'address', name: 'sellerOfNft', indexed: true },
        { type: 'address', name: 'ownerOfNft', indexed: true },
        { type: 'bool', name: 'isListed', indexed: false },
        { type: 'uint256', name: 'price', indexed: false },
        { type: 'bool', name: 'sold', indexed: false }
      ]
    },
    {
      type: 'event',
      anonymous: false,
      name: 'Transfer',
      inputs: [
        { type: 'address', name: 'from', indexed: true },
        { type: 'address', name: 'to', indexed: true },
        { type: 'uint256', name: 'tokenId', indexed: true }
      ]
    },
    {
      type: 'function',
      name: 'approve',
      constant: false,
      payable: false,
      inputs: [
        { type: 'address', name: 'to' },
        { type: 'uint256', name: 'tokenId' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'balanceOf',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'address', name: 'owner' }],
      outputs: [{ type: 'uint256' }]
    },
    {
      type: 'function',
      name: 'burnNFT',
      constant: false,
      payable: false,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: []
    },
    {
      type: 'function',
      name: 'buyNFT',
      constant: false,
      stateMutability: 'payable',
      payable: true,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: []
    },
    {
      type: 'function',
      name: 'delistNFT',
      constant: false,
      payable: false,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: []
    },
    {
      type: 'function',
      name: 'fetchAllListedTokens',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [
        {
          type: 'tuple[]',
          components: [
            { type: 'uint256', name: 'tokenId' },
            { type: 'address', name: 'sellerOfNft' },
            { type: 'address', name: 'ownerOfNft' },
            { type: 'bool', name: 'isListed' },
            { type: 'uint256', name: 'price' },
            { type: 'bool', name: 'sold' }
          ]
        }
      ]
    },
    {
      type: 'function',
      name: 'fetchAllUnsoldNFTs',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [
        {
          type: 'tuple[]',
          components: [
            { type: 'uint256', name: 'tokenId' },
            { type: 'address', name: 'sellerOfNft' },
            { type: 'address', name: 'ownerOfNft' },
            { type: 'bool', name: 'isListed' },
            { type: 'uint256', name: 'price' },
            { type: 'bool', name: 'sold' }
          ]
        }
      ]
    },
    {
      type: 'function',
      name: 'fetchNFTsListedUser',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'address', name: 'user' }],
      outputs: [
        {
          type: 'tuple[]',
          components: [
            { type: 'uint256', name: 'tokenId' },
            { type: 'address', name: 'sellerOfNft' },
            { type: 'address', name: 'ownerOfNft' },
            { type: 'bool', name: 'isListed' },
            { type: 'uint256', name: 'price' },
            { type: 'bool', name: 'sold' }
          ]
        }
      ]
    },
    {
      type: 'function',
      name: 'fetchNFTsMintedUser',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'address', name: 'user' }],
      outputs: [
        {
          type: 'tuple[]',
          components: [
            { type: 'uint256', name: 'tokenId' },
            { type: 'address', name: 'sellerOfNft' },
            { type: 'address', name: 'ownerOfNft' },
            { type: 'bool', name: 'isListed' },
            { type: 'uint256', name: 'price' },
            { type: 'bool', name: 'sold' }
          ]
        }
      ]
    },
    {
      type: 'function',
      name: 'fetchNFTsUser',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [
        {
          type: 'tuple[]',
          components: [
            { type: 'uint256', name: 'tokenId' },
            { type: 'address', name: 'sellerOfNft' },
            { type: 'address', name: 'ownerOfNft' },
            { type: 'bool', name: 'isListed' },
            { type: 'uint256', name: 'price' },
            { type: 'bool', name: 'sold' }
          ]
        }
      ]
    },
    {
      type: 'function',
      name: 'getApproved',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: [{ type: 'address' }]
    },
    {
      type: 'function',
      name: 'getDeployerListedNFTs',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'uint256[]' }]
    },
    {
      type: 'function',
      name: 'getDeployerMintedNFTs',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'uint256[]' }]
    },
    {
      type: 'function',
      name: 'getListingPrice',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'uint256' }]
    },
    {
      type: 'function',
      name: 'getUnsoldNFTs',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'uint256[]' }]
    },
    {
      type: 'function',
      name: 'getUnsoldNFTsForUser',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'address', name: 'user' }],
      outputs: [{ type: 'uint256[]' }]
    },
    {
      type: 'function',
      name: 'isApprovedForAll',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [
        { type: 'address', name: 'owner' },
        { type: 'address', name: 'operator' }
      ],
      outputs: [{ type: 'bool' }]
    },
    {
      type: 'function',
      name: 'listNFT',
      constant: false,
      stateMutability: 'payable',
      payable: true,
      inputs: [
        { type: 'uint256', name: 'tokenId' },
        { type: 'uint256', name: 'price' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'mintNFT',
      constant: false,
      payable: false,
      inputs: [{ type: 'string', name: 'tokenURI' }],
      outputs: [{ type: 'uint256' }]
    },
    {
      type: 'function',
      name: 'name',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'string' }]
    },
    {
      type: 'function',
      name: 'ownerOf',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: [{ type: 'address' }]
    },
    {
      type: 'function',
      name: 'ownerOfContract',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'address' }]
    },
    {
      type: 'function',
      name: 'resellNFT',
      constant: false,
      stateMutability: 'payable',
      payable: true,
      inputs: [
        { type: 'uint256', name: 'tokenId' },
        { type: 'uint256', name: 'price' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'safeTransferFrom',
      constant: false,
      payable: false,
      inputs: [
        { type: 'address', name: 'from' },
        { type: 'address', name: 'to' },
        { type: 'uint256', name: 'tokenId' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'safeTransferFrom',
      constant: false,
      payable: false,
      inputs: [
        { type: 'address', name: 'from' },
        { type: 'address', name: 'to' },
        { type: 'uint256', name: 'tokenId' },
        { type: 'bytes', name: 'data' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'setApprovalForAll',
      constant: false,
      payable: false,
      inputs: [
        { type: 'address', name: 'operator' },
        { type: 'bool', name: 'approved' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'supportsInterface',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'bytes4', name: 'interfaceId' }],
      outputs: [{ type: 'bool' }]
    },
    {
      type: 'function',
      name: 'symbol',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [],
      outputs: [{ type: 'string' }]
    },
    {
      type: 'function',
      name: 'tokenURI',
      constant: true,
      stateMutability: 'view',
      payable: false,
      inputs: [{ type: 'uint256', name: 'tokenId' }],
      outputs: [{ type: 'string' }]
    },
    {
      type: 'function',
      name: 'transferFrom',
      constant: false,
      payable: false,
      inputs: [
        { type: 'address', name: 'from' },
        { type: 'address', name: 'to' },
        { type: 'uint256', name: 'tokenId' }
      ],
      outputs: []
    },
    {
      type: 'function',
      name: 'updateListingPrice',
      constant: false,
      stateMutability: 'payable',
      payable: true,
      inputs: [{ type: 'uint256', name: '_listingPrice' }],
      outputs: []
    }
  ]
};
