import { SouGovTutorial, type SouGovTutorialData } from '@/components/SouGovTutorial'
import service from '../../assets/sougov-atestados/servico.png'
import include from '../../assets/sougov-atestados/incluir.jpeg'
import attach from '../../assets/sougov-atestados/anexar.jpg'
import data from '../../assets/sougov-atestados/dados.png'
import medicalData from '../../assets/sougov-atestados/dados-medicos.png'
import contact from '../../assets/sougov-atestados/contato.jpg'
import additional from '../../assets/sougov-atestados/adicionais.jpeg'
import send from '../../assets/sougov-atestados/enviar.jpeg'
import documents from '../../assets/sougov-atestados/complementares.png'
import analysis from '../../assets/sougov-atestados/analise.png'

const tutorial: SouGovTutorialData = {
  label: 'envio de atestados de saúde',
  source: 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/minha-saude/atestado/1-como-incluir-atestado-de-saude-no-aplicativo-sou-gov-br',
  sourceLabel: 'Portal do Servidor · SouGov',
  landscape: false,
  steps: [
    { image: service, title: 'Acesse Minha Saúde', description: 'Confira seu vínculo e busque Minha Saúde em Todos os serviços. Selecione Atestado.', alt: 'Tela Minha Saúde com a opção Atestado.' },
    { image: include, title: 'Inclua um atestado', description: 'Selecione Incluir para iniciar o envio.', alt: 'Tela de atestados com a opção Incluir.' },
    { image: attach, title: 'Anexe o atestado', description: 'Fotografe o documento ou selecione o arquivo. Guarde o original para eventual perícia.', alt: 'Primeira etapa com o campo para anexar o atestado.' },
    { image: data, title: 'Confira os dados', description: 'Revise as informações extraídas da imagem e corrija eventuais diferenças.', alt: 'Campos de identificação do profissional e do afastamento.' },
    { image: medicalData, title: 'Complete as informações', description: 'Preencha os campos obrigatórios conforme o atestado e avance.', alt: 'Continuação dos dados do atestado de saúde.' },
    { image: contact, title: 'Informe seu contato', description: 'Preencha DDD e telefone. Leia as opções adicionais e marque as aplicáveis.', alt: 'Dados adicionais com telefone para contato.' },
    { image: additional, title: 'Revise as opções adicionais', description: 'Confira as opções sobre localidade e perícia, confirme quando solicitado e avance.', alt: 'Opções de localidade e perícia hospitalar ou domiciliar.' },
    { image: send, title: 'Confira e envie', description: 'Revise os dados e a unidade de destino. Se estiverem corretos, selecione Enviar.', alt: 'Etapa de conferência com o botão Enviar.' },
    { image: documents, title: 'Documentos complementares', description: 'Inclua documentos para avaliação pericial, se houver, ou selecione Não possuo documento.', alt: 'Mensagem oferecendo inclusão de documentos complementares.' },
    { image: analysis, title: 'Acompanhe o envio', description: 'Confira o atestado enviado para análise no SouGov.', alt: 'Tela de atestados enviados para análise.' },
  ],
}

export function MedicalCertificateTutorial() {
  return <SouGovTutorial tutorial={tutorial} />
}
