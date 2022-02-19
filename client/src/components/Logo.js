import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <img src={logo} alt="dollar sign" width="200" height="80" />;
}
