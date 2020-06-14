export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  id?:string;
  nom?:string;
  pass?:string;
  age?:number;
  roles: Roles;
}

