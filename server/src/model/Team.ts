import TeamDTO from "DTOs/team";

export default class Team {
  private id: string;
  private name: string;
  private description: string;
  private workPlans: Array<any>;
  private members: Array<any>;

  constructor(team: TeamDTO) {
    this.id = team.id;
    this.name = team.name;
    this.description = team.description;
    this.workPlans = team.workPlans;
    this.members = team.members;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getWorkPlans(): Array<any> {
    return this.workPlans;
  }

  public getMembers(): Array<any> {
    return this.members;
  }

  public setId(id: string) {
    this.id = id;
  }
}