export default class Cliente {
    #id: string | null
    #nome: string
    #idade: number

    constructor(id: string | null = null, nome: string, idade: number) {
        this.#id = id
        this.#nome = nome
        this.#idade = idade
    }

    static vazio(): Cliente {
        return new Cliente('', '', 0)
    }

    get Id(): string | null {
        return this.#id
    }

    get Nome(): string {
        return this.#nome
    }

    get Idade(): number {
        return this.#idade
    }

}