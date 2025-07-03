interface EntradaProps {
    tipo?: 'text' | 'number' | 'email' | 'password'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (novoValor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div>
            <label htmlFor="">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-100 px-4 py-2
                ${props.className ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}