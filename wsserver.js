// require('dotenv').config();
const WebSocket = require('ws');
const fs = require('fs');
const port = process.env.WSPORT || 3010;


const INIT_COURTS = "INIT_COURTS";
const ADD_COURT = "ADD_COURT";
const UPDATE_COURT = "UPDATE_COURT";
const TEST_CONNECTIONS = "TEST_CONNECTIONS";

// const {SurvivorDraft} = require("./SurvivorDraft.js")
class ScoreboardServer{
    constructor()
    {
      this._WSS = new WebSocket.Server({
          port: port,
          clientTracking: true,
      });
      this.__CLIENTS = new Map();
      this.__COURTS = {
        Court1: {
          TeamA:{
            Name: "test",
            Points: 0
          },
          TeamB:{
            Name: "test",
            Points: 0
          }
        }
      };

      this._WSS.on('connection', ( ws, req ) => {
        let token = req.url.split('/').pop();
        var storageToken =  this.parseNewToken(token);
        this.__CLIENTS.set(storageToken, ws);

        ws.send(JSON.stringify({
            command: INIT_COURTS,
            params: this.__COURTS
        }));

        ws.on('message', (message) => { // process incoming messages from the websocket.
            this.processMessage(message, token, ws);
        });

        ws.on("close", (code, reason) => {
            this.__CLIENTS.delete(token)
        })
      });
    }

    parseNewToken(token)
    {
        var firstBracket = token.indexOf("[");
        var lastBracket = token.indexOf("]");
        if (this.__CLIENTS.has(token)){
            if (firstBracket == -1){
                return this.parseNewToken(`${token}[1]`)
            } else {
                var number = Number.parseInt(token.slice(firstBracket+1,lastBracket));
                return this.parseNewToken(`${token.slice(0,-(token.length - firstBracket))}[${number+1}]`)
            }
        } else {
            return token;
        }
    }

    processMessage(message, token, ws)
    {
        var m = JSON.parse(message);
        switch(m.command){
            case ADD_COURT:
                this.__CHATHISTORY.push(m.params);
                this.broadcastMessage(message);
            break;

            case UPDATE_COURT:
                if (this.__DRAFT != null){
                    this.__DRAFT.selectPlayer(m.params.TeamId,m.params.Player)
                }
            break;



            case TEST_CONNECTIONS:
                this.broadcastMessage(message);
            break;
        }
    }

    broadcastMessage(message, socket = false)
    {
        if (typeof(message) === 'object'){
            message = JSON.stringify(message)
        }

        this.__CLIENTS.forEach( (item) => {
            if (item.readyState === WebSocket.OPEN /* && item !== socket */){
                item.send(message)
            }
        });
    }
}

var WsServer = new ScoreboardServer();
