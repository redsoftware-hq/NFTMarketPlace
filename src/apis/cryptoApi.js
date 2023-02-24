import { ethers } from 'ethers';
import { JSONRPCClient } from 'json-rpc-2.0';

export async function mintWalletNew({ walletAddress, blockchain, signedString, signedKeyLinking }) {
  const params = [
    {
      customer: {
        customerId: '321385513',
        metaverse: {
          metaverseName: 'IMVU',
          metaverseId: 'IMVU_Production'
        }
      }
    },
    {
      wallet: {
        walletAddress: walletAddress,
        blockchain: {
          name: blockchain
        }
      }
    },
    {
      text: {
        name: 'SignedString',
        data: signedString
      }
    },
    {
      text: {
        name: 'SignedKeyLinking',
        data: signedKeyLinking
      }
    },
    {
      text: {
        name: 'TypeOfWallet',
        data: 'L2WalletOnImmutableX'
      }
    }
  ];

  console.log('params', params);

  try {
    await metaJuiceClient('mint_wallet', params);
    // Return wallet with signed strings
    return { walletAddress, blockchain, signedString, signedKeyLinking };
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export function extractFullReturnError(error) {
  if (error === null || typeof error === 'undefined') {
    return '';
  }

  // Return error might or might not have a data field
  if (typeof error === 'object' && error?.message) {
    let retVal = error.message;
    if (error?.data) {
      retVal += ' ' + error.data;
      retVal = error.data;
    }

    return retVal;
  }

  return JSON.stringify(error);
}

function metaJuiceClient(method, params) {
  const url = 'https://dev-cryptoapi.metajuice.link/v2/';
  const client = new JSONRPCClient((jsonRPCRequest) =>
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': '216ggx2qQJ1w4c02cKtfF5bE0f4bvBsB47DpGT4o'
      },
      body: JSON.stringify(jsonRPCRequest)
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then((jsonRPCResponse) => {
          if ('error' in jsonRPCResponse) {
            return Promise.reject(new Error(extractFullReturnError(jsonRPCResponse.error)));
          }
          return client.receive(jsonRPCResponse);
        });
      } else if (!jsonRPCRequest.id) {
        return Promise.reject(new Error(response.statusText));
      }
    })
  );
  return client.request(method, params);
}

export const updateBalanceAsync = async (wallet) => {
  try {
    const response = await fetchFungibleForWallet(wallet);
    const sanitizedResults = response.map(({ fungibletoken: { tokenType, amount } }) => ({
      tokenType,
      amount,
      lastUpdate: new Date().toJSON()
    }));

    // The value we return becomes the `fulfilled` action payload
    return sanitizedResults;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchFungibleForWallet({ walletAddress, blockchain }) {
  const params = [
    {
      wallet: {
        walletAddress: walletAddress,
        blockchain: {
          name: blockchain
        }
      }
    },
    {
      text: {
        name: 'TokenType',
        data: 'ETH'
      }
    }
  ];

  return await metaJuiceClient('fetch_fungibleForWallet', params);
}

export async function nftAuthSignature(
  { contractAddress, tokenId },
  contractOwner,
  destinationWallet,
  onChainMetadata,
  royalties
) {
  const { walletAddress, walletSecret, blockchain } = contractOwner;

  if (royalties && (!royalties.percentage || !royalties.recipient)) {
    throw new Error('You must include both royalties percentage and royalties recipient');
  }

  // ether_key is the wallet that the NFT will be minted into, which doesn't have to be the same as the wallet that deployed the smart contract

  const chosenNetwork = blockchain?.split('_')[1].toLowerCase();

  let mintBodyPayload = {};

  if (royalties) {
    mintBodyPayload = {
      contract_address: contractAddress.toLowerCase(),
      royalties: [
        {
          recipient: royalties.recipient,
          percentage: royalties.percentage
        }
      ],
      users: [
        {
          ether_key: destinationWallet.toLowerCase(),
          tokens: [
            {
              id: tokenId,
              blueprint: onChainMetadata
            }
          ]
        }
      ],
      auth_signature: ''
    };
  } else {
    mintBodyPayload = {
      contract_address: contractAddress.toLowerCase(),
      users: [
        {
          ether_key: destinationWallet.toLowerCase(),
          tokens: [
            {
              id: tokenId,
              blueprint: onChainMetadata
            }
          ]
        }
      ],
      auth_signature: ''
    };
  }

  const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(mintBodyPayload)));

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = await provider.getSigner();
  let signed_message = await signer.signMessage(hash);

  return signed_message;
}

export async function mint_nftToWallet(
  { contractAddress, tokenId },
  wallet,
  ipfsContentHash,
  destinationWalletAddress,
  onChainMetadata,
  tokenUrl,
  baseUrl,
  royalties
) {
  const { walletAddress, blockchain } = wallet;
  const authSignature = await nftAuthSignature(
    { contractAddress, tokenId },
    wallet,
    destinationWalletAddress,
    onChainMetadata,
    royalties
  );
  const params = [
    {
      nonfungibletoken: {
        contractAddress: contractAddress,
        tokenId: tokenId,
        metadata: {
          onChain: onChainMetadata,
          baseUrl: baseUrl,
          tokenUrl: tokenUrl,
          tokenId: tokenId
        }
      }
    },
    {
      wallet: {
        walletAddress: destinationWalletAddress,
        blockchain: {
          name: blockchain
        }
      }
    },
    {
      text: {
        name: 'AuthSignature',
        data: authSignature
      }
    }
  ];

  if (royalties) {
    params.push({
      royalty: {
        royaltyPercentage: royalties.percentage,
        royaltyRecipient: royalties.recipient
      }
    });
  }

  return await metaJuiceClient('mint_nftToWallet', params);
}
