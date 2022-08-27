import { Router } from "express";
import fs from 'fs';
import path from "path";
import { dirname } from "path";
import { ReactDOMServer } from "react-dom/server";
import React from "react";
import { App } from "../../client/src/App.js";
// import '@babel/register'

const router = Router();

router.use('*', (req, res) => {
    let indexHTML = fs.readFileSync(path.resolve('../client/dist/index.html'), {
        encoding: 'utf8',
    });

    let appendHTML = ReactDOMServer.renderToString(<App />)

    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${ appendHTML }</div>`)

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML)
});

export default router;
