const Client = require('museria').Client;
const utils = require('museria/src/utils');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.listen(3000);

const client = new Client({address: 'localhost:2079'});
client.init().then(() => console.log('client init'));

// Добавление тега трека
app.get('/song/add-tag', async (req, res, next) => {
  console.log(req)
  const song = await utils.addSongTags('./test-files/Jack Stauber - Buttercup.mp3', {
    fullTitle: 'Artist - Title',
    APIC: './cover.jpg'
  });
  res.send(song);
})

// Добавление трека
app.get('/song/add', async (req) => {
  const url = '';
  const addedSong = await client.addSong(url);
  res.send(addSong);
})

// Получение трека
app.get('/song/get-song', async (req, res) => {
  const infoSong = await client.getSong('Artist - Title');
  res.send(infoSong);
})

// Удаление трека
app.get('./song/remove', async () => {
  await client.removeSong('title')
})
