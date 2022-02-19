// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppMoneyEarned,
  AppBoxesInUse,
  AppCurrentCoinMining,
  AppNewsUpdate,
  AppPercentageHeated,
  AppOrderTimeline,
  AppCryptoMined,
  AppMiningEarnings,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
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
            <AppBoxesInUse />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppMiningEarnings />
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
