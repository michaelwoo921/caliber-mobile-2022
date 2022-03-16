export class AssociateWithFeedback {
  associate = new Associate();
  qcFeedback = new QcFeedback();
}
export class Associate {
  asscoiateId = 'Test';
  firstName = 'TestFirstName';
  lastName = 'TestLastName';
}
export class QcFeedback {
  batchid = '';
  weeknumber = 0;
  associateid = '';
  notecontent = '';
  technicalstatus = '1';
}
