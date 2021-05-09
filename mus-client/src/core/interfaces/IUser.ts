import {ITrack} from "./ITrack";

export interface IUserToCreate {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  tracks: ITrack[];
}
