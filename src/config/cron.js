// import { CronJob } from "cron";
import cron from 'node-cron'
import https from "https";

const job = cron.schedule("* * * * *", function () {
  https
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request for api/health endpoint sent successfully using cron");
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

export default job;