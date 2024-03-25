export interface Teacher {
  code: string;
  name: string;
  email: string;
  officePNumber: string;
  personalPNumber: string;
  photo: string;
  campus: Campus;
  isLeader: boolean;
}

export interface Activity {
  name: string;
  week: number;
}

export interface WorkPlan {
  id: string;
  name: string;
  description: string;
  activities: Activity[];
}

enum Campus {
  CA,
  AL,
  SJ,
  SC,
  LI,
}

export const teachers: Teacher[] = [
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
  },
];

export const activities: Activity[] = [
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

export const workPlans: WorkPlan[] = [
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
