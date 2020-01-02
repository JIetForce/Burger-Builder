import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';

const layout = props => (
  <Aux>
    <div>ToolBar, sideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;