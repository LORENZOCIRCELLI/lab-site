import posts from "./data/posts.json";
import type { Post } from "./types" ;
import PostCard from "./components/PostCard";

export default function App() {
  const typedPosts = posts as Post[];
  const latestPosts = typedPosts.slice(-3);
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-white backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="src\coat.png"
              alt="Universidade de Ribeirão Preto"
              className="w-12 h-12"
            />

            <div>
              <h1 className="font-bold text-lg">
                CORTEX – Centro de Otimização, Redes, Tecnologia e Sistemas Experimentais
              </h1>

              <p className="text-xs ">
                UNAERP - Universidade de Ribeirão Preto
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 ">
            <a href="#sobre" className="hover:text-cyan-400">
              Sobre
            </a>

            <a href="#blog" className="hover:text-cyan-400">
              Blog
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

      <section className=" flex items-center justify-center px-6 pt-30 mb-20 mt-20">
        <div className="max-w-5xl text-center">
          {/* TÍTULO */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            CORTEX – Centro de Otimização, Redes, Tecnologia e Sistemas Experimentais
          </h1>
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

        <p className="text-slate-800 leading-8 text-lg">
          O CORTEX tem
          como objetivo desenvolver pesquisas e tecnologias avançadas
          para a solução de problemas científicos, acadêmicos e
          industriais por meio da computação.
        </p>

        <p className="text-slate-800 leading-8 text-lg">
          O propósito dessa iniciativa é promover um ambiente de pesquisa colaborativo e interdisciplinar, onde
          estudantes, professores e pesquisadores possam trabalhar juntos para enfrentar desafios computacionais 
          complexos e contribuir para o avanço do conhecimento científico e tecnológico.
        </p>

        <p className="text-slate-800 leading-8 text-lg">
          Nossas atividades envolvem modelagem matemática, simulação
          computacional, inteligência artificial, análise de dados,
          computação paralela e infraestrutura de alto desempenho.
        </p>
      </section>

      <section id="blog" className="bg-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Blog do CORTEX
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <p className="text-slate-800 leading-8 text-lg">
            Aqui você encontrará as últimas notícias e atualizações sobre o CORTEX.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-6 mt-2 text-end">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
            Ver todos os posts
          </button>
        </div>


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
              className="p-6 rounded-xl  bg-slate-200"
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
          <h2 className="text-4xl font-bold mb-12 text-white">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Machine Learning para Predição de Arboviroses
              </h3>

              <p className="text-slate-400">
                Aplicação de inteligência artificial para análise de
                sequências genéticas e previsão de variantes futuras.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Motor Gráfico 3D e Gêmeo Digital para Aplicações do Mundo Real
              </h3>

              <p className="text-slate-400">
                Desenvolvimento de um motor gráfico 3D para visualização de gêmeos digitais em tempo real, com foco em aplicações industriais e científicas.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Robodente - Robô Odontológico Mecânico
              </h3>
              <p className="text-slate-400">
                Projeto de um robô odontológico mecânico para fins educativos
              </p>
            </div>
            <div className="p-8 rounded-xl border border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Visão Computacional em Ambientes de Produção
              </h3>
              <p className="text-slate-400">
                Desenvolvimento de sistemas de visão computacional para monitoramento e controle de processos industriais.
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
      foto:"/photos/Fernando.png",
      nome: "Prof. Me. Fernando Perez",
      cargo: "Professor Coordenador",
    },
    {
      foto:"/photos/Lorenzo.png",
      nome: "Lorenzo C. Circelli",
      cargo: "Supervisor - Aluno de Graduação",
    },
    {
      foto:"/photos/Hugo.png",
      nome: "Hugo França",
      cargo: "Aluno de Graduação",
    },
    {
      foto:"/photos/Gabriel.png",
      nome: "Gabriel Monteiro",
      cargo: "Aluno de Graduação",
    },
    {
      foto:"/photos/Nicolas.png",
      nome: "Nicolas Giussani Vieira",
      cargo: "Aluno de Graduação",
    },
    {
      foto:"/photos/Igor.png",
      nome: "Igor Palazzo",
      cargo: "Aluno de Graduação",
    },
  ].map(({ foto, nome, cargo }) => (
    <div
      key={nome}
      className="rounded-xl border border-slate-800 overflow-hidden"
    >
      <img src={foto} alt={nome} className="w-full h-64 object-cover " />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {nome}
        </h3>

        <p className="text-cyan-800 font-semibold">
          {cargo}
        </p>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-6">

            <img
              src="src\coat.png"
              alt="Universidade de Ribeirão Preto"
              className="w-30 h-30"
            />

            <div>
              <h3 className="font-bold text-lg">
                CORTEX – Centro de Otimização, Redes, Tecnologia e Sistemas Experimentais
              </h3>

              <p className="text-slate-400">
                Universidade de Ribeirão Preto
              </p>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-6 text-sm text-slate-500">
            Departamento de Engenharia da Computação
            <br />
            UNAERP - Universidade de Ribeirão Preto
            <br />
            lorenzo.circelli@sou.edu.unaerp.br
          </div>

        </div>
      </footer>
    </div>
  );
}