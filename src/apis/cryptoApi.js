import { ethers } from "ethers";
import { JSONRPCClient } from "json-rpc-2.0";

export async function mintWalletNew({
  walletAddress,
  blockchain,
  signedString,
  signedKeyLinking,
}) {
  const params = [
    {
      customer: {
        customerId: "321385513",
        metaverse: {
          metaverseName: "IMVU",
          metaverseId: "IMVU_Production",
        },
      },
    },
    {
      wallet: {
        walletAddress: walletAddress,
        blockchain: {
          name: blockchain,
        },
      },
    },
    {
      text: {
        name: "SignedString",
        data: signedString,
      },
    },
    {
      text: {
        name: "SignedKeyLinking",
        data: signedKeyLinking,
      },
    },
    {
      text: {
        name: "TypeOfWallet",
        data: "L2WalletOnImmutableX",
      },
    },
  ];

  try {
    await metaJuiceClient("mint_wallet", params);
    // Return wallet with signed strings
    return { walletAddress, blockchain, signedString, signedKeyLinking };
  } catch (e) {
    console.error(e);
    throw e;
  }
}

function metaJuiceClient(method, params) {
  const url = "https://dev-cryptoapi.metajuice.link/v2/";
  const client = new JSONRPCClient((jsonRPCRequest) =>
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": "216ggx2qQJ1w4c02cKtfF5bE0f4bvBsB47DpGT4o",
      },
      body: JSON.stringify(jsonRPCRequest),
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then((jsonRPCResponse) => {
          if ("error" in jsonRPCResponse) {
            openNotificationWithIcon(
              "error",
              JSON.parse(jsonRPCResponse.error.data).message
            );
            return Promise.reject(
              new Error(extractFullReturnError(jsonRPCResponse.error))
            );
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
    const sanitizedResults = response.map(
      ({ fungibletoken: { tokenType, amount } }) => ({
        tokenType,
        amount,
        lastUpdate: new Date().toJSON(),
      })
    );

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
          name: blockchain,
        },
      },
    },
    {
      text: {
        name: "TokenType",
        data: "ETH",
      },
    },
  ];

  return await metaJuiceClient("fetch_fungibleForWallet", params);
}
