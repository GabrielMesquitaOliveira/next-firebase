'use client'

import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('1', 'Maria', 20),
    new Cliente('2', 'Joao', 30),
    new Cliente('3', 'Carlos', 23),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro com Firebase e Next.js">
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
