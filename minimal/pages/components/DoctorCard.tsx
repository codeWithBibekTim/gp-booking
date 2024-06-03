'use client';

import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { Doctor } from '@prisma/client';

interface Props extends React.HTMLAttributes<HTMLElement> {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: Props) => (
  <Card>
    <CardContent>
      <Typography variant='h5'>{doctor.name}</Typography>
      <Typography>{doctor.location}</Typography>
    </CardContent>
    <CardActions>
      <Button size='small' color='primary'>
        Book Appointment
      </Button>
    </CardActions>
  </Card>
);

export default DoctorCard;
