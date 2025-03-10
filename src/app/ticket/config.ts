type SeatInfo = {
  seatNumber: string;
  type: string;
};
enum TicketType {
  Train,
  Airplane,
}
export type Ticket = {
  type: TicketType,
  departureStation: string;
  arrivalStation: string;
  trainNumber: string;
  departureTime: string;
  arrivalTime: string;
  seatInfo: SeatInfo;
  passenger: string;
  price?: number,
};

export type DurationItem = {
  duration: [string, string];
  local: string
};
export type TicketListItem = Ticket | DurationItem;
export const ticketList: TicketListItem[] = [
  {
    duration: ['2023-03-11','2023-03-12'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  {
    duration: ['2023-04-08','2023-04-09'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  // [2023-04-27,2023-05-02] -- 杭州
  {
    duration: ['2023-04-27','2023-05-02'],
    local: '杭州'
  },
  {
    type: TicketType.Airplane,
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
    type: TicketType.Train,
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
  // {
  //   departureStation: '南京南站',
  //   arrivalStation: '杭州东站',
  //   trainNumber: 'G179',
  //   departureTime: '2023-05-02 13:02:00',
  //   arrivalTime: '2023-05-02 14:13:00',
  //   seatInfo: {
  //     // 瞎写的
  //     seatNumber: '13车14A号',
  //     type: '二等座',
  //   },
  //   passenger: '🥕',
  //   price: 130,
  // },
  // [2023-06-02,2023-06-04] -- 北京
  {
    duration: ['2023-06-02','2023-06-04'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    price: 656,
  },
  {
    type: TicketType.Train,
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
    price: 594,
  },
  // [2023-07-07,2023-07-09] -- 北京
  {
    duration: ['2023-07-07','2023-07-09'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    price: 623,
  },
  {
    type: TicketType.Airplane,
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
    price: 1100,
  },
  // [2023-08-12,2023-08-13] -杭州
  {
    duration: ['2023-08-12','2023-08-13'],
    local: '杭州'
  },
  {
    type: TicketType.Train,
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
    price: 623,
  },
  {
    type: TicketType.Train,
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
    price: 674,
  },
  // [2023-09-01,2023-09-03] -- 北京
  {
    duration: ['2023-09-01','2023-09-03'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    price: 614,
  },
  {
    type: TicketType.Train,
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
    price: 623,
  },
  // [2023-10-03,2023-10-07]  --北京
  {
    duration: ['2023-10-03','2023-10-07'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    price: 674,
  },
  {
    type: TicketType.Train,
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
    price: 623,
  },
  // [2023-11-04,2023-11-05] -南京
  {
    duration: ['2023-11-04','2023-11-05'],
    local: '南京'
  },
  {
    type: TicketType.Train,
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
    price: 141,
  },
  {
    type: TicketType.Train,
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
    price: 124,
  },
  {
    type: TicketType.Train,
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
    price: 420,
  },
  {
    type: TicketType.Train,
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
    price: 464,
  },
  // [2023-11-24,2023-11-26] --北京
  {
    duration: ['2023-11-24','2023-11-26'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  // [2023-12-29,2024-01-01] --北京
  {
    duration: ['2023-12-29','2024-01-01'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  // [2024-01-19,2024-01-21] --北京
  {
    duration: ['2024-01-19','2024-01-21'],
    local: '北京'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Airplane,
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
  // [2024-02-24,2024-02-25] --杭州
  {
    duration: ['2024-02-24','2024-02-25'],
    local: '杭州'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  // [2024-03-16,2024-03-17] --北京
  {
    duration: ['2024-03-16','2024-03-17'],
    local: '北京'
  },
  {
    type: TicketType.Airplane,
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
    type: TicketType.Airplane,
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
    duration: ['2024-04-13','2024-04-15'],
    local: '武汉'
  },
  {
    type: TicketType.Train,
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
    type: TicketType.Train,
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
    type: TicketType.Train,
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
    type: TicketType.Train,
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
  // [2024-05-24,2024-05-26]  --杭州
  {
    duration: ['2024-05-24','2024-05-26'],
    local: '杭州'
  },
  {
    type: TicketType.Airplane,
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
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G36',
    departureTime: '2024-05-26 21:30:00',
    arrivalTime: '2024-05-26 00:05:00',
    seatInfo: {
      seatNumber: '16车009F',
      type: '二等座',
    },
    passenger: '🐰',
    price: 674,
  },
  // [2024-06-08,2024-06-10]  --北京
  {
    duration: ['2024-06-08','2024-06-10'],
    local: '北京'
  },
  {
    type: TicketType.Airplane,
    departureStation: '北京首都',
    arrivalStation: '杭州萧山',
    trainNumber: '国航CA717',
    departureTime: '2024-06-08 21:30:00',
    arrivalTime: '2024-06-08 00:05:00',
    seatInfo: {
      seatNumber: '21J',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 550,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G193',
    departureTime: '2024-06-10 21:30:00',
    arrivalTime: '2024-06-10 23:05:00',
    seatInfo: {
      seatNumber: '14车004C',
      type: '二等座',
    },
    passenger: '🥕',
    price: 562,
  },
  // [2024-06-28,2024-06-30]  --北京
  {
    duration: ['2024-06-28','2024-06-30'],
    local: '北京'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G170',
    departureTime: '2024-06-28 21:30:00',
    arrivalTime: '2024-06-28 23:05:00',
    seatInfo: {
      seatNumber: '15车004A',
      type: '二等座',
    },
    passenger: '🥕',
    price: 605,
  },
  {
    type: TicketType.Train,
    departureStation: '北京站',
    arrivalStation: '杭州站',
    trainNumber: 'D11',
    departureTime: '2024-06-30 21:30:00',
    arrivalTime: '2024-06-30 23:05:00',
    seatInfo: {
      seatNumber: '12车0222',
      type: '二等卧',
    },
    passenger: '🥕',
    price: 529,
  },
  // [2024-07-26,2024-07-28]  --北京
  {
    duration: ['2024-07-26','2024-07-28'],
    local: '北京'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州站',
    arrivalStation: '北京站',
    trainNumber: 'D12',
    departureTime: '2024-07-26 21:30:00',
    arrivalTime: '2024-07-26 23:05:00',
    seatInfo: {
      seatNumber: '15车0062',
      type: '二等卧',
    },
    passenger: '🥕',
    price: 491,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G39',
    departureTime: '2024-07-28 21:30:00',
    arrivalTime: '2024-07-28 23:05:00',
    seatInfo: {
      seatNumber: '11车003C',
      type: '二等座',
    },
    passenger: '🥕',
    price: 586,
  },
  // [2024-08-09,2024-08-11]  --北京
  {
    duration: ['2024-08-09','2024-08-11'],
    local: '北京'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G192',
    departureTime: '2024-08-09 21:30:00',
    arrivalTime: '2024-08-09 23:05:00',
    seatInfo: {
      seatNumber: '06车017f',
      type: '二等座',
    },
    passenger: '🥕',
    price: 605,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G195',
    departureTime: '2024-08-11 21:30:00',
    arrivalTime: '2024-08-11 23:05:00',
    seatInfo: {
      seatNumber: '08车008F',
      type: '二等座',
    },
    passenger: '🥕',
    price: 575,
  },
  // [2024-09-06,2024-09-08]  --北京
  {
    duration: ['2024-09-06','2024-09-08'],
    local: '北京'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州站',
    arrivalStation: '北京站',
    trainNumber: 'D12',
    departureTime: '2024-09-06 21:30:00',
    arrivalTime: '2024-09-06 23:05:00',
    seatInfo: {
      seatNumber: '04车0221',
      type: '二等卧',
    },
    passenger: '🥕',
    price: 491,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G39',
    departureTime: '2024-09-08 21:30:00',
    arrivalTime: '2024-09-08 23:05:00',
    seatInfo: {
      seatNumber: '11车016F',
      type: '二等座',
    },
    passenger: '🥕',
    price: 586,
  },
  // [2024-10-02,2024-10-08]  --四川
  {
    duration: ['2024-10-02','2024-10-08'],
    local: '四川'
  },
  {
    type: TicketType.Airplane,
    departureStation: '杭州萧山',
    arrivalStation: '成都天府',
    trainNumber: 'MF8495',
    departureTime: '2024-10-02 21:30:00',
    arrivalTime: '2024-10-02 23:05:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 900,
  },
  {
    type: TicketType.Airplane,
    departureStation: '北京大兴',
    arrivalStation: '成都天府',
    trainNumber: 'MU5457',
    departureTime: '2024-10-02 21:30:00',
    arrivalTime: '2024-10-02 23:05:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 1050,
  },
  {
    type: TicketType.Airplane,
    departureStation: '成都天府',
    arrivalStation: '杭州萧山',
    trainNumber: 'GS6508',
    departureTime: '2024-10-08 21:30:00',
    arrivalTime: '2024-10-08 23:05:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 1280,
  },
  {
    type: TicketType.Airplane,
    departureStation: '成都天府',
    arrivalStation: '北京大兴',
    trainNumber: 'CZ6108',
    departureTime: '2024-10-08 21:30:00',
    arrivalTime: '2024-10-08 23:05:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 1270,
  },
  // [2024-10-26,2024-10-27]  --杭州
  {
    duration: ['2024-10-26','2024-10-27'],
    local: '杭州'
  },
  {
    type: TicketType.Train,
    departureStation: '北京站',
    arrivalStation: '杭州站',
    trainNumber: 'D17',
    departureTime: '2024-10-25 21:30:00',
    arrivalTime: '2024-10-26 23:05:00',
    seatInfo: {
      seatNumber: '04车0212',
      type: '二等卧',
    },
    passenger: '🐰',
    price: 564,
  },
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G36',
    departureTime: '2024-10-27 21:30:00',
    arrivalTime: '2024-10-27 23:05:00',
    seatInfo: {
      seatNumber: '08车002D',
      type: '二等座',
    },
    passenger: '🐰',
    price: 674,
  },
  // [2024-11-22,2024-11-24]  --徐州
  {
    duration: ['2024-11-22','2024-11-24'],
    local: '徐州'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '徐州东站',
    trainNumber: 'G190',
    departureTime: '2024-11-22 21:30:00',
    arrivalTime: '2024-11-22 23:05:00',
    seatInfo: {
      seatNumber: '07车015B',
      type: '二等座',
    },
    passenger: '🥕',
    price: 295,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '徐州东站',
    trainNumber: 'G2589',
    departureTime: '2024-11-22 21:30:00',
    arrivalTime: '2024-11-22 23:05:00',
    seatInfo: {
      seatNumber: '06车008F',
      type: '二等座',
    },
    passenger: '🐰',
    price: 309
  },
  {
    type: TicketType.Train,
    departureStation: '徐州东站',
    arrivalStation: '杭州东站',
    trainNumber: 'G1865',
    departureTime: '2024-11-24 21:30:00',
    arrivalTime: '2024-11-24 23:05:00',
    seatInfo: {
      seatNumber: '05车009D',
      type: '二等座',
    },
    passenger: '🥕',
    price: 392,
  },
  {
    type: TicketType.Train,
    departureStation: '徐州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G138',
    departureTime: '2024-11-24 21:30:00',
    arrivalTime: '2024-11-24 23:05:00',
    seatInfo: {
      seatNumber: '06车010D',
      type: '二等座',
    },
    passenger: '🐰',
    price: 334,
  },
  // [2024-12-27,2024-12-29]  --北京
  {
    duration: ['2024-12-27','2024-12-29'],
    local: '北京'
  },
  {
    type: TicketType.Train,
    departureStation: '杭州东站',
    arrivalStation: '北京南站',
    trainNumber: 'G34',
    departureTime: '2024-12-27 21:30:00',
    arrivalTime: '2024-12-27 23:05:00',
    seatInfo: {
      seatNumber: '03车007C',
      type: '二等座',
    },
    passenger: '🥕',
    price: 674,
  },
  {
    type: TicketType.Airplane,
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: 'CZ3281',
    departureTime: '2024-12-30 21:30:00',
    arrivalTime: '2024-12-30 23:05:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 620,
  },
  // [2025-01-17,2025-01-20]  --杭州
  {
    duration: ['2025-01-17','2025-01-20'],
    local: '杭州'
  },
  {
    type: TicketType.Airplane,
    departureStation: '北京大兴',
    arrivalStation: '杭州萧山',
    trainNumber: 'CZ8853',
    departureTime: '2025-01-17 20:45:00',
    arrivalTime: '2024-01-17 23:10:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 820,
  },
  {
    type: TicketType.Airplane,
    departureStation: '杭州萧山',
    arrivalStation: '北京大兴',
    trainNumber: 'MU5457',
    departureTime: '2025-01-20 14:30:00',
    arrivalTime: '2024-01-20 17:00:00',
    seatInfo: {
      seatNumber: '49C',
      type: '经济舱',
    },
    passenger: '🐰',
    price: 1370,
  },
   // [2025-02-14,2025-02-16]  --北京
   {
    duration: ['2025-02-14','2025-02-16'],
    local: '北京'
  },
  {
    type: TicketType.Airplane,
    departureStation: '杭州萧山',
    arrivalStation: '北京首都',
    trainNumber: 'CA1717',
    departureTime: '2025-02-14 15:00:00',
    arrivalTime: '2025-02-14 17:20:00',
    seatInfo: {
      seatNumber: '35A',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 740,
  },
  {
    type: TicketType.Train,
    departureStation: '北京南站',
    arrivalStation: '杭州东站',
    trainNumber: 'G39',
    departureTime: '2025-02-16 19:00:00',
    arrivalTime: '2025-02-16 23:21:00',
    seatInfo: {
      seatNumber: '49C',
      type: '经济舱',
    },
    passenger: '🥕',
    price: 674,
  },
]