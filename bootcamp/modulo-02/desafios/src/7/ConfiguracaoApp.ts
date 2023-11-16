export class ConfiguracaoApp {
    private static instancia?: ConfiguracaoApp
    private propriedades: Record<string, string> = {}

    static getInstancia(): ConfiguracaoApp {
        if (!ConfiguracaoApp.instancia) {
            ConfiguracaoApp.instancia = new ConfiguracaoApp()
        }

        return ConfiguracaoApp.instancia
    }

    setPropriedade(chave: string, valor: string): void {
        this.propriedades[chave] = valor
    }

    getPropriedade(chave: string): string | undefined {
        return this.propriedades[chave]
    }
}