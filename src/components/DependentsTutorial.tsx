import { SouGovTutorial, type SouGovTutorialData } from '@/components/SouGovTutorial'
import service from '../../assets/sougov-dependentes/servico.png'
import list from '../../assets/sougov-dependentes/lista.jpeg'
import create from '../../assets/sougov-dependentes/novo.jpeg'
import data from '../../assets/sougov-dependentes/dados.jpeg'
import benefits from '../../assets/sougov-dependentes/beneficios.jpeg'
import documents from '../../assets/sougov-dependentes/documentos.jpeg'
import review from '../../assets/sougov-dependentes/conferencia.jpeg'
import terms from '../../assets/sougov-dependentes/termos.jpeg'
import tracking from '../../assets/sougov-dependentes/acompanhar.png'

const source = 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/cadastrar-dependentes/cadastrar-dependente'
const serviceStep = { image: service, title: 'Acesse o cadastro', description: 'No SouGov, procure Cadastro de Dependente em Todos os serviços.', alt: 'Lista de serviços com a opção Cadastro de Dependente.' }
const tutorials: Record<'include' | 'exclude', SouGovTutorialData> = {
  include: {
    label: 'inclusão de dependentes', source, sourceLabel: 'Portal do Servidor · SouGov', landscape: false,
    steps: [
      serviceStep,
      { image: create, title: 'Inicie o cadastro', description: 'Selecione Cadastrar Novo Dependente.', alt: 'Tela com o botão Cadastrar Novo Dependente.' },
      { image: data, title: 'Informe os dados', description: 'Preencha os dados pessoais e o parentesco do dependente.', alt: 'Formulário de dados pessoais do dependente.' },
      { image: benefits, title: 'Selecione os benefícios', description: 'Escolha os benefícios disponíveis para o parentesco informado.', alt: 'Etapa de seleção de benefícios do dependente.' },
      { image: documents, title: 'Anexe os comprovantes', description: 'Inclua os documentos exigidos para cada solicitação.', alt: 'Etapa de anexação dos documentos comprobatórios.' },
      { image: review, title: 'Confira a solicitação', description: 'Revise os dados e os anexos. Se estiverem corretos, selecione Solicitar.', alt: 'Conferência do cadastro com o botão Solicitar.' },
      { image: terms, title: 'Aceite os termos', description: 'Leia os termos e confirme sua concordância para enviar o cadastro.', alt: 'Termos apresentados ao finalizar o cadastro de dependente.' },
      { image: tracking, title: 'Acompanhe a análise', description: 'Consulte o pedido em Acessar Solicitações e aguarde a Gestão de Pessoas.', alt: 'Lista de solicitações do SouGov.' },
    ],
  },
  exclude: {
    label: 'exclusão de dependentes', source, sourceLabel: 'Portal do Servidor · SouGov', landscape: false,
    steps: [
      serviceStep,
      { image: list, title: 'Selecione o dependente', description: 'Confira o vínculo e localize o registro que deseja excluir. Selecione o ícone de lixeira ao lado do nome.', alt: 'Lista de dependentes com ícones de edição e lixeira ao lado do registro.' },
    ],
  },
}

export function DependentsTutorial({ kind }: { kind: keyof typeof tutorials }) {
  return <SouGovTutorial key={kind} tutorial={tutorials[kind]} />
}
