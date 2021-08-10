import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { Container } from "react-bootstrap";
import "./Player.scss";

// export interface Props {
//   autoPlay?: boolean;
//   callback?: (state: CallbackState) => any;
//   initialVolume?: number;
//   magnifySliderOnHover?: boolean;
//   name?: string;
//   offset?: number;
//   persistDeviceSelection?: boolean;
//   play?: boolean;
//   showSaveIcon?: boolean;
//   styles?: StylesProps;
//   syncExternalDevice?: boolean;
//   syncExternalDeviceInterval?: number;
//   token: string;
//   updateSavedStatus?: (fn: (status: boolean) => any) => any;
//   uris?: string | string[];
// }

// export interface State {
//   currentDeviceId: string;
//   deviceId: string;
//   devices: SpotifyDevice[];
//   error: string;
//   errorType: string;
//   isActive: boolean;
//   isInitializing: boolean;
//   isMagnified: boolean;
//   isPlaying: boolean;
//   isSaved: boolean;
//   isUnsupported: boolean;
//   needsUpdate: boolean;
//   nextTracks: WebPlaybackTrack[];
//   playerPosition: 'bottom' | 'top';
//   position: number;
//   previousTracks: WebPlaybackTrack[];
//   progressMs: number;
//   status: string;
//   track: SpotifyPlayerTrack;
//   volume: number;
// }

// export interface PlayOptions {
//   context_uri?: string;
//   uris?: string[];
// }

// export interface StylesOptions {
//   activeColor: string;
//   altColor: string;
//   bgColor: string;
//   color: string;
//   errorColor: string;
//   height: number | string;
//   loaderColor: string;
//   loaderSize: number | string;
//   sliderColor: string;
//   sliderHandleBorderRadius: number | string;
//   sliderHandleColor: string;
//   sliderHeight: number;
//   sliderTrackBorderRadius: number | string;
//   sliderTrackColor: string;
//   trackArtistColor: string;
//   trackNameColor: string;
// }

export default function Player(props) {
  return (
      <SpotifyPlayer
        styles={{
          activeColor: "#1cb954",
          altColor: "#ccc",
          bgColor: "#161B22",
          color: "#ffff00",
          errorColor: "#a60000",
          height: 48,
          loaderColor: "#ccc",
          loaderSize: 32,
          sliderColor: "#0cffe1",
          sliderHandleBorderRadius: "50%",
          sliderHandleColor: "#0cffe1",
          sliderHeight: 4,
          sliderTrackBorderRadius: 0,
          sliderTrackColor: "#0cffe1",
          trackArtistColor: "#0cffe1",
          trackNameColor: "#fff",
          playerPosition: "bottom",
        }}
        token={props.token}
        uris={props.uris}
      />
  );
}

// activeColor: "blue",
//           altColor: "green",
//           bgColor: "black",
//           color: "blue",
//           sliderColor: "green",
//           sliderTrackColor: "grey",
//           trackArtistColor: "green",
//           trackNameColor: "grey",
