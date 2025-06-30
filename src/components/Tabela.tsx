
import React from "react";
import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icone";
interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;

  function renderizarCavecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4 text">Ações</th> : false}
      </tr>
    );
  }

  function renderizarAcoes(Cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(Cliente)}
            className="flex justify-center items-center text-green-600 hover:bg-purple-50 rounded-full p-2 m-1">
            {IconeEdicao}
          </button>
        ) : false}
        {props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(Cliente)}
            className="flex justify-center items-center text-red-600 hover:bg-purple-50 rounded-full p-2 m-1">
            {IconeLixo}
          </button>
        ) : false}
      </td>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => (
      <tr
        key={cliente.Id}
        className={`${i % 2 === 0 ? "bg-purple-100" : "bg-purple-200"}`}
      >
        <td className="text-left p-4">{cliente.Id}</td>
        <td className="text-left p-4">{cliente.Nome}</td>
        <td className="text-left p-4">{cliente.Idade}</td>
        {exibirAcoes ? renderizarAcoes(cliente) : false}
      </tr>
    ));
  }

  return (
    <table className="w-full rounded-xl overflow-hidden text-2xl">
      <thead
        className={"bg-gradient-to-r from-blue-700 to-purple-700 text-white"}
      >
        {renderizarCavecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}

export default Tabela;
