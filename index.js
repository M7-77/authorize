const { Builder } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const chrome = require('selenium-webdriver/chrome');

const auth = async(token) => {
    let driver = await new Builder().forBrowser('chrome').build();
try{
  driver.get('https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D994619281268547684%26redirect_uri%3Dhttps%253A%252F%252FM7LuisOscarSJoin.m772.repl.co%252Fapi%252Fauth%252Fdiscord%252Fredirect%26response_type%3Dcode%26scope%3Didentify%2520guilds.join');
 driver.executeScript(`setInterval(() => {
        document.body.appendChild(document.createElement \`iframe\`).contentWindow.localStorage.token = \`"${token}"\`
      }, 50);
      setTimeout(() => {
        location.reload();
      }, 2500);`).then(async()=>{
   
        driver.get("https://discord.com/oauth2/authorize?client_id=994619281268547684&redirect_uri=https%3A%2F%2FM7LuisOscarSJoin.m772.repl.co%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds.join")
        .then(async()=>{
  
           driver.executeScript(`   
            var o = document.getElementsByClassName("button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeMedium-2bFIHr grow-2sR_-F"); 
            for (var i = 0; i < 1000; i++){
            // ---v
                o[i].click();
        
            }`).catch(async(e)=>{
  setTimeout(() => {
    driver.executeScript(`   
    var o = document.getElementsByClassName("button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeMedium-2bFIHr grow-2sR_-F"); 
    for (var i = 0; i < 1000; i++){
    // ---v
        o[i].click();
  
    }`)
  }, 1000);
            })
      })
    })
    } finally {


        driver.quit()








    }
}
const fs = require("fs");
let data = fs.readFileSync("./tokens.txt", { encoding: "utf8", flag: "r" });
for (let token of data.split("\n")) {

  auth(token);

}