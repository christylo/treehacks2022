import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import renewableEnergy from '../../../assets/renewableEnergy.svg';
import renewableOutput from '../../../assets/renewableOutput.svg';
import fossilFuel from '../../../assets/fossilFuel.svg';
import fossilFuelOutput from '../../../assets/fossilFuelOutput.svg';
// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'USD per kWh',
    value: 0.07,
    icon: <img src={renewableEnergy} alt="footprint" />
  },
  {
    name: 'kg CO2 emitted',
    value: 8.4,
    icon: <img src={renewableOutput} alt="footprint" />
  },
  {
    name: 'USD per kWh',
    value: 0.09,
    icon: <img src={fossilFuel} alt="footprint" />
  },
  {
    name: 'kg CO2 emitted',
    value: 9.43,
    icon: <img src={fossilFuelOutput} alt="footprint" />
  }
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        {name === 'USD per kWh' ? (
          <Typography variant="h6">${fShortenNumber(value)}</Typography>
        ) : (
          <Typography variant="h6">{fShortenNumber(value)}</Typography>
        )}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function CompareEnergySources() {
  return (
    <Card>
      <CardHeader title="Compare Energy Sources" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
