// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import box from '../../../assets/box.svg';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const NUMBOXES = 3;

export default function AppBoxesInUse() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <img src={box} alt="box" />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(NUMBOXES)} Boxes</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        In Use
      </Typography>
    </RootStyle>
  );
}
