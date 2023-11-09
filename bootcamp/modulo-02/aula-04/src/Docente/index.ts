import { Pessoa } from "../Pessoa";

export abstract class Docente  extends Pessoa {    
    abstract lecionar(): string
}