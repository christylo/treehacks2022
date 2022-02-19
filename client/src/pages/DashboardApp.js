// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppMoneyEarned,
  AppCarbonFootprint,
  AppCurrentCoinMining,
  AppNewsUpdate,
  AppPercentageHeated,
  AppOrderTimeline,
  AppCryptoMined,
  AppOverview,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="box with rounded corners">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppPercentageHeated />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppMoneyEarned />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCurrentCoinMining />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCarbonFootprint />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCryptoMined />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
