/* Copyright (c) 2022 Toriti Tech Team https://t.me/ToritiTech */

client.on('connect', function () {
  console.log('connected');
  client.subscribe('RECORD_UPDATE_2', function (err) {
    console.log('Subcribed success');
  });
});

client.on('message', function (topic, message) {
  console.log(message.toString());
  console.log(topic);
  client.end();
});

module.exports = {};
