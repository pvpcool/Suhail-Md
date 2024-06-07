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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_46_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9oVUE5SGdUZ0tVSjFnRkJpaHhiN3QvT2xib1IzcG5FNGpxUG5UbUNqRzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1PUHVzcUVUUndLb0xkYm5EMjF4N2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU1ZWMwOTUtNGI1Yy00Y2I4LTkyZjItMWZlMTNjZDdiM2FkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTM4LFxuICAgICAgMjIzLFxuICAgICAgMTMxLFxuICAgICAgNTEsXG4gICAgICAyNTAsXG4gICAgICAxNTIsXG4gICAgICAxNzEsXG4gICAgICAxNjAsXG4gICAgICAxMyxcbiAgICAgIDE5OCxcbiAgICAgIDIyNSxcbiAgICAgIDE2MixcbiAgICAgIDEzNSxcbiAgICAgIDEyNCxcbiAgICAgIDIyNyxcbiAgICAgIDI1MixcbiAgICAgIDkwLFxuICAgICAgMjM4LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDIwNSxcbiAgICAgIDE5NyxcbiAgICAgIDE0OCxcbiAgICAgIDcsXG4gICAgICA1NyxcbiAgICAgIDM4LFxuICAgICAgMTg5LFxuICAgICAgNTIsXG4gICAgICAxNTIsXG4gICAgICAyMTYsXG4gICAgICAxODgsXG4gICAgICAxNjQsXG4gICAgICA0NCxcbiAgICAgIDQsXG4gICAgICA5OSxcbiAgICAgIDI1NCxcbiAgICAgIDExNSxcbiAgICAgIDI0MCxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Lcityd0dFUCtCakxNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGFuYUh4Mk9vNW9rZVVHVFB2Yk9BQzN4emdUT3NhRzNkeHV3ZTE2T253az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyYWg3QXNGRjluNkJwS3A0aklPbS85YnQ1b0dEOE9Zb3E2Y2NpNmFZK1Erb0xIRG9FTWdmTG5IRWxyOTJDY2xXMC96Y091U3NYZkk4Z2ZvQ215YWFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxTTZ5MGRZU0FSVlZxOFNJbW03eGtCRE9lbjFzUW50a1BxRzJRSkZTRHFKYU11SU10TVVtOWNVeDZSTVljRVlJcnRkTWZ4K01wSE45OFZzbGRUc0FpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTY1NjUxNDIwOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW8y/zYdTzL/Nh8y3zL/Nh2TMv82Hfsy/zYdBzL/Nh2HMv82Hcsy/zYdvzL/Nh8y4zL/Nh27Nh8y/XSDMv82HXCIsXG4gICAgXCJsaWRcIjogXCI2MjY1MDkyMjg2ODgxOTozNUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTY1NjUxNDIwOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzc2NDM1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU52ZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnZlLmpzb24iOiAie1wia2V5RGF0YVwiOlwienQzbWhod29jNHhvRDNOY2RVUlI2enNBamRhank3S1ZIZ0FLeS9nNm8xTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzM4NDQ2MjkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc1MTkwNjM3MzVcIn0iCn0="  // PUT your SESSION_ID 


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
