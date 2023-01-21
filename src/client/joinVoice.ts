import {Client, Events, Guild} from 'discord.js';
import {createPayload} from '../constants/createPayload';
import {opcode} from '../constants/opcode';

export interface joinVoice {
  new (client: Client, guildId: string, channelId: string): joinVoice;
  client: Client;
  guildId: string;
  channelId: string;
  sendOP: (code: number, data: any) => void;
  join: () => void;
  rawPayload: any;
}
export const joinVoice = (function () {
  const joinVoice = function(this: joinVoice, client: Client, guildId: string, channelId: string) {
    // config something
    this.client = client
    this.guildId = guildId
    this.channelId = channelId
    this.rawPayload = Object.create({})
    
  } as any as {new (client: Client, guildId: string, channelId: string): joinVoice}
  
  joinVoice.prototype = {
    /**
     * 
     * @param code 
     * @param data 
     */
    sendOP: function (code: number, data: any) {
      // Define properties op, d to raw
      Object.defineProperties(this.rawPayload, {
        op: {
          value: code,
          enumerable: true,
          configurable: true
        },
        d: {
          value: data,
          enumerable: true,
          configurable: true
        }
      })
      if (this.ws) this.ws.shard.send(this.rawPayload)
      
    },

    /**
     * @void join
     */
    join: function () {
      const guild = this.client.guilds.cache.get(this.guildId)
      if(this.client.guilds.cache.get(this.guildId)) this.ws = guild as Guild
      
      // listen raw event
      this.client.on(Events.Raw, (packet: any) => {
        this.sendOP(opcode.voice(), createPayload.VOICECONNECT(this.guildId, this.channelId))
    
        console.log(packet)
      })
     
    }
  }

  return joinVoice
})()
