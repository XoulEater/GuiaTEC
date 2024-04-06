export interface UserDTO {
  userType: 'teacher' | 'assistant';
  email: string;
  password: string;
  campus: Campus;
}

// DTOs for the data that will be used in the application
export interface TeacherDTO extends UserDTO {
  userType: 'teacher';
  code: string; // unique identifier [campus]-[number]
  name: string; // full name of the teacher
  officePNumber: string; // office phone number of the teacher
  personalPNumber: string; // personal phone number of the teacher
  photo?: string; // URL of the photo of the teacher
  isLeader: boolean; // if the teacher is the leader of the team
}

export interface AssistantDTO extends UserDTO {
  userType: 'assistant';
}

export interface ActivityDTO {
  name: string; // name of the activity
  week: number; // week of the activity in the work plan
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

// Enum for the campus where the teacher is located
enum Campus { 
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
];

export const activities: ActivityDTO[] = [
  {
    name: "Activity 1",
    week: 1,
  },
  {
    name: "Activity 2",
    week: 2,
  },
  {
    name: "Activity 3",
    week: 3,
  },
  {
    name: "Activity 4",
    week: 4,
  },
];

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

