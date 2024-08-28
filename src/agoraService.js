import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "2f397bca9e4f453e9d40c47b67f5ebf2"; // Replace with your Agora App ID

class AgoraService {
  constructor() {
    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    this.localTracks = {
      videoTrack: null,
      audioTrack: null,
    };
  }

  async join(channel, token, uid) {
    await this.client.join(APP_ID, channel, token, uid);

    this.localTracks.videoTrack = await AgoraRTC.createCameraVideoTrack();
    this.localTracks.audioTrack = await AgoraRTC.createMicrophoneAudioTrack();

    await this.client.publish(Object.values(this.localTracks));
  }

  leave() {
    for (let trackName in this.localTracks) {
      let track = this.localTracks[trackName];
      if (track) {
        track.stop();
        track.close();
        this.localTracks[trackName] = null;
      }
    }

    this.client.leave();
  }
}

export default new AgoraService();
