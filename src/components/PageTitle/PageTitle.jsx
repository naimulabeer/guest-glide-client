import PropTypes from "prop-types";
import { HelmetProvider, Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} - Guest Glide</title>
      </Helmet>
    </HelmetProvider>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
