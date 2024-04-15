
import CampusENUM from '../model/campusENUM';

export interface StudentDTO {
    carnet: string;
    name: string;
    email: string;
    phoneNumber: string;
    campus: CampusENUM;
}