export abstract class Pessoa {
    public nome?: string
    public email?: string
    public dataNascimento?: Date 

    abstract andar(): string
    
    falar(): string {
        return 'Falando olá'
    }
}