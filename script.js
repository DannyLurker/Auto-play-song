const schedule = require("node-schedule");
const sound = require("sound-play");
const path = require("path");

function scheduleSound(time, filename) {
  schedule.scheduleJob(time, () => {
    const filePath = path.join(__dirname, filename);
    sound
      .play(filePath)
      .then(() => console.log(`🎵 Playing: ${filename}`))
      .catch((err) => console.error(`❌ Error playing ${filename}:`, err));
  });
}

scheduleSound("24 10 * * *", "meme.mp3");
scheduleSound("53 20 * * *", "sound.mp3");
