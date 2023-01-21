export class createPayload {
  public static CONTINUE = (token: string, properties: any, intents: number) => ({token, properties, intents})
  public static VOICECONNECT = (guildID: string, channelID: string) => ({
    guild_id: guildID,
    channel_id: channelID,
    self_mute: false,
    self_deaf: false,
  })

}