import { SouGovTutorial } from '@/components/SouGovTutorial'
import service from '../../assets/sougov-transporte/servico.png'
import request from '../../assets/sougov-transporte/solicitar.jpg'
import addresses from '../../assets/sougov-transporte/enderecos.jpg'
import outbound from '../../assets/sougov-transporte/ida.jpg'
import inbound from '../../assets/sougov-transporte/volta.jpg'
import days from '../../assets/sougov-transporte/dias.png'
import terms from '../../assets/sougov-transporte/termos.jpg'
import accept from '../../assets/sougov-transporte/confirmacao.jpg'
import tracking from '../../assets/sougov-transporte/acompanhar.jpg'

import update5 from '../../assets/sougov-transporte/atualizacao/pagina-05.jpg'
import update6 from '../../assets/sougov-transporte/atualizacao/pagina-06.jpg'
import update7 from '../../assets/sougov-transporte/atualizacao/pagina-07.jpg'
import update8 from '../../assets/sougov-transporte/atualizacao/pagina-08.jpg'
import update9 from '../../assets/sougov-transporte/atualizacao/pagina-09.jpg'
import update10 from '../../assets/sougov-transporte/atualizacao/pagina-10.jpg'
import update11 from '../../assets/sougov-transporte/atualizacao/pagina-11.jpg'
import cancel5 from '../../assets/sougov-transporte/cancelamento/pagina-5.jpg'
import cancel6 from '../../assets/sougov-transporte/cancelamento/pagina-6.jpg'

const requestSteps = [
  { image: service, title: 'Encontre o serviço', description: 'Confira seu vínculo. Em Todos os serviços, procure Auxílio Transporte.', alt: 'Lista de serviços do SouGov com a opção Auxílio Transporte.' },
  { image: request, title: 'Inicie o pedido', description: 'Selecione Solicitar Auxílio Transporte.', alt: 'Tela do benefício com o botão Solicitar Auxílio Transporte.' },
  { image: addresses, title: 'Confira os endereços', description: 'Verifique sua residência e seu local de trabalho antes de avançar.', alt: 'Etapa de confirmação dos endereços de residência e trabalho.' },
  { image: outbound, title: 'Cadastre a ida', description: 'Adicione o transporte, a linha e a tarifa de cada trecho de ida.', alt: 'Formulário do percurso de ida, com transporte, linha e valor.' },
  { image: inbound, title: 'Cadastre a volta', description: 'Informe também os trechos e as tarifas do retorno para casa.', alt: 'Formulário para adicionar os percursos de volta.' },
  { image: days, title: 'Revise os dias e valores', description: 'Informe os dias previstos de deslocamento e confira o resumo.', alt: 'Resumo do deslocamento com previsão de dias e valores.' },
  { image: terms, title: 'Leia a declaração', description: 'Confira o termo de responsabilidade antes de confirmar.', alt: 'Termo de responsabilidade apresentado pelo SouGov.' },
  { image: accept, title: 'Envie a solicitação', description: 'Ao concordar, selecione Aceitar os termos para encaminhar o pedido.', alt: 'Final do termo com o botão Aceitar os termos.' },
  { image: tracking, title: 'Acompanhe a análise', description: 'Consulte o andamento em Solicitações e aguarde a Gestão de Pessoas.', alt: 'Lista de solicitações mostrando um pedido de auxílio transporte em análise.' },
]

const updateSteps = [
  { image: update5, title: 'Acesse o benefício', description: 'Após entrar no SouGov, selecione Auxílio Transporte em Solicitações.', alt: 'Página do tutorial mostrando o acesso ao serviço Auxílio Transporte.' },
  { image: update6, title: 'Inicie a atualização', description: 'Escolha Alterar Auxílio Transporte para editar ou recadastrar o benefício.', alt: 'Tela do benefício com destaque em Alterar Auxílio Transporte.' },
  { image: update7, title: 'Confira os endereços', description: 'Revise os endereços, corrija o que for necessário e avance.', alt: 'Tela de endereços com os controles de edição destacados.' },
  { image: update8, title: 'Atualize a ida', description: 'Preencha os percursos de ida, adicione as informações e avance.', alt: 'Página do tutorial com o preenchimento do percurso de ida.' },
  { image: update9, title: 'Atualize a volta', description: 'Preencha os percursos de retorno, adicione as informações e avance.', alt: 'Página do tutorial com o preenchimento do percurso de volta.' },
  { image: update10, title: 'Revise os dias', description: 'Informe os dias de deslocamento no mês e confira os dados.', alt: 'Tela de conferência com a quantidade de dias de deslocamento.' },
  { image: update11, title: 'Conclua a atualização', description: 'Leia o termo e, se concordar, selecione Aceitar os termos.', alt: 'Tela de confirmação com destaque no botão Aceitar os termos.' },
]

const cancelSteps = [
  { image: cancel5, title: 'Acesse o benefício', description: 'Após entrar no SouGov, abra Auxílio Transporte no menu Solicitações.', alt: 'Página do tutorial de cancelamento mostrando o serviço Auxílio Transporte.' },
  { image: cancel6, title: 'Solicite o encerramento', description: 'Selecione Encerrar Auxílio Transporte para solicitar o cancelamento do benefício.', alt: 'Tela do benefício com o botão Encerrar Auxílio Transporte destacado.' },
]

const tutorials = {
  request: { steps: requestSteps, label: 'solicitação', source: 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/auxilio-transporte', sourceLabel: 'Portal do Servidor · SouGov', landscape: false },
  update: { steps: updateSteps, label: 'atualização', source: 'https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/07/06_alterar-ou-recadastrar-auxilia-transporte.pdf', sourceLabel: 'PROGEPE · Tutorial de atualização (PDF)', landscape: true },
  cancel: { steps: cancelSteps, label: 'cancelamento', source: 'https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/07/tutorial-como-encerrar-o-pagamento-de-auxilio-transporte.pdf', sourceLabel: 'PROGEPE · Tutorial de cancelamento (PDF)', landscape: true },
}

export function TransportTutorial({ kind = 'request' }: { kind?: keyof typeof tutorials }) {
  return <SouGovTutorial key={kind} tutorial={tutorials[kind]} />
}

