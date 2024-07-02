import { CronJob } from 'cron';
import 'dotenv/config'

const job = new CronJob('0 0 * * * *', () => {
  fetch(`https://discord.com/api/v9/channels/${process.env.DISCORD_CHANNEL_ID}/messages`, {
      "headers": {
          "Content-Type": "application/json",
          "Authorization": process.env.DISCORD_TOKEN
      },
      "body": "{\"mobile_network_type\":\"unknown\",\"content\":\"$p\",\"tts\":false,\"flags\":0}",
      "method": "POST"
  });
}, null, true)
