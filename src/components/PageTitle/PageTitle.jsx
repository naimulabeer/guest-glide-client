import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} - Guest Glide</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
