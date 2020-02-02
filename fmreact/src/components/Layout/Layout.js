import React, { Fragment } from "react";

const layout = (props) => (
  <Fragment>
    <div>Toolbar, Sidedrawer, Backdrop, Navitems</div>
    <div>{props.children}</div>
    <div>Footer</div>
  </Fragment>
);

export default layout;
