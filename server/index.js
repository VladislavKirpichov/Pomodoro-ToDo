import express from 'express';
import fs from 'fs';
import path from 'path';

require('@babel/register')({
    configFile: path.resolve( __dirname, './babel.config.js' ),
})

import router from './routes/index.js';

// require('@babel/register')

const app = express();
const PORT = process.env.PORT || 9000;

app.get(/\.(css|js|map|ico)$/, express.static(__dirname, '../client/dist'))

app.use('/', router);

app.listen(PORT);
