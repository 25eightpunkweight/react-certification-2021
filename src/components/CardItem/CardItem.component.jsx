import React from 'react';

// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';

function Header(item) {
  const text = 'Demo App! Welcome!';

  return (
    <div className="card-item">
      <div className="card-title">
        <h4>{item.snippet.title}</h4>
      </div>
      <div className="img__wrap">
        <img className="center" src={item.snippet.thumbnails.medium.url} />
        <p className="img__description">{item.snippet.description}</p>
      </div>
    </div>
  );
}

export default Header;
