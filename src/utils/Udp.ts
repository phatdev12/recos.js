import {createSocket} from 'dgram';

export interface UdpServer {
  new (): UdpServer;

}

export const UdpServer = (function () {
  const UdpServer = function() {
   console.log() 
  } as any as {new(): UdpServer}

  return UdpServer
})()