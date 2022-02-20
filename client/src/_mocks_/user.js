import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgName } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgName(index + 1),
  name: faker.name.findName(),
  company: sample(['1800', '1110', '1120', '133', '1154', '1520', '1223']),
  isVerified: sample(['22', '23', '24', '25', '26', '27', '28']),
  status: sample(['active', 'inactive']),
  role: sample(['8.13', '7.91', '8.66', '8.32', '8.59', '8.02', '8.43'])
}));

export default users;
