const Client = require('museria').Client;
const utils = require('museria/src/utils');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(3000);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = new Client({address: 'localhost:2079'});
client.init().then(() => console.log('client init'));

// Добавление трека (c тегом)
app.post('/song/add', async (req, res) => {
  console.log(req.body);
  const url = './test-files/Jack Stauber - Buttercup.mp3';
  await utils.addSongTags(url, {
    fullTitle: 'Artist - Title',
    APIC: './est-files/cover.png'
  });
  const addedSong = await client.addSong(url);
  res.sendStatus(200)
})

// Получение трека
app.post('/song/get', async (req, res) => {
  const infoSong = await client.getSong(req.body.name);
  res.send(infoSong);
})

// Удаление трека
app.delete('./song/remove', async () => {
  await client.removeSong('title')
})
