const IDL = {
    version: "0.1.0",
    name: "barcode",
    instructions: [
        {
            name: "initialize",
            accounts: [
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "nftConfig",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "symbol",
                    type: "string",
                },
            ],
        },
        {
            name: "mintNft",
            docs: [
                "Use for minting a new token",
                "* ctx: accounts context",
                "* name: name of new nft",
                "* symbol: name of new nft",
                "* uri: uri of new nft",
                "* nft_type: type of new nft",
            ],
            accounts: [
                {
                    name: "mint",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "owner",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "metadataAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "masterEditionAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nftConfig",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "associatedTokenProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMetadataProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "uri",
                    type: "string",
                },
            ],
        },
    ],
    accounts: [
        {
            name: "NftConfig",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "symbol",
                        type: "string",
                    },
                    {
                        name: "nftMinted",
                        type: "u64",
                    },
                    {
                        name: "bump",
                        type: "u8",
                    },
                ],
            },
        },
    ],
    events: [
        {
            name: "MintNftEvent",
            fields: [
                {
                    name: "address",
                    type: "publicKey",
                    index: false,
                },
                {
                    name: "name",
                    type: "string",
                    index: false,
                },
                {
                    name: "symbol",
                    type: "string",
                    index: false,
                },
                {
                    name: "uri",
                    type: "string",
                    index: false,
                },
                {
                    name: "owner",
                    type: "publicKey",
                    index: false,
                },
            ],
        },
    ],
    errors: [
        {
            code: 6000,
            name: "WrongSwappingToken",
            msg: "Wrong swapping token of this nft!",
        },
        {
            code: 6001,
            name: "NotEnoughToken",
            msg: "Not enough swapping token!",
        },
        {
            code: 6002,
            name: "OutOfStock",
            msg: "Nft out of stock",
        },
    ],
};

module.exports = IDL;
