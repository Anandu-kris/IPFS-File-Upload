const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "API_KEY",
    });

    const uploadArray = [
        {
            path: "demo.html",
            content: fs.readFileSync('./demo.html', {encoding: 'base64'})
        },
        {
            path: "favResturants.json",
            content: {
                one: "Red Lobster",
                two: "Chipotle", 
                three: "Chic-Fil-A"
            },
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });

    console.log(response.result)
}

uploadToIpfs();
