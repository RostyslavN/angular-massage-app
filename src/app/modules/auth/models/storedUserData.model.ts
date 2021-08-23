export interface StoredUserData {
  isNewUser: boolean;
  profile: {
    email: string;
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
  };
  providerId: string;
  uid: string;
  creatinalTime: Date;
}
