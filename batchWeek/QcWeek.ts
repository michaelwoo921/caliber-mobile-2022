export default class QcWeek {
  qcweekid = 0;
  weeknumber = 1;
  note = '';
  overallstatus: STATUS = 'Undefined';
  batchid = '';
}

export type STATUS = 'Undefined' | 'Poor' | 'Average' | 'Good' | 'Superstar';
