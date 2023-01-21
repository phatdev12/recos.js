<div align="center">
  <h1>Recos.js</h1>
  <p>A <code>discord.js</code> voice module.
</div>

> NOTE 
> This is the testing phase. If you want to experiment, clone this repo and run it in the example

## Example

```ts
import {VoiceClient} from '../src';
import {Client, IntentsBitField} from 'discord.js';

// Create bot client
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildVoiceStates]
});

// Create voice client
const voice = new VoiceClient(client);

// Listen ready event from voice client to create connection
voice.on('ready', () => {
  // Create a connection
  // Must be created
  const connection = voice.create('guildId', 'channelId');
  // Join voice channel
  connection.join();
});

// Login to Discord application
client.login('TOKEN');
```

### I am very grateful to those who have helped me develop this library, please contribute if you can.