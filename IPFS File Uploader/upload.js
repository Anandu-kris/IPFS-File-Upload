const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "API_KEY",
    });

    const uploadArray = [
        {
            path: "./assets/test_video.mp4",
            content: fs.readFileSync('./assets/test_video.mp4', {encoding: 'base64'})
        },
        {
            path: "./assets/dummy.pdf",
            content: fs.readFileSync('./assets/dummy.pdf', {encoding: 'base64'})
        },
        {
            path: "./assets/wall.png",
            content: fs.readFileSync('./assets/wall.png', {encoding: 'base64'})
        },
        {
            path: "./assets/demo.html",
            content: fs.readFileSync('./assets/demo.html', {encoding: 'base64'})
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
