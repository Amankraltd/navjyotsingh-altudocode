import { Meta } from '@storybook/react';

import SessionInformationPageHero from '../../components/Sessions/SessionInformationPageHero';

export default {
  title: 'Components/Sessions/SessionInformationPageHero',
  component: SessionInformationPageHero,
} as Meta<typeof SessionInformationPageHero>;

const rooms = [
  {
    fields: {
      Name: {
        value: 'Room 1',
      },
    },
  },
  {
    fields: {
      Name: {
        value: 'Room 2',
      },
    },
  },
];

const timeslots = [
  {
    name: {
      value: '8 am',
    },
  },
  {
    name: {
      value: '9 am',
    },
  },
];

const days = [
  {
    name: {
      value: 'Day 1',
    },

    fields: {
      Name: {
        value: 'Day 1',
      },
    },
  },
  {
    name: {
      value: 'Day 2',
    },

    fields: {
      Name: {
        value: 'Day 2',
      },
    },
  },
];

const fields = {
  Name: { value: '7 Mindset STRATEGIES to raise your game' },
  Image: {
    value: {
      src: '/assets/img/shop/man-biker.jpg',
    },
  },
  Rooms: rooms,
  Day: days,
  Timeslots: timeslots,
};

export const Premium = {
  args: {
    fields: {
      ...fields,
      Premium: {
        value: true,
      },
    },
  },
};

export const Regular = {
  args: {
    fields: {
      ...fields,
      Premium: {
        value: false,
      },
    },
  },
};
