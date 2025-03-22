

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://Arash847:<db_password>@arbot.1lomg.mongodb.net/?retryWrites=true&w=majority&appName=ARBot",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/pCREeGpeuf",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "AR",
      password: "AR847",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
