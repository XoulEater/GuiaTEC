// FIXME: fix the any type of workPlans and members

interface TeamDTO {
  id?: string; // unique identifier of the team
  name: string; // name of the team
  description: string; // description of the team
  workPlans: Array<any>; // contains all the workPlans
  members: Array<any>; // contains all the members
}

export default TeamDTO;
