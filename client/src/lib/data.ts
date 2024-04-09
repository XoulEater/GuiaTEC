// FIXME: This file is for testing purposes only, it will be removed in the future

export interface UserDTO {
  userType?: 'teacher' | 'assistant'; // type of the user
  name: string; // full name of the user
  email: string; // email of the user
  password: string; // password of the user
  code?: string; // unique identifier of the user
  photo?: string; // URL of the photo of the user
  campus: Campus; // campus where the user is located
}

// DTOs for the data that will be used in the application
export interface TeacherDTO extends UserDTO {
  userType: 'teacher';
  code: string; // unique identifier [campus]-[number]
  officePNumber: string; // office phone number of the teacher
  personalPNumber: string; // personal phone number of the teacher
  photo?: string; // URL of the photo of the teacher
  isLeader: boolean; // if the teacher is the leader of the team
}

export interface AssistantDTO extends UserDTO {
  userType: 'assistant';
}


enum ActivityType {
  ORIENTADORA = "Orientadora",
  MOTIVACIONAL = "Motivacional",
  APOYO = "Apoyo",
  TECNICA = "Técnica",
  RECREATIVA = "Recreativa",
}

export enum ActivityStatus {
  PLANEADA = "Planeada",
  PUBLICADA = "Publicada",
  NOTIFICADA = "Notificada",
  REALIZADA = "Realizada",
  CANCELADA = "Cancelada",
}

enum Modalities {
  PRESENCIAL = "Presencial",
  VIRTUAL = "Virtual",
}

export interface ActivityDTO {
  name: string; // name of the activity
  week: number; // week of the activity in the work plan
  date: Date; // date of the activity
  time: string; // time of the activity
  publicationDate: Date; // date of publication of the activity
  reminderInterval: number; // interval of the reminder of the activity
  responsibles: TeacherDTO[]; // list of teachers responsible for the activity
  type: ActivityType; // type of the activity
  modality: Modalities; // modality of the activity
  status: ActivityStatus; // status of the activity
  link?: string; // link of the activity if it is virtual
  attachmentsFiles?: string[]; // list of attachments of the activity
}

export interface WorkPlanDTO {
  id: string; // unique identifier of the work plan
  name: string; // name of the work plan
  description: string; // description of the work plan 
  activities: ActivityDTO[]; // list of activities in the work plan
}

export interface TeamDTO {
  name: string; // name of the team
  description: string; // description of the team
  members: TeacherDTO[]; // list of teachers in the team
  workPlans: WorkPlanDTO[]; // list of work plans in the team
}

export interface StudentDTO extends UserDTO{
  carnet: string; // unique identifier of the student 
  name: string; // full name of the student
  email: string; // email of the student
  personalPNumber: string; // personal phone number of the student
}

// Enum for the campus where the teacher is located
export enum Campus { 
  CA = "CA",
  AL = "AL",
  SJ = "SJ",
  SC = "SC",
  LI = "LI",
}

// Sample data for the development of the application
export const teachers: TeacherDTO[] = [
  {
    code: "CA-01",
    name: "Teacher 10",
    email: "email1",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo:
      "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maur%C3%ADcio-mascaro-801863.jpg&fm=jpg",
    campus: Campus.CA,
    isLeader: true,
    password: "12345",
    userType: 'teacher',
  },
  {
    code: "AL-02",
    name: "Teacher 2",
    email: "email2",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo:
      "https://images.inc.com/uploaded_files/image/1920x1080/getty_499517325_111832.jpg",
    campus: Campus.AL,
    isLeader: false,
    password: "12345",
    userType: 'teacher',
  },
  {
    code: "SJ-03",
    name: "Teacher 3",
    email: "email3",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo:
      "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: Campus.SJ,
    isLeader: false,
    password: "12345",
    userType: 'teacher',
  },
  {
    code: "SC-04",
    name: "Teacher 4",
    email: "email4",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo:
      "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: Campus.SC,
    isLeader: false,
    password: "12345",
    userType: 'teacher',
  },
  {
    code: "LI-05",
    name: "Teacher 5",
    email: "email5",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo:
      "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: Campus.LI,
    isLeader: false,
    password: "12345",
    userType: 'teacher',
  },
];

export const assistants: (AssistantDTO)[] = [
  {
    name: "Assistant 1",
    email: "assistant1@guiatec.com",
    campus: Campus.CA,
    password: "12345",
    userType: 'assistant',
  },
  {
    name: "Assistant 2",
    email: "assistant2@guiatec.com",
    campus: Campus.AL,
    password: "12345",
    userType: 'assistant',
  },
  {
    name: "Assistant 3",
    email: "assistant3@guiatec.com",
    campus: Campus.SJ,
    password: "12345",
    userType: 'assistant',
  },
  {
    name: "Assistant 4",
    email: "assistant4@guiatec.com",
    campus: Campus.SC,
    password: "12345",
    userType: 'assistant',
  },
];


export const activities: ActivityDTO[] = [
];
for (let i = 1; i <= 30; i++) {
  const activity1: ActivityDTO = {
    name: `Activity ${i}`,
    week: Math.floor(Math.random() * 16) + 1,
    date: new Date(),
    time: "10:00",
    publicationDate: new Date(),
    reminderInterval: 15,
    responsibles: teachers.slice(0, 2),
    type: Object.values(ActivityType)[Math.floor(Math.random() * Object.keys(ActivityType).length / 2)],
    modality: Object.values(Modalities)[Math.floor(Math.random() * Object.keys(Modalities).length / 2)],
    status: Object.values(ActivityStatus)[Math.floor(Math.random() * Object.keys(ActivityStatus).length / 1)],
    link: "https://www.google.com",
    attachmentsFiles: ["https://www.google.com"],

  };
  activities.push(activity1);
}
activities.sort((a, b) => a.week - b.week);

export const workPlans: WorkPlanDTO[] = [
  {
    id: "1",
    name: "Work Plan 1",
    description: "Description 1",
    activities: activities,
  },
  {
    id: "2",
    name: "Work Plan 2",
    description: "Description 2",
    activities: activities,
  },
  {
    id: "3",
    name: "Work Plan 3",
    description: "Description 3",
    activities: activities,
  },
  {
    id: "4",
    name: "Work Plan 4",
    description: "Description 4",
    activities: activities,
  },
];



export const teams: TeamDTO = 
  {
    name: "TeamDTO 1",
    description: "Description 1",
    members: teachers.slice(0, 2),
    workPlans: workPlans,
  }

export const students: StudentDTO[] = [

];
for (let i = 1; i <= 24; i++) {
  const student: StudentDTO = {
    carnet: `201800${i}`,
    name: `Student ${i}`,
    email: `email${i}`,
    password: "12345",
    personalPNumber: Math.floor(Math.random() * 1000000000).toString(),
    campus: Object.values(Campus)[Math.floor(Math.random() * Object.keys(Campus).length / 2)],
  };
  students.push(student);
}
