export async function mint_walletNew({
	walletAddress,
	blockchain,
	signedString,
	signedKeyLinking,
}) {
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
		return { ...wallet, signedString, signedKeyLinking };
	} catch (e) {
		console.error(e);
		throw e;
	}
}

function metaJuiceClient(method, params) {
	const url = "https://dev-cryptoapi.metajuice.link/v1/";
	const client = new JSONRPCClient((jsonRPCRequest) =>
		fetch(url, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-api-key": "48e4S3j4i33xbQJFZmmZ6UixBtxMqKV4wjyYL8f9",
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
			} else if (jsonRPCRequest.id !== undefined) {
				return Promise.reject(new Error(response.statusText));
			}
		})
	);
	return client.request(method, params);
}
