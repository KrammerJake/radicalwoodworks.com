import React from 'react';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faInstagram, faEtsy } from '@fortawesome/free-brands-svg-icons';

// Styles
import styles from 'client/components/social-icons/social-icons.scss';
import useStyles from 'isomorphic-style-loader/useStyles';

// Constants
import URL from 'client/constants/url-constants';

const SocialIcons = () => {
  useStyles(styles);
  return (
    <div className={styles.SocialIconsContainer}>
      <a
        className={styles.SocialLink}
        target="_blank"
        rel="noopener noreferrer"
        href={URL.externalUrls.facebook}
      >
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faFacebook}
        />
      </a>
      <a
        className={styles.SocialLink}
        target="_blank"
        rel="noopener noreferrer"
        href={URL.externalUrls.twitter}
      >
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faTwitter}
        />
      </a>
      <a
        className={styles.SocialLink}
        target="_blank"
        rel="noopener noreferrer"
        href={URL.externalUrls.pinterest}
      >
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faPinterest}
        />
      </a>
      <a
        className={styles.SocialLink}
        target="_blank"
        rel="noopener noreferrer"
        href={URL.externalUrls.instagram}
      >
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faInstagram}
        />
      </a>
      <a
        className={styles.SocialLink}
        target="_blank"
        rel="noopener noreferrer"
        href={URL.externalUrls.etsy}
      >
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faEtsy}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
