import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { Container } from "react-bootstrap";
import Player from "../Player";
import "./UserSongs.scss";

//import "./UserSongs.scss";

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

export default function UserSongs(props) {
  return (
    <div className="user-song-list">
      <div>
        <ul>
          {props.songs.map((song) => {
            return (
              <div className="user-song">
                <li key={song}>
                  <li class="text--regular">{song}</li>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="player">
        <Player token={props.token} uris={props.uris} />
      </div>
    </div>
  );
}
