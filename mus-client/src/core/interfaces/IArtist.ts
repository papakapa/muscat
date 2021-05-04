export interface IArtist {
  _id: string;
  nickName: string;
  avatar: string;
  tracks: any;
  albums: any;
}

export interface IArtistToCreate {
  nickName: string;
  avatar: string;
}
