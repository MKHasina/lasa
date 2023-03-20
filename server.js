const express = require('express');
const server = new express();
const port = process.env.PORT || 3007;

server.get('/', (req, res) => {

    res.send('mety ko');
})


server.listen(port, () => console.log(`mety ${port}`));