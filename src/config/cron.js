// import { CronJob } from "cron";
import cron from 'node-cron'
import https from "https";

const job = cron.schedule("*/13 * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request for api/health endpoint sent successfully using cron");
      else console.log("GET request for api/health endpoint failed using cron", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request for api/health endpoint sent successfully using cron", e));
});

export default job;