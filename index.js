const wdio = require("webdriverio");

// Chromedriver to be used is 26.03, Ass mentioned in the link: https://github.com/headspinio/appium-tizen-tv-driver/blob/main/packages/appium-tizen-tv-driver/README.md#:~:text=g.%3A%20127.0.0.1%3A26101-,appium%3AchromedriverExecutable,-%5BRequired%5D%20Most  
const opts = {
    // path: '/wd/hub',
    port: 4723,
    capabilities: {
        "platformName": "TizenTV",
        "appium:automationName" : "TizenTV",
        "appium:deviceName" : "172.31.42.205:26101",
        "appium:chromedriverExecutable" : "/Users/kushagravarade/Downloads/chromedriver", // Path to your chromedriver
        "appium:rcToken" : "16085789",
        "appium:appPackage" : "org.tizen.example.MovieLibrary",
        "appium:rcMode" : "remote",
        "appium:rcDebugLog" :  true,
        "appium:rcKeypressCooldown" : "750"
    }
  };

let client 

async function getRemote(){
  client = await wdio.remote(opts)
  return client
}

console.log("STARTING")

const prom = getRemote()

prom.then((data) => {
  console.log("DATA:  " , data)
}).catch((err) => {
  console.error("I got err" , err)
})

console.log("Ending")

  
