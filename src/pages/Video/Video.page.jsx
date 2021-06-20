import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import mockRelatedVideos from '../../mock/youtube-mock-related-videos.json'

function Video() {
  const location = useLocation();
  const { videoId, videoTitle, videoDescription } = location.state;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;



  return (
    <section className="video">
      <div>
        <VideoEmbed url={buildURL} />
      </div>
      <h1>{videoTitle}</h1>
      <p>{videoDescription}</p>
      <RelatedVideos videos={mockRelatedVideos.items} />
    </section>
  );
}

export default Video;
