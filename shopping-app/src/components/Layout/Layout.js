import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
