import { API_KEY } from "../constants";


const fetchVideosFromQuery = (query) => {
  const sanitizedQuery = encodeURI(query);
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${sanitizedQuery}&type=video&videoType=any&key=${API_KEY}`;
  return fetch(url);
};

const fetchRelatedVideosFromId = (videoId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`;
  return fetch(url);
};

const fetchAPI = { fetchVideosFromQuery, fetchRelatedVideosFromId };

export default fetchAPI;
