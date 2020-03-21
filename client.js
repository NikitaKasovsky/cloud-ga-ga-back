const Client = require('museria').Client;
const utils = require('museria/src/utils');

// Тестрирование работы функций museria

(async () => {  
  try {
    const client = new Client({
      address: 'localhost:2079'
    });
    await client.init();
    const fullTitle = 'Artist - Title';

    // Prepare the song tags
    await utils.addSongTags('./test-files/Jack Stauber - Buttercup.mp3', {
      fullTitle,
      APIC: './cover.jpg'
    });

    // Add the song
    await client.addSong('./test-files/Jack Stauber - Buttercup.mp3');

    // Get the song info
    const info = await client.getSong(fullTitle);
    console.log(info);

    // Get the song audio link
    // const audioLink = await client.getSongAudioLink(title);

    // Get the song cover link
    // const coverLink = await client.getSongCoverLink(title);
    
    // Remove the song
    await client.removeSong(title);
  }
  catch(err) {
    console.error(err.stack);
    process.exit(1);
  }
})();
