import { useEffect, useState } from 'react';
import { API_KEY } from '../constants';

function useFetch(q, isSearchQuery) {
  const [errors, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState(null);
  const [fav, setFav] = useState(false);

  const url = () => {
    if (isSearchQuery) {
      const sanitizedQuery = encodeURI(q);
      return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${sanitizedQuery}&type=video&videoType=any&key=${API_KEY}`;
    }
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${q}&type=video&key=${API_KEY}`;
  };

  useEffect(() => {
    if (q) {
      fetch(url())
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            setError(true);
            setIsLoaded(true);
          } else {
            setResults(result);
            setIsLoaded(true);
          }
        });
    } else {
      setFav(true);
      setIsLoaded(true);
    }
  }, [q]);

  return [errors, isLoaded, results, fav];
}

export default useFetch;
