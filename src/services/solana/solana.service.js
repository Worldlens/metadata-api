const anchor = require("@coral-xyz/anchor");
const MetadataService = require("../metadata.service");
const { PRIVATE_KEY, PROGRAM_ID } = require("../../config");
const {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    getAssociatedTokenAddress,
} = require("@solana/spl-token");
const {
    MPL_TOKEN_METADATA_PROGRAM_ID,
    findMasterEditionPda,
    findMetadataPda,
    mplTokenMetadata,
} = require("@metaplex-foundation/mpl-token-metadata");
const { publicKey } = require("@metaplex-foundation/umi");
const { createUmi } = require("@metaplex-foundation/umi-bundle-defaults");
const {
    Connection,
    Keypair,
    PublicKey,
    clusterApiUrl,
} = require("@solana/web3.js");
const NodeWallet = require("@coral-xyz/anchor/dist/cjs/nodewallet");
const { default: Wallet } = NodeWallet;
const idl = require("./abi");

const programID = new PublicKey(PROGRAM_ID);
const SYSTEM_PROGRAM_ID = new PublicKey("11111111111111111111111111111111");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const umi = createUmi(clusterApiUrl("devnet"))
    // .use(walletAdapterIdentity(provider.wallet))
    .use(mplTokenMetadata());

const wallet = new Wallet(
    Keypair.fromSecretKey(Uint8Array.from(JSON.parse(PRIVATE_KEY)))
);

const provider = new anchor.AnchorProvider(connection, wallet, {
    preflightCommitment: "recent",
    commitment: "processed",
});
const program = new anchor.Program(idl, process.env.PROGRAM_ID, provider);

class SolanaService {
    static mint = async (metadata) => {
        const newMint = Keypair.generate();
        const metadataUrl = await MetadataService.create({
            ...metadata,
            category: "product",
            nftId: newMint.publicKey,
        });

        const tokenAccount = await getAssociatedTokenAddress(
            newMint.publicKey,
            wallet.publicKey
        );
        let metadataAccount = findMetadataPda(umi, {
            mint: publicKey(newMint.publicKey),
        })[0];
        let masterEditionAccount = findMasterEditionPda(umi, {
            mint: publicKey(newMint.publicKey),
        })[0];
        const nftConfig = anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from("nft config")],
            programID
        )[0];

        try {
            console.log("--------------------------------");
            const tx = await program.methods
                .mintNft(metadataUrl)
                .accounts({
                    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                    masterEditionAccount: masterEditionAccount,
                    metadataAccount: metadataAccount,
                    mint: newMint.publicKey,
                    nftConfig: nftConfig,
                    owner: wallet.publicKey,
                    rent: "SysvarRent111111111111111111111111111111111",
                    systemProgram: SYSTEM_PROGRAM_ID,
                    tokenAccount: tokenAccount,
                    tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
                    tokenProgram: TOKEN_PROGRAM_ID,
                })
                .signers([wallet.payer, newMint])
                .rpc();
            return `https://explorer.solana.com/tx/${tx}?cluster=devnet`;
        } catch (err) {
            console.log(err);
            return null;
        }
    };
}

module.exports = SolanaService;
