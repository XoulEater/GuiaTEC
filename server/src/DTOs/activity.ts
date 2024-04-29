interface MessageDTO {
  id?: string; // unique identifier of the message
  user: string; // user that sent the message
  date: Date; // date of the message
  content: string; // content of the message
}

interface ForumDTO {
  id?: string; // unique identifier of the forum
  messages: Array<MessageDTO>; // list of messages of the forum
}

interface ActivityDTO {
  _id?: string; // unique identifier of the activity
  name: string; // name of the activity
  week: number; // week of the activity
  date: Date; // date of the activity
  prevDays: number; // number of days before the activity starts to be published
  reminderInterval: number; // interval in days between reminders
  responsibles: Array<string>; // responsibles of the activity
  type: string; // type of the activity
  modality: string; // modality of the activity
  status: string; // status of the activity
  link?: string; // link to the activity
  attachmentFile?: string; // attachment of the activity
  forum?: ForumDTO; // forum of the activity
}

export default ActivityDTO;
