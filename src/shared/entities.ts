export interface IFormation {
    titre: string;
    image: string;
    stackTechnique: string[];
    dates: string;
    nombreDePlaces: number;
    tarif: number;
    domaine: string;
    ville:string;
    
}

export interface IBlog{
    userId:number;
    id:number;
    title:string;
    body:string
}

export interface  IUser {
    id:number;
    name:string;
}