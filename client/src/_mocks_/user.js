import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgName } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgName(index + 1),
  name: faker.name.findName(),
  company: sample(['110', '111', '112', '113', '114', '120', '122']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'inactive']),
  role: sample(['8.13', '7.91', '8.66', '8.32', '8.59', '8.02', '8.43'])
}));

export default users;
