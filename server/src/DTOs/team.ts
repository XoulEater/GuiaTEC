

interface TeamDTO {
  id?: string; // unique identifier of the team
  name: string; // name of the team
  description: string; // description of the team
  workPlans: Array<any>; // leader of the team
  members: Array<any>; // URL of the photo of the team
}

export default TeamDTO;