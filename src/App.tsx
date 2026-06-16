export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="src\brasao.png"
              alt="Universidade de Ribeirão Preto"
              className="w-12 h-12 text-white"
            />

            <div>
              <h1 className="font-bold text-lg text-cyan-400">
                Laboratório de Computação Científica
              </h1>

              <p className="text-xs text-slate-400">
                Universidade de Ribeirão Preto
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#sobre" className="hover:text-cyan-400">
              Sobre
            </a>

            <a href="#pesquisa" className="hover:text-cyan-400">
              Pesquisa
            </a>

            <a href="#projetos" className="hover:text-cyan-400">
              Projetos
            </a>

            <a href="#equipe" className="hover:text-cyan-400">
              Equipe
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-30 mb-20">
        <div className="max-w-5xl text-center">

          {/* BRASÃO */}
          <img
            src="src\brasao.png"
            alt="Universidade de Ribeirão Preto"
            className="w-28 h-28 mx-auto mb-8"
          />

          {/* TAG SUPERIOR */}
          <div className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-400">
            Universidade de Ribeirão Preto
          </div>

          {/* TÍTULO */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Laboratório de Computação Científica e Alto Desempenho
            <span className="text-cyan-400 block mt-2">
              Transformando ciência em soluções computacionais
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Pesquisa, inovação e desenvolvimento em Computação Científica,
            Inteligência Artificial, Simulações Numéricas e Computação de Alto Desempenho.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold">
              Conheça nossas pesquisas
            </button>

            <button className="px-8 py-4 rounded-lg border border-slate-700 hover:border-cyan-500">
              Faça parte da equipe
            </button>
          </div>

        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="border-y border-slate-800 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400">25+</h2>
            <p className="text-slate-400">Pesquisadores</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">120+</h2>
            <p className="text-slate-400">Publicações</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">15+</h2>
            <p className="text-slate-400">Projetos</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">4</h2>
            <p className="text-slate-400">Nós de GPU</p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          Sobre o Laboratório
        </h2>

        <p className="text-slate-400 leading-8 text-lg">
          O Laboratório de Computação Científica e Alto Desempenho tem
          como objetivo desenvolver pesquisas e tecnologias avançadas
          para a solução de problemas científicos, acadêmicos e
          industriais por meio da computação.
        </p>

        <p className="text-slate-400 leading-8 text-lg mt-6">
          Nossas atividades envolvem modelagem matemática, simulação
          computacional, inteligência artificial, análise de dados,
          computação paralela e infraestrutura de alto desempenho.
        </p>
      </section>

      {/* PESQUISA */}
      <section
        id="pesquisa"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Áreas de Pesquisa
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Computação Científica",
            "Inteligência Artificial",
            "Computação de Alto Desempenho",
            "Bioinformática",
            "Visualização Científica",
            "Sistemas Distribuídos",
          ].map((area) => (
            <div
              key={area}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900"
            >
              <h3 className="font-semibold text-xl mb-3">
                {area}
              </h3>

              <p className="text-slate-400">
                Desenvolvimento de pesquisas e soluções inovadoras para
                desafios computacionais modernos.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="bg-slate-900 py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">
                Machine Learning para Predição de Arboviroses
              </h3>

              <p className="text-slate-400">
                Aplicação de inteligência artificial para análise de
                sequências genéticas e previsão de variantes futuras.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4">
                Otimização de Infraestrutura HPC
              </h3>

              <p className="text-slate-400">
                Estudos em paralelização, escalabilidade e desempenho
                de ambientes computacionais de alto desempenho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRAESTRUTURA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Infraestrutura
        </h2>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Cluster
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "32 Núcleos de Processamento",
              "4 GPUs para Pesquisa",
              "64 GB de RAM",
              "5 TB de Armazenamento",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl border border-slate-800 text-center justify-center flex items-center"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">
            Computadores
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "4 máquinas com 6 núcleos de processamento",
              "Estação Individual",
              "16 GB de RAM",
              "512 GB de Armazenamento",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl border border-slate-800 text-center justify-center flex items-center"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section
        id="equipe"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-12">
          Equipe
        </h2>

<div className="grid md:grid-cols-3 gap-8">
  {[
    {
      nome: "Prof. Me. Fernando Perez",
      cargo: "Professor Coordenador",
    },
    {
      nome: "Lorenzo C. Circelli",
      cargo: "Aluno de Graduação",
    },
    {
      nome: "Ana Costa",
      cargo: "Aluno de Iniciação Científica",
    },
  ].map(({ nome, cargo }) => (
    <div
      key={nome}
      className="rounded-xl border border-slate-800 overflow-hidden"
    >
      <div className="h-64 bg-slate-800"></div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {nome}
        </h3>

        <p className="text-cyan-400">
          {cargo}
        </p>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-6">

            <img
              src="src\brasao.png"
              alt="Universidade de Ribeirão Preto"
              className="w-14 h-14"
            />

            <div>
              <h3 className="font-bold text-lg">
                Laboratório de Computação Científica
              </h3>

              <p className="text-slate-400">
                Universidade de Ribeirão Preto
              </p>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-6 text-sm text-slate-500">
            Departamento de Engenharia da Computação
            <br />
            Universidade de Ribeirão Preto
            <br />
            contato@unaerp.br
          </div>

        </div>
      </footer>
    </div>
  );
}