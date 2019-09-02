import React from 'react';

// Components
import { renderRoutes } from 'react-router-config';
import NavbarV2 from './components/nav/navbar-v2';
import Footer from './components/footer/footer';

// Styles
import styles from './styles/app.scss'; // Global app css
import fontAwesomeStyles from 'node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import bootstrapStyles from 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import useStyles from 'isomorphic-style-loader/useStyles';

const App = ({ location, route }) => {
  useStyles(styles, bootstrapStyles, fontAwesomeStyles);
  return (
    <div className="app-container">
      <NavbarV2 location={location} />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

export default {
  component: App,
};

/**
 * TODO:
 * 1. Build new image carousel to replace antd.
 * 3. Add auth support back to the nav bar. Maybe put auth into a HOC (see server-rendering project)
 *  3. Show/Hide the login/logout/admin buttons based on logged in/out status.
 * 6. Remove the old navbar file.
 * 11. Handle loading/completed/error states for all pages that need them.
 * 13. Make the new contact page mobile frieldny.
 * 14. Server render font awesome icons: https://fontawesome.com/how-to-use/on-the-web/other-topics/server-side-rendering
 *    2. Build new icon class class to replace antd.
 * 15. Delete the old contact form file.
 * 16. Push this code up to a new url on my box and see if it can even run as a server?
 *
 */
