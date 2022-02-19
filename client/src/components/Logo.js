import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import logo from '../assets/logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  // return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
  return <img src={logo} alt="dollar sign" width="200" height="80" />;
}
