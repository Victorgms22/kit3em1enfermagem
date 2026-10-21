// Public product info shared by the landing page agent tools and the MCP server.
export const KIT_NAME = "Kit 3 em 1 de Enfermagem";
export const PRICE_STATUS = "Preço ainda não definido.";

export const MATERIAIS = [
  { titulo: "Cronograma de Estudos", descricao: "Organize sua rotina de estudos, distribua os conteúdos ao longo do tempo e estabeleça uma sequência de aprendizado mais consistente." },
  { titulo: "Cálculo e Administração de Medicamentos", descricao: "Reforce seus conhecimentos sobre cálculos relacionados a medicamentos e revise conceitos importantes para sua formação em Enfermagem." },
  { titulo: "2.000 Questões de Enfermagem", descricao: "Pratique seus conhecimentos com uma coleção de 2.000 questões para revisar conteúdos, analisar alternativas e identificar pontos que precisam de mais atenção." },
];

export const PUBLICO = [
  "Estudantes de Enfermagem",
  "Quem precisa reforçar os conteúdos",
  "Candidatos a concursos e processos seletivos",
  "Profissionais de Enfermagem",
];

export const PASSOS = [
  "Organize sua rotina com o cronograma de estudos.",
  "Revise cálculos e administração de medicamentos.",
  "Pratique com as 2.000 questões.",
  "Retome os assuntos que precisam de reforço.",
];

const PENDENTE = "Informação em breve.";
export const FAQ: { pergunta: string; resposta: string }[] = [
  ["O que vem no Kit 3 em 1 de Enfermagem?", "O kit reúne três materiais digitais: um cronograma de estudos, um material de cálculo e administração de medicamentos e uma coleção com 2.000 questões de Enfermagem."],
  ["Como vou receber os materiais?", PENDENTE],
  ["O cronograma de estudos pode ser adaptado à minha rotina?", "O cronograma serve como apoio para a organização dos estudos. Confira o formato disponibilizado para saber quais possibilidades de personalização estão incluídas."],
  ["O material de cálculo e administração de medicamentos substitui aulas práticas ou orientação profissional?", "Não. O material é um recurso educacional complementar e não substitui a formação supervisionada, os protocolos institucionais, a prescrição válida ou as orientações profissionais aplicáveis à prática segura de Enfermagem."],
  ["As 2.000 questões possuem gabarito?", PENDENTE],
  ["As questões possuem respostas comentadas?", PENDENTE],
  ["O kit pode ser utilizado para estudar para concursos?", "Os materiais podem servir como apoio à preparação. A adequação depende dos conteúdos abordados e das exigências do edital do concurso ou processo seletivo desejado."],
  ["Posso acessar os materiais pelo celular?", PENDENTE],
  ["O acesso aos materiais é vitalício?", PENDENTE],
  ["Como funciona o pagamento?", PENDENTE],
].map(([pergunta, resposta]) => ({ pergunta, resposta }));

export function overviewText() {
  return [
    `${KIT_NAME} — ${PRICE_STATUS}`,
    "Materiais:",
    ...MATERIAIS.map((m, i) => `${i + 1}. ${m.titulo}: ${m.descricao}`),
    `Para quem: ${PUBLICO.join("; ")}.`,
    "Como usar:",
    ...PASSOS.map((p, i) => `${i + 1}. ${p}`),
  ].join("\n");
}

export function faqText(query?: string) {
  const q = query?.trim().toLowerCase();
  const items = q ? FAQ.filter((f) => `${f.pergunta} ${f.resposta}`.toLowerCase().includes(q)) : FAQ;
  return { items, text: items.length ? items.map((f) => `P: ${f.pergunta}\nR: ${f.resposta}`).join("\n\n") : "Nenhuma pergunta encontrada." };
}
