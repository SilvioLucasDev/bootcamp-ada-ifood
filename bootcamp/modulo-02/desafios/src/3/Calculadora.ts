export class Calculadora {
    private static soma(a: number, b: number): number {
        return a + b
    }

    private static subtração(a: number, b: number): number {
        return a - b
    }

    private static multiplicação(a: number, b: number): number {
        return a * b
    }

    private static divisão(a: number, b: number): number {
        return a / b
    }

    public calcularSoma(a: number, b: number): number {
        return Calculadora.soma(a, b)
    }

    public calcularSubtração(a: number, b: number): number {
        return Calculadora.subtração(a, b)
    }

    public calcularMultiplicação(a: number, b: number): number {
        return Calculadora.multiplicação(a, b)
    }

    public calcularDivisão(a: number, b: number): number {
        return Calculadora.divisão(a, b)
    }

    static calcularAbsoluto(numero: number): number {
        return Math.abs(numero)
    }
}