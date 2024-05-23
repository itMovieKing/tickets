type SeatInfo = {
  seatNumber: string;
  type: string;
};
export type Ticket = {
  departureStation: string;
  arrivalStation: string;
  trainNumber: string;
  departureTime: string;
  arrivalTime: string;
  seatInfo: SeatInfo;
  passenger: string;
  price?: number,
};

export const ticketList: Ticket[] = [
  // [2023-03-11,2023-03-12]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G38',
    departureTime: '2023-03-10 18:00:00',
    arrivalTime: '2023-03-10 22:30:00',
    seatInfo: {
      seatNumber: '12车03D号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G187',
    departureTime: '2023-03-12 13:38:00',
    arrivalTime: '2023-03-12 19:30:00',
    seatInfo: {
      seatNumber: '12车15C号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 623,
  },
  // [2023-04-08,2023-04-09] 
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G32',
    departureTime: '2023-04-08 07:48:00',
    arrivalTime: '2023-04-08 12:20:00',
    seatInfo: {
      // 瞎写的
      seatNumber: '13车14A号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 650.5,
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G39',
    departureTime: '2023-04-09 19:04:00',
    arrivalTime: '2023-04-09 23:22:00',
    seatInfo: {
      // 瞎写的
      seatNumber: '13车14A号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 621.5,
  },
  // [2023-04-27,2023-05-02]
  {
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: '首都航空JD5351',
    departureTime: '2023-04-27 23:20:00',
    arrivalTime: '2023-04-28 01:35:00',
    seatInfo: {
      seatNumber: '10A',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 957,
  },
  {
    departureStation: '南京南站',
    arrivalStation: '北京南站',
    trainNumber: 'G114',
    departureTime: '2023-05-02 13:10:00',
    arrivalTime: '2023-05-02 16:38:00',
    seatInfo: {
      // 瞎写的
      seatNumber: '13车14A号',
      type: '二等座',
    },
    passenger: '🐰',
    price: 533,
  },
  {
    departureStation: '南京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G179',
    departureTime: '2023-05-02 13:02:00',
    arrivalTime: '2023-05-02 14:13:00',
    seatInfo: {
      // 瞎写的
      seatNumber: '13车14A号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 130,
  },
  // [2023-06-02,2023-06-04]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G40',
    departureTime: '2023-06-02 18:58:00',
    arrivalTime: '2023-06-02 23:23:00',
    seatInfo: {
      seatNumber: '06车18F号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G193',
    departureTime: '2023-06-04 16:07:00',
    arrivalTime: '2023-06-04 22:04:00',
    seatInfo: {
      seatNumber: '05车06A号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  // [2023-07-07,2023-07-09]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G38',
    departureTime: '2023-07-07 18:00:00',
    arrivalTime: '2023-06-02 22:30:00',
    seatInfo: {
      seatNumber: '04车18F号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: '首都航空JD5351',
    departureTime: '2023-07-09 22:30:00',
    arrivalTime: '2023-07-10 00:45:00',
    seatInfo: {
      seatNumber: '25A',
      type: '经济舱',
    },
    passenger: '🥕',
  },
  // [2023-08-12,2023-08-13] -杭州
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G187',
    departureTime: '2023-08-11 13:38:00',
    arrivalTime: '2023-08-11 19:42:00',
    seatInfo: {
      seatNumber: '12车14号',
      type: '二等座',
    },
    passenger: '🐰',
  },
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G34',
    departureTime: '2023-08-13 13:00:00',
    arrivalTime: '2023-08-13 17:40:00',
    seatInfo: {
      seatNumber: '13车08号',
      type: '二等座',
    },
    passenger: '🐰',
  },
  // [2023-09-01,2023-09-03]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G40',
    departureTime: '2023-09-01 18:58:00',
    arrivalTime: '2023-09-01 23:23:00',
    seatInfo: {
      seatNumber: '05车03F号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G189',
    departureTime: '2023-09-03 15:12:00',
    arrivalTime: '2023-09-03 21:01:00',
    seatInfo: {
      seatNumber: '13车01F号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  // [2023-10-03,2023-10-07]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G36',
    departureTime: '2023-10-03 16:54:00',
    arrivalTime: '2023-10-03 21:28:00',
    seatInfo: {
      seatNumber: '16车10F号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G189',
    departureTime: '2023-10-07 15:12:00',
    arrivalTime: '2023-10-07 21:01:00',
    seatInfo: {
      seatNumber: '14车01D号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  // [2023-11-04,2023-11-05] -南京
  {
    departureStation: '杭州东站',
    arrivalStation: '南京南站',
    trainNumber: 'G172',
    departureTime: '2023-11-04 06:50:00',
    arrivalTime: '2023-11-04 08:19:00',
    seatInfo: {
      seatNumber: '06车16A号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '南京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G2667',
    departureTime: '2023-11-05 19:20:00',
    arrivalTime: '2023-11-05 20:38:00',
    seatInfo: {
      seatNumber: '06车16A号',
      type: '二等座',
    },
    passenger: '🥕',
  },
  {
    departureStation: '北京站',
    arrivalStation: '南京站',
    trainNumber: 'D705',
    departureTime: '2023-11-03 13:00:00',
    arrivalTime: '2023-11-04 08:19:00',
    seatInfo: {
      seatNumber: '05车183号',
      type: '卧铺',
    },
    passenger: '🐰',
  },
  {
    departureStation: '南京南站',
    arrivalStation: '北京南站',
    trainNumber: 'G26',
    departureTime: '2023-11-05 19:08:00',
    arrivalTime: '2023-11-05 22:35:00',
    seatInfo: {
      seatNumber: '08车04A号',
      type: '二等座',
    },
    passenger: '🐰',
  },
  // [2023-11-24,2023-11-26]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G34',
    departureTime: '2023-11-24 13:00:00',
    arrivalTime: '2023-11-24 17:40:00',
    seatInfo: {
      seatNumber: '14车06F号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G39',
    departureTime: '2023-11-26 19:04:00',
    arrivalTime: '2023-11-26 23:22:00',
    seatInfo: {
      seatNumber: '06车15F号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  // [2023-12-29,2024-01-01]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G34',
    departureTime: '2023-12-29 13:00:00',
    arrivalTime: '2023-12-29 17:40:00',
    seatInfo: {
      seatNumber: '08车01A号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G193',
    departureTime: '2024-01-01 16:07:00',
    arrivalTime: '2024-01-01 22:04:00',
    seatInfo: {
      seatNumber: '12车15A号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 594,
  },
  // [2024-01-19,2024-01-21]
  {
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G34',
    departureTime: '2024-01-19 13:00:00',
    arrivalTime: '2024-01-19 17:40:00',
    seatInfo: {
      seatNumber: '09车05F号',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  {
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: '东方航空MU5458',
    departureTime: '2024-01-21 18:30:00',
    arrivalTime: '2024-01-21 20:35:00',
    seatInfo: {
      seatNumber: '58A',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 720,
  },
  // [2024-02-24,2024-02-25]
  {
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G185',
    departureTime: '2024-02-23 13:20:00',
    arrivalTime: '2024-02-23 19:16:00',
    seatInfo: {
      seatNumber: '07车13号',
      type: '二等座',
    },
    passenger: '🐰',
    price: 645,
  },
  {
    departureStation: '杭州站',
    arrivalStation: '北京站',
    trainNumber: 'D12',
    departureTime: '2024-02-25 19:48:00',
    arrivalTime: '2024-02-26 09:38:00',
    seatInfo: {
      seatNumber: '02车151号',
      type: '卧铺',
    },
    passenger: '🐰',
    price: 617,
  },
  // [2024-03-16,2024-03-17]
  {
    departureStation: '杭州萧山',
    arrivalStation: '北京大兴',
    trainNumber: '海南航空HU7678',
    departureTime: '2024-03-15 21:15:00',
    arrivalTime: '2024-03-15 23:55:00',
    seatInfo: {
      seatNumber: '54K',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 790,
  },
  {
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: '东方航空MU5139',
    departureTime: '2024-03-17 19:00:00',
    arrivalTime: '2024-03-17 21:05:00',
    seatInfo: {
      seatNumber: '51J',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 622,
  },
  // [2024-04-13,2024-04-15]  -武汉
  {
    departureStation: '杭州站',
    arrivalStation: '武昌站',
    trainNumber: 'Z47',
    departureTime: '2024-04-12 22:22:00',
    arrivalTime: '2024-04-13 06:37:00',
    seatInfo: {
      seatNumber: '09车122号',
      type: '卧铺',
    },
    passenger: '🥕',
    price: 194,
  },
  {
    departureStation: '武昌站',
    arrivalStation: '杭州站',
    trainNumber: 'Z45',
    departureTime: '2024-04-15 21:51:00',
    arrivalTime: '2024-04-16 06:02:00',
    seatInfo: {
      seatNumber: '08车011号',
      type: '卧铺',
    },
    passenger: '🥕',
    price: 208,
  },
  {
    departureStation: '北京西站',
    arrivalStation: '汉口站',
    trainNumber: 'D37',
    departureTime: '2024-04-12 20:36:00',
    arrivalTime: '2024-04-13 07:06:00',
    seatInfo: {
      seatNumber: '14车062号',
      type: '卧铺',
    },
    passenger: '🐰',
    price: 327,
  },
  {
    departureStation: '武昌站',
    arrivalStation: '北京西站',
    trainNumber: 'D2',
    departureTime: '2024-04-15 21:23:00',
    arrivalTime: '2024-04-16 08:16:00',
    seatInfo: {
      seatNumber: '15车072号',
      type: '卧铺',
    },
    passenger: '🐰',
    price: 329,
  },
  // [2024-04-13,2024-04-15]  -夯筑
  {
    departureStation: '北京首都',
    arrivalStation: '杭州萧山',
    trainNumber: '国航CA1732',
    departureTime: '2024-05-24 21:30:00',
    arrivalTime: '2024-05-25 00:05:00',
    seatInfo: {
      seatNumber: '30A',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 420,
  },
]