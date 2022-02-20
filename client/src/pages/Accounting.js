import { Container, Typography } from '@mui/material';
import Page from '../components/Page';

export default function Accounting() {
  return (
    <Page title="box with rounded corners">
      <Container>
        <Typography>
          <h2>Features we would like to implement for this accounting overview tab:</h2>
          <ul>
            <li>
              shows more detailed breakdown on earnings for each box (which type of coin was mined,
              when it was mined, how much the earnings were)
            </li>
            <li>
              show how much power was stored for each box during peak green energy hours (our
              backend algorithm helps to determine which times of day have execcessive renewable
              energy being generated to mine more crypto during those hours)
            </li>
            <li>
              contrast using crypto mining to heat the space vs using fossil fuel to heat the space
              with pricing and C02 emitted
            </li>
          </ul>
        </Typography>
      </Container>
    </Page>
  );
}
