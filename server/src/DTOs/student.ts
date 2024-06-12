import Campus from "../model/campusENUM";

export default interface StudentDTO {
  _id?: string;
  carnet: number;
  password?: string;
  name: string;
  email: string;
  personalPNumber: number;
  campus?: Campus;
  userType: "student";
}
