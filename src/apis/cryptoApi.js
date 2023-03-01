import { ethers } from 'ethers';
import { JSONRPCClient } from 'json-rpc-2.0';

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

  try {
    await metaJuiceClient('mint_wallet', params);

    await metaJuiceClient('registerWallet', params);

    // Return wallet with signed strings
    return { walletAddress, blockchain, signedString, signedKeyLinking };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const updateBalanceAsync = async ({ walletAddress, blockchain }) => {
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

  try {
    const response = await metaJuiceClient('fetch_fungibleForWallet', params);
    const sanitizedResults = response.map(({ fungibletoken: { tokenType, amount } }) => ({
      tokenType,
      amount,
      lastUpdate: new Date().toJSON()
    }));

    // The value we return becomes the `fulfilled` action payload
    return sanitizedResults;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const mintNft = async ({ walletAddress, blockchain, fileData, metadata, nftId }) => {
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
      image: {
        name: fileData.name,
        data: fileData.data
      }
    },
    {
      text: {
        name: nftId,
        data: JSON.stringify(textData)
      }
    }
  ];

  try {
    const response = await metaJuiceClient('upload_mint_transfer', params);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchNftForWallet = async ({ walletAddress, blockchain }) => {
  const params = [
    {
      wallet: {
        walletAddress: walletAddress,
        blockchain: {
          name: blockchain
        }
      }
    }
  ];

  try {
    const response = await metaJuiceClient('fetch_nftsForWallet', params);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
