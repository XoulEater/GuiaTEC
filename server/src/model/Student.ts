import CampusENUM from "./campusENUM";

export default class Student {
  private carnet: number;
  private name: string;
  private email: string;
  private phoneNumber: string;
  private campus: CampusENUM;

  constructor(
    carnet: number,
    name: string,
    email: string,
    phoneNumber: string,
    campus: CampusENUM
  ) {
    this.carnet = carnet;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.campus = campus;
  }

  // Getters
  public getCarnet(): number {
    return this.carnet;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public getCampus(): CampusENUM {
    return this.campus;
  }

  // Setters
  public setCarnet(carnet: number): void {
    this.carnet = carnet;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public setCampus(campus: CampusENUM): void {
    this.campus = campus;
  }
}
