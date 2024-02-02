'use client'
import React from 'react';
import ReactPlayer from 'react-player';

const AudioPlayer = () => {
  const audioUrl = 'http://mediaserv30.live-streams.nl:8086/live';

  return (
    <div>
      <h1>Audio Streaming Website</h1>
      <ReactPlayer url={audioUrl} controls playing />
    </div>
  );
};

export default AudioPlayer;
