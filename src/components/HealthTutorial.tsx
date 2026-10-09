import { SouGovTutorial, type SouGovTutorialData } from '@/components/SouGovTutorial'
import imageServico from '../../assets/sougov-saude/servico.png'
import imageCadastrar from '../../assets/sougov-saude/cadastrar.png'
import imageModalidade from '../../assets/sougov-saude/modalidade.png'
import imageOperadora from '../../assets/sougov-saude/operadora.png'
import imagePlano from '../../assets/sougov-saude/plano.png'
import imageDependentes from '../../assets/sougov-saude/dependentes.png'
import imageValores from '../../assets/sougov-saude/valores.png'
import imageDocumentos from '../../assets/sougov-saude/documentos.png'
import imageConferencia from '../../assets/sougov-saude/conferencia.jpg'
import imageTermos from '../../assets/sougov-saude/termos.png'
import imageAtualizar1 from '../../assets/sougov-saude/atualizar-1.png'
import imageAtualizar2 from '../../assets/sougov-saude/atualizar-2.png'
import imageAtualizar3 from '../../assets/sougov-saude/atualizar-3.png'
import imageAtualizar4 from '../../assets/sougov-saude/atualizar-4.png'
import imageAtualizar5A from '../../assets/sougov-saude/atualizar-5a.png'
import imageAtualizar6 from '../../assets/sougov-saude/atualizar-6.png'
import imageAtualizar8 from '../../assets/sougov-saude/atualizar-8.png'
import imageAtualizar10 from '../../assets/sougov-saude/atualizar-10.png'
import imageEncerrar from '../../assets/sougov-saude/encerrar.png'
import imageCancelar1 from '../../assets/sougov-saude/cancelar-1.png'
import imageCancelar2 from '../../assets/sougov-saude/cancelar-2.png'
import imageCancelar4 from '../../assets/sougov-saude/cancelar-4.png'
import imageCancelar5 from '../../assets/sougov-saude/cancelar-5.png'
import imageAcompanhar from '../../assets/sougov-saude/acompanhar.png'

const tutorials: Record<'request' | 'update' | 'cancel', SouGovTutorialData> = {
  request: { label: 'solicitação de assistência à saúde suplementar', source: 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/saude-suplementar/como-solicitar-assistencia-a-saude-suplementar-teste', sourceLabel: 'Portal do Servidor · SouGov', landscape: false, steps: [
    { image: imageServico, title: "Encontre o serviço", description: "No SouGov, procure Saúde Suplementar em Todos os serviços.", alt: "Tela do SouGov: encontre o serviço." },
    { image: imageCadastrar, title: "Inicie o cadastro", description: "Selecione Cadastrar Assistência à Saúde.", alt: "Tela do SouGov: inicie o cadastro." },
    { image: imageModalidade, title: "Escolha a modalidade", description: "Indique Ressarcimento ou Convênio/Contrato, conforme seu plano. As telas oficiais exemplificam modalidades diferentes.", alt: "Tela do SouGov: escolha a modalidade." },
    { image: imageOperadora, title: "Informe a operadora", description: "Digite o registro da operadora na ANS, somente com números.", alt: "Tela do SouGov: informe a operadora." },
    { image: imagePlano, title: "Selecione o plano", description: "Escolha seu plano de saúde.", alt: "Tela do SouGov: selecione o plano." },
    { image: imageDependentes, title: "Selecione os dependentes", description: "Confira os dependentes habilitados no cadastro funcional.", alt: "Tela do SouGov: selecione os dependentes." },
    { image: imageValores, title: "Informe as mensalidades", description: "Preencha o valor pago por beneficiário.", alt: "Tela do SouGov: informe as mensalidades." },
    { image: imageDocumentos, title: "Anexe os documentos", description: "No ressarcimento, comprove titularidade e pagamento. Nas demais modalidades, anexe o formulário da operadora.", alt: "Tela do SouGov: anexe os documentos." },
    { image: imageConferencia, title: "Confira o pedido", description: "Revise os dados e avance.", alt: "Tela do SouGov: confira o pedido." },
    { image: imageTermos, title: "Conclua a solicitação", description: "Leia os termos, confirme sua concordância e acompanhe a análise em Solicitações.", alt: "Tela do SouGov: conclua a solicitação." },
  ] },
  update: { label: 'atualização de assistência à saúde suplementar', source: 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/saude-suplementar/copy_of_como-solicitar-assistencia-a-saude-suplementar', sourceLabel: 'Portal do Servidor · SouGov', landscape: false, steps: [
    { image: imageServico, title: "Acesse o benefício", description: "No SouGov, abra Saúde Suplementar.", alt: "Tela do SouGov: acesse o benefício." },
    { image: imageAtualizar1, title: "Inicie a alteração", description: "Selecione Alterar/Recadastrar Plano.", alt: "Tela do SouGov: inicie a alteração." },
    { image: imageAtualizar2, title: "Confira a operadora", description: "Informe o registro da operadora na ANS.", alt: "Tela do SouGov: confira a operadora." },
    { image: imageAtualizar3, title: "Confira o plano", description: "Selecione o plano correspondente ao seu contrato.", alt: "Tela do SouGov: confira o plano." },
    { image: imageAtualizar4, title: "Revise os dependentes", description: "Confira quais dependentes devem integrar o benefício.", alt: "Tela do SouGov: revise os dependentes." },
    { image: imageAtualizar5A, title: "Atualize as mensalidades", description: "Informe os valores por beneficiário.", alt: "Tela do SouGov: atualize as mensalidades." },
    { image: imageAtualizar6, title: "Atualize os comprovantes", description: "Anexe contrato ou declaração atualizada e comprovantes de pagamento.", alt: "Tela do SouGov: atualize os comprovantes." },
    { image: imageAtualizar8, title: "Revise a alteração", description: "Confira os dados antes de avançar.", alt: "Tela do SouGov: revise a alteração." },
    { image: imageAtualizar10, title: "Envie a atualização", description: "Leia e aceite os termos. Acompanhe o pedido em Solicitações.", alt: "Tela do SouGov: envie a atualização." },
  ] },
  cancel: { label: 'cancelamento de assistência à saúde suplementar', source: 'https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/saude-suplementar/encerrar-plano', sourceLabel: 'Portal do Servidor · SouGov', landscape: false, steps: [
    { image: imageServico, title: "Acesse o benefício", description: "No SouGov, abra Saúde Suplementar.", alt: "Tela do SouGov: acesse o benefício." },
    { image: imageEncerrar, title: "Inicie o encerramento", description: "Selecione Encerrar Plano.", alt: "Tela do SouGov: inicie o encerramento." },
    { image: imageCancelar1, title: "Leia as orientações", description: "Confira o aviso da Gestão de Pessoas. Para atualizar dados, utilize a opção de alteração.", alt: "Tela do SouGov: leia as orientações." },
    { image: imageCancelar2, title: "Comprove a quitação", description: "Anexe a declaração de quitação ou de valores pagos à operadora.", alt: "Tela do SouGov: comprove a quitação." },
    { image: imageCancelar4, title: "Confira o pedido", description: "Revise as informações do encerramento.", alt: "Tela do SouGov: confira o pedido." },
    { image: imageCancelar5, title: "Confirme os termos", description: "Leia os termos de encerramento e confirme sua concordância.", alt: "Tela do SouGov: confirme os termos." },
    { image: imageAcompanhar, title: "Acompanhe a análise", description: "Consulte Solicitações e aguarde a avaliação da Gestão de Pessoas.", alt: "Tela do SouGov: acompanhe a análise." },
  ] },
}

export function HealthTutorial({ kind }: { kind: keyof typeof tutorials }) {
  return <SouGovTutorial key={kind} tutorial={tutorials[kind]} />
}
