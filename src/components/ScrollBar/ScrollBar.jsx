/* eslint-disable react/prop-types */

import Scrollbars from "rc-scrollbars";

const ScrollableContainer = ({ children, width, height }) => {
  return <Scrollbars style={{ width, height }}>{children}</Scrollbars>;
};

export default ScrollableContainer;
