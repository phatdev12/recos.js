import {Client, Events} from 'discord.js';
import {EventEmitter} from 'events';
import {joinVoice} from '.';


export class VoiceClient extends EventEmitter {
  private client: Client;

  private guildId!: string;
  private channelId!: string;
  /**
   * 
   * @param client 
   */
  public constructor(client: Client) {
    super();
    this.client = client;
    if(!this.client) new Error('Missing client from discord.js');
    // Send ready event to continue
    if(this.client.isReady()) this.emit('ready')
  }

  /**
   * 
   * @param guildID 
   * @param channelID 
   * @returns 
   */
  public create(guildId: string, channelId: string) {
    if(!guildId || !channelId) new Error('Missing client guildId or channelId');
    this.guildId = guildId
    this.channelId = channelId
    
    // return a connection as a constructor
    // user can use this method many many time
    return new (joinVoice as joinVoice)(this.client, this.guildId, this.channelId)

  }
}