const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/
"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IXKqGnnqjO4HEliNwpTFs9";
global.website=process.env.GURL || "https://chat.whatsapp.com/IXKqGnnqjO4HEliNwpTFs9" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,22565651420";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22565651420";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_08_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS0NKQUtOZ0s2ME9LN3h4a0ZzWWI4dTYyVWxnQ2w3clZobDJOMk0ra05XOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidE95UTRBV1hRalM5X3JUMURWbEZwUVwiLFxuICBcInBob25lSWRcIjogXCIzYWM3MDNmZi1kZTNlLTQxNzgtODc4ZS04YmVmZWVkYmNjOTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMCxcbiAgICAgIDYyLFxuICAgICAgMTg0LFxuICAgICAgMTIxLFxuICAgICAgMTI1LFxuICAgICAgMTg3LFxuICAgICAgMjgsXG4gICAgICAyMjgsXG4gICAgICAxMDAsXG4gICAgICAyMzMsXG4gICAgICAyMjksXG4gICAgICAxNixcbiAgICAgIDYyLFxuICAgICAgMTc0LFxuICAgICAgNjMsXG4gICAgICAxMzksXG4gICAgICAxNDYsXG4gICAgICAyMDYsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDMzLFxuICAgICAgNzEsXG4gICAgICA4MixcbiAgICAgIDQ5LFxuICAgICAgMTksXG4gICAgICA5LFxuICAgICAgMTYwLFxuICAgICAgMjM2LFxuICAgICAgODgsXG4gICAgICAxMTUsXG4gICAgICAyNDAsXG4gICAgICAxNDIsXG4gICAgICAyMTQsXG4gICAgICAyMTYsXG4gICAgICA4NCxcbiAgICAgIDIxLFxuICAgICAgOCxcbiAgICAgIDExNixcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NvOWZJRkVLT1htYklHR0JBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIR2RvY1NodlJRRUxFVGlMa1RLSnVrWUhPWm90Rkt4NkdvVVI5NWR0aUZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInErNFdwZ1E3UTYxVnRpSWc5anlFSktaNWcrc3ZPT0VMblFEajJsbk5iTGF6aGNidE1pTjV5Z0RrMVM5ZEk5SDc1VExLU00ydnB3eWd0QzEzWHpyc0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllLUmRrMVVqVmNLNUZKOVU1bmZBYkJpRlVsYTdCQ256NnZ1UURCTktESHFYcDNqVUFwOFNuTDJ1Q0h0ODczczU3K3l2TlZxRXppL05HSllNb1FaWmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NjU2NTE0MjA6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJbzL/Nh1PMv82HzLfMv82HZMy/zYd+zL/Nh0HMv82HYcy/zYdyzL/Nh2/Mv82HzLjMv82Hbs2HzL9dIMy/zYdcIixcbiAgICBcImxpZFwiOiBcIjYyNjUwOTIyODY4ODE5OjMwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NjU2NTE0MjA6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4ODI5MjJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "💜",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Nella",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
