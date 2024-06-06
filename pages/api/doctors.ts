import { NextApiRequest, NextApiResponse } from 'next';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Dentist',
    image: '/images/john-doe.jpg'
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Cardiologist',
    image: '/images/jane-smith.jpg'
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Dentist',
    image: '/images/emily-johnson.jpg'
  }
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(doctors);
};
