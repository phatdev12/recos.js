import {VoiceClient} from '../src'
import {Client, IntentsBitField} from 'discord.js'

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildVoiceStates]
})
const voice = new VoiceClient(client)

voice.on('ready', () => {
  const connection = voice.create('guildId', 'channelId')
  connection.join()
})

client.login('TOKEN')


