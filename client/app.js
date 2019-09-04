import React from 'react';

// Components
import { renderRoutes } from 'react-router-config';
import Navbar from './components/nav/navbar';
import Footer from './components/footer/footer';

// Styles
import styles from './styles/app.scss'; // Global app css
import fontAwesomeStyles from 'node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import bootstrapStyles from 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import useStyles from 'isomorphic-style-loader/useStyles';

// Actions
import { logout, verifyLogin } from 'client/actions/auth-actions';

const App = ({ location, route }) => {
  useStyles(styles, bootstrapStyles, fontAwesomeStyles);
  return (
    <div className="app-container">
      <Navbar location={location} />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

export default {
  component: App,
  loadData: (store) => store.dispatch(verifyLogin()),
};

/**
 * TODO:
 * 1. Build new image carousel to replace antd.
 * 2. Make admin page server render. Update to use the new buttons.
 * 3. Make the product page server render.
 * 4. Remove the nav-link.js file in favor of using the Link component from react-router-dom.
 * 6. Remove the old navbar file.
 * 11. Handle loading/completed/error states for all pages that need them.
 * 13. Make the new contact page mobile frieldny.
 * 16. Push this code up to a new url on my box and see if it can even run as a server?
 * 17. Make the enter button work for forms.
 * 18. Create new table component to replace material ui
 * 19. Handle error notifications on login failure
 * 20. Handle navigating to "protected" page when logged in/out
 */
