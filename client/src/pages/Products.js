import { Container, Typography } from '@mui/material';
import Page from '../components/Page';

export default function Products() {
  return (
    <Page title="box with rounded corners">
      <Container>
        <Typography>
          <h2>Features we would like to implement for this temperature overview tab:</h2>
          <ul>
            <li>
              slider component to control heating/mining for selected boxes - feature is already
              implemented for smart thermostat interface but didn't have enough time to implement on
              this web app
            </li>
            <li>
              show predictions on how external weather may impact the temperature in the room to
              better determine efficient temperature for heating the space - model already trained
              on Maje; just didn't have enough time to build React component for visualizing on web
              app
            </li>
            <li>
              show predictions on how capacity within the room may impact the temperature in the
              room to determine efficient temperature for heating the space - was planning on using
              occupancy detector sensors but they did not arrive on time from Digikey so did not
              train model on any data
            </li>
            <li>
              show predictions on how different hours of the day may impact the temperature in the
              room to determine efficient temperature for heating the space - future implementation
              when businesses already have data on peak hours of usage so we can better train data
              custom to their needs
            </li>
          </ul>
        </Typography>
      </Container>
    </Page>
  );
}
