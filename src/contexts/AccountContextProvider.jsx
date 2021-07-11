import React, { useState } from 'react';

const AccountContext = React.createContext({
  account: null,
  favoriteVideos: [],
  addFaveVideo: () => {},
  accountChange: () => {},
});

const AccountContextProvider = (props) => {
  const [account, setAccount] = useState(AccountContext.account);
  const [favoriteVideos, setFavoriteVideos] = useState(AccountContext.favoriteVideos);

  const addFaveVideo = (add) => {
    // add looks like this:
    // {
    //   id: videoId,
    //   title: videoTitle,
    //   description: videoDescription,
    //   etag,
    // }

    const append = {
      // making it look more like the youtube search result item for more familiar reading
      etag: add.etag,
      id: {
        videoId: add.videoId,
      },
      snippet: {
        title: add.title,
        description: add.description,
        thumbnails: {
          default: {
            url: `https://i.ytimg.com/vi/${add.videoId}/default.jpg`,
          },
          medium: {
            url: `https://i.ytimg.com/vi/${add.videoId}/mqdefault.jpg`,
          },
        },
      },
    };

    setFavoriteVideos((oldArray) => [...oldArray, append]);
  };

  const accountChange = (acc) => {
    setAccount(acc);
  };

  return (
    <AccountContext.Provider
      value={{ account, favoriteVideos, accountChange, addFaveVideo }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountContext };

export default AccountContextProvider;
