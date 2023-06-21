const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "API_KEY",
    });

    const uploadArray = [
        {
            path: "test_video.mp4",
            content: fs.readFileSync('./test_video.mp4', {encoding: 'base64'})
        },
        {
            path: "dummy.pdf",
            content: fs.readFileSync('./dummy.pdf', {encoding: 'base64'})
        },
        {
            path: "wall.png",
            content: fs.readFileSync('./wall.png', {encoding: 'base64'})
        },
        {
            path: "demo.html",
            content: fs.readFileSync('./demo.html', {encoding: 'base64'})
        },
        {
            path: "Fav_Cars.json",
            content: {
                one: "Mercedez",
                two: "Ferrari", 
                three: "BMW"
            },
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });
    console.log("UPLOADED SUCCESSFULLY");
    console.log(response.result)
}

uploadToIpfs();
