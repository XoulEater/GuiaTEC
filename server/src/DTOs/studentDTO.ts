import CampusENUM from "../model/campusENUM";

export default interface StudentDTO {
  carnet: number;
  name: string;
  email: string;
  phoneNumber: string;
  campus?: CampusENUM;
}
