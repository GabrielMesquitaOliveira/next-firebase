import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('1', 'Maria', 20),
    new Cliente('2', 'Joao', 30),
    new Cliente('3', 'Carlos', 23),
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="app">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
