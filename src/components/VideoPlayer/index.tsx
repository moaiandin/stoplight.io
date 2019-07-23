import * as React from 'react';
import Player from 'react-player';

export interface IVideoPlayer {
  href: string;
  playing?: boolean;
  controls?: boolean;
}

export const VideoPlayer: React.FunctionComponent<IVideoPlayer> = ({ href, playing, controls = true }) => {
  return (
    <div className="player-wrapper">
      <Player className="react-player" url={href} playing={playing} controls={controls} width="100%" height="100%" />
    </div>
  );
};
