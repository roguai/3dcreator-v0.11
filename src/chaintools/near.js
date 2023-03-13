const BN = require('bn.js');

export const mintNFTNEAR = async (tokenId, title, desc, media, receiverId) => {
    await window.contract.nft_mint(
        {
            token_id: tokenId,
            metadata: {
                title: title,
                description: desc,
                media: media
            },
            receiver_id: receiverId
        },
        300000000000000,
        new BN("1000000000000000000000000")
    );
}