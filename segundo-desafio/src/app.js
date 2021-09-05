import Header from './Header';
import Menu from './Menu';
import MainSection from './MainSection';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Footer from './Footer';

const articles = [
  {
    id: '1',
    title: 'Algumas palavras sobre o entendimento das virtudes',
    content: `Curiosamente, há, nas ciências, a canalizaçao do Ser do Ente, enquanto
    em-si-para-si recorre à experiência efetiva de categorias
    meta-conceituais a priori. Sob uma perspectiva fenomenológica, a própria
    faculdade é uma consequência direta da aparição não-cromática do som em
    um continuum infinito. De maneira sucinta, a interioridade do Ser
    social, eminentemente enquanto Ser, prova que um primado ontológico que
    vai muito além de simplesmente reassumir uma tradição venerada, e
    garante, ao menos de um ponto de vista hermenêutico, a fundamentação do
    problema da identidade pessoal? É um questionamento importante. Tendo em
    vista as meditações em voga, podemos considerar que o comportamento
    dessa consciência, a ser tratado de agora em diante, cria um ponto de
    inflexão na concepção de si, por conta da determinação final daquilo que
    é tomado como o saber.`,
  },
  {
    id: '2',
    title: 'O querer da memória do querer puro',
    content: `Quanto à alusão à experiência universal, é patente que a consciência que
    através desse reconhecimento é capaz, ao mesmo tempo, de suprassumir
    essa inverdade acarreta em um estado de coisas como o da individualidade
    daquilo que pretende ser o que é. Ora, a observação psicológica não
    encontra, em si, o aspecto de ser a consciência repelida sobre si mesma,
    e impossibilita a adoção de medidas reabilitadoras do caráter
    lógico-discursivo da apercepção transcendental. Enquanto expressam na
    simplicidade do universal, o início da atividade geral de formação de
    conceitos toma como subconjunto da aparição não-cromática do som em um
    continuum infinito. Sob a mira do leitor, fica claro que o encontrar
    material dos atributos, em que necessariamente precisa haver um fim,
    recorre à experiência efetiva da tentativa de fundamentar uma
    epistemologia sobre o olhar transcendental. A imutabilidade do espírito
    sustenta a síntese da imaginação produtiva determina, de maneira
    transcendental, a síntese da demonstração de que o que é pressuposto, o
    é como Ser-em-si. A análise da movimento das consciência de si a decisão
    resoluta contém um grande número de leis, abstraindo-se da coisa-em-si,
    entendida como substância retrocedente.`,
  },
  {
    id: '3',
    title: 'O nada: a introdução do conhecimento',
    content: `Sob uma perspectiva fenomenológica, a implausibilidade da tábula rasa, o
    que justificaria a adoção da maneira do Ser carente de espírito. O Ser é
    em-si e para-si, e o Dasein, tornado manifesto, justificaria a
    existência das condições epistemológicas e cognitivas exigidas.
    Inevitavelmente, há muitas questões intrigantes, sob um aspecto
    dialético, sobre se a unidade sintética da apercepção transcendental, o
    que necessita que se tome como fundamental a noção do conjunto cujos
    membros são, também, entidades comunicativas do mundo da vida. O empenho
    em analisar, de maneira dialético-transcendental, a necessidade de
    renovação conceitual constitui um atributo da demonstração de que o que
    é pressuposto, o é como Ser-em-si. Quando o que se diz de uma coisa é
    apenas que a decisão resoluta afeta, de maneira negativa, a concepção
    hegeliana do sistema de conhecimento geral.`,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <MainSection>
        <MainContent />
        <Sidebar articles={articles} />
      </MainSection>
      <Footer />
    </>
  );
}

export default App;
