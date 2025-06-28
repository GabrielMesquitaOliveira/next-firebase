import React from "react";
import Cliente from "@/core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

function Tabela(props: TabelaProps) {
  function renderizarCavecalho() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente) => (
      <tr key={cliente.Id}>
        <td>{cliente.Id}</td>
        <td>{cliente.Nome}</td>
        <td>{cliente.Idade}</td>
      </tr>
    ));
  }

  return (
    <table>
      <thead>{renderizarCavecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}

export default Tabela;
