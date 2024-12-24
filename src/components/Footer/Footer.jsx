import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import React from 'react';
import Wave from '../../img/wave.png';
import urls from '../constant/url';
import './Footer.css';

const Footer = () => {
  const handleGitHubClick = () => {
    window.open(urls.UrlGithub, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open(urls.UrlFacebook, '_blank', 'noopener,noreferrer');
  };

  const handleFacebookClick = () => {
    window.open(urls.UrlFacebook, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>phamchien152003@gmail.com</span>
        <div className="f-icons">
          <Insta
            color="white"
            size={'3rem'}
            onClick={handleInstagramClick}
            style={{ cursor: 'pointer' }}
          />
          <Facebook
            color="white"
            size={'3rem'}
            onClick={handleFacebookClick}
            style={{ cursor: 'pointer' }}
          />
          <Gitub
            color="white"
            size={'3rem'}
            onClick={handleGitHubClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
