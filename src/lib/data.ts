export interface Teacher {
     code:string;
     name:string;
     officePNumber:string;
     personalPNumber:string ;
     photo: string;
     campus: Campus;
     isLeader: boolean;
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
        officePNumber: "123456",
        personalPNumber: "123456",
        photo: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maur%C3%ADcio-mascaro-801863.jpg&fm=jpg",
        campus: Campus.CA,
        isLeader: true
    },
    {
        code: "AL-02",
        name: "Teacher 2",
        officePNumber: "123456",
        personalPNumber: "123456",
        photo: "https://images.inc.com/uploaded_files/image/1920x1080/getty_499517325_111832.jpg",
        campus: Campus.AL,
        isLeader: false
    },
    {
        code: "SJ-03",
        name: "Teacher 3",
        officePNumber: "123456",
        personalPNumber: "123456",
        photo: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
        campus: Campus.SJ,
        isLeader: false
    },
    {
        code: "SC-04",
        name: "Teacher 4",
        officePNumber: "123456",
        personalPNumber: "123456",
        photo: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
        campus: Campus.SC,
        isLeader: false
    },
];