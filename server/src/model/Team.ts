import TeamDTO from "DTOs/team";

export default class Team {
  private id: string;
  private name: string;
  private description: string;
  private workPlans: Array<any>;
  private members: Array<any>;

  constructor(
    IDOrDTO: string | TeamDTO,
    id?: string, 
    name?: string,
    description?: string,
    workPlans?: Array<any>,
    members?: Array<any>
    ){
      if (typeof IDOrDTO === "string") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.workPlans = workPlans;
        this.members = members;
      } else 
      {
        IDOrDTO.id,
        IDOrDTO.name,
        IDOrDTO.description,
        IDOrDTO.workPlans,
        IDOrDTO.members
      }
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
