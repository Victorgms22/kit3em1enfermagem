import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays, Calculator, Files, CalendarCheck, Brain, Target, Layers, Smartphone,
  GraduationCap, BookOpen, BriefcaseMedical, Stethoscope, ClipboardCheck, ShieldCheck, Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/hero-kit.jpg";
import { useWebMCP } from "use-webmcp-tool";
import { runWebMCPTool } from "@/lib/webmcp-telemetry";
import { overviewText, faqText } from "@/lib/kit-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit 3 em 1 de Enfermagem | Cronograma, Cálculos e 2.000 Questões" },
      { name: "description", content: "Cronograma de estudos, cálculo e administração de medicamentos e 2.000 questões de Enfermagem em um único kit digital." },
      { property: "og:title", content: "Kit 3 em 1 de Enfermagem" },
      { property: "og:description", content: "Organize seus estudos, revise cálculos de medicamentos e pratique com 2.000 questões." },
    ],
  }),
  component: Index,
});

const CTA = ({ children }: { children: string }) => (
  <Button asChild variant="cta" size="xl"><a href="#compra">{children}</a></Button>
);

const materiais = [
  { icon: CalendarDays, t: "1. Cronograma de Estudos", d: "Organize sua rotina de estudos, distribua os conteúdos ao longo do tempo e estabeleça uma sequência de aprendizado mais consistente." },
  { icon: Calculator, t: "2. Cálculo e Administração de Medicamentos", d: "Reforce seus conhecimentos sobre cálculos relacionados a medicamentos e revise conceitos importantes para sua formação em Enfermagem." },
  { icon: Files, t: "3. 2.000 Questões de Enfermagem", d: "Pratique seus conhecimentos com uma coleção de 2.000 questões para revisar conteúdos, analisar alternativas e identificar pontos que precisam de mais atenção." },
];
const beneficios = [
  { icon: CalendarCheck, t: "Mais organização", d: "Utilize o cronograma como apoio para planejar suas sessões de estudo e distribuir melhor seu tempo." },
  { icon: Calculator, t: "Revisão de cálculos", d: "Dedique momentos específicos à revisão de cálculos e conceitos relacionados à administração de medicamentos." },
  { icon: Brain, t: "Aprendizado ativo", d: "Utilize as questões para praticar, recordar informações e avaliar sua compreensão dos assuntos estudados." },
  { icon: Target, t: "Mais direcionamento", d: "Identifique os assuntos que precisam de reforço e organize suas próximas revisões de acordo com suas dificuldades." },
  { icon: Layers, t: "Três recursos complementares", d: "Combine planejamento, revisão de conteúdos e resolução de questões em uma única estratégia de estudos." },
  { icon: Smartphone, t: "Praticidade no dia a dia", d: "Consulte os materiais nos dispositivos compatíveis com os formatos disponibilizados." },
];
const publico = [
  { icon: GraduationCap, t: "Estudantes de Enfermagem", d: "Para quem deseja organizar os estudos, revisar cálculos e praticar os conteúdos aprendidos durante a formação." },
  { icon: BookOpen, t: "Quem Precisa Reforçar os Conteúdos", d: "Para quem deseja retomar assuntos importantes, praticar questões e construir uma rotina de revisão." },
  { icon: BriefcaseMedical, t: "Candidatos a Concursos e Processos Seletivos", d: "Para quem busca materiais complementares para sua preparação, considerando os conteúdos exigidos em cada edital." },
  { icon: Stethoscope, t: "Profissionais de Enfermagem", d: "Para quem deseja revisar conhecimentos teóricos e utilizar materiais educacionais como apoio à atualização." },
];
const passos = [
  ["Organize sua rotina", "Comece pelo cronograma de estudos e planeje os conteúdos que deseja revisar em cada sessão."],
  ["Revise cálculos e medicamentos", "Reserve momentos para estudar os conceitos e exemplos apresentados no material de cálculo e administração de medicamentos."],
  ["Pratique com as questões", "Resolva as questões de Enfermagem para testar sua compreensão e identificar temas que merecem mais atenção."],
  ["Retome os assuntos necessários", "Registre suas dificuldades, volte aos conteúdos correspondentes e ajuste seu planejamento de estudos."],
];
const diferencial = [
  { icon: CalendarDays, t: "Planejamento", d: "Cronograma de estudos para ajudar na organização da rotina." },
  { icon: Calculator, t: "Revisão técnica", d: "Material de cálculo e administração de medicamentos para reforçar os conhecimentos teóricos." },
  { icon: ClipboardCheck, t: "Prática", d: "2.000 questões de Enfermagem para exercícios e revisão." },
];
const ofertaBeneficios = [
  "Três materiais reunidos em um único kit",
  "Apoio à organização da rotina de estudos",
  "Revisão de cálculos e conceitos sobre medicamentos",
  "2.000 questões para praticar conhecimentos em Enfermagem",
  "Possibilidade de combinar planejamento, revisão e exercícios",
  "Material complementar para a preparação acadêmica e profissional",
];
const PENDENTE = "Informação em breve.";
const faq: [string, string | null][] = [
  ["O que vem no Kit 3 em 1 de Enfermagem?", "O kit reúne três materiais digitais: um cronograma de estudos, um material de cálculo e administração de medicamentos e uma coleção com 2.000 questões de Enfermagem."],
  ["Como vou receber os materiais?", null],
  ["O cronograma de estudos pode ser adaptado à minha rotina?", "O cronograma serve como apoio para a organização dos estudos. Confira o formato disponibilizado para saber quais possibilidades de personalização estão incluídas."],
  ["O material de cálculo e administração de medicamentos substitui aulas práticas ou orientação profissional?", "Não. O material é um recurso educacional complementar e não substitui a formação supervisionada, os protocolos institucionais, a prescrição válida ou as orientações profissionais aplicáveis à prática segura de Enfermagem."],
  ["As 2.000 questões possuem gabarito?", null],
  ["As questões possuem respostas comentadas?", null],
  ["O kit pode ser utilizado para estudar para concursos?", "Os materiais podem servir como apoio à preparação. A adequação depende dos conteúdos abordados e das exigências do edital do concurso ou processo seletivo desejado."],
  ["Posso acessar os materiais pelo celular?", null],
  ["O acesso aos materiais é vitalício?", null],
  ["Como funciona o pagamento?", null],
];

type Item = { icon: React.ComponentType<{ className?: string }>; t: string; d: string };
function Grid({ items, cols }: { items: Item[]; cols: string }) {
  return (
    <div className={`mt-12 grid gap-6 ${cols}`}>
      {items.map(({ icon: Icon, t, d }) => (
        <div key={t} className="card-lift rounded-2xl border bg-card p-7">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}
function Head({ t, s, dark }: { t: string; s?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className={`text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? "text-primary-foreground" : "text-foreground"}`}>{t}</h2>
      {s && <p className={`mt-4 text-lg ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{s}</p>}
    </div>
  );
}

function Index() {
  useWebMCP({
    name: "get_kit_overview",
    description: "Describe the kit shown on this page: its 3 materials, audience, how to use it and price status.",
    annotations: { readOnlyHint: true },
    execute: () => runWebMCPTool("get_kit_overview", () => overviewText()),
  });
  useWebMCP({
    name: "search_faq",
    description: "List this page's frequently asked questions, optionally filtered by a keyword.",
    annotations: { readOnlyHint: true },
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Optional keyword, e.g. 'celular'." } },
    },
    execute: ({ query }: { query?: string }) =>
      runWebMCPTool("search_faq", () => {
        if (query !== undefined && typeof query !== "string") throw new Error("query must be text.");
        return faqText(query).text;
      }),
  });
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-dark-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">3 materiais digitais</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Kit 3 em 1 de Enfermagem: <span className="text-accent">Organize Seus Estudos</span> e Prepare-se com Mais Confiança
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Três materiais essenciais para ajudar você a organizar sua rotina, revisar cálculos de medicamentos e praticar seus conhecimentos em Enfermagem.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["3 materiais digitais em um único kit", "Cronograma para organizar a rotina de estudos", "Material de cálculo e administração de medicamentos", "2.000 questões de Enfermagem para praticar"].map((h) => (
                <li key={h} className="flex gap-2 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" />{h}</li>
              ))}
            </ul>
            <div className="mt-9"><CTA>QUERO MEU KIT 3 EM 1</CTA></div>
          </div>
          <img src={hero} width={1280} height={960} alt="Kit 3 em 1 de Enfermagem em notebook, tablet e celular" className="w-full rounded-3xl shadow-glow" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Conheça os 3 Materiais do Seu Kit" s="Tudo reunido para ajudar você a estudar com mais organização, revisar conhecimentos importantes e praticar o que aprendeu." />
          <Grid items={materiais} cols="md:grid-cols-3" />
          <div className="mt-12 text-center"><CTA>QUERO OS 3 MATERIAIS</CTA></div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Por Que Escolher o Kit 3 em 1?" s="Uma forma prática de reunir organização, revisão e exercícios em sua rotina de preparação." />
          <Grid items={beneficios} cols="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-12 text-center"><CTA>QUERO ESTUDAR COM MAIS ORGANIZAÇÃO</CTA></div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Para Quem É o Kit 3 em 1?" s="Materiais de apoio para diferentes etapas da jornada na Enfermagem." />
          <Grid items={publico} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Como Aproveitar os 3 Materiais?" s="Use cada recurso de forma complementar para criar uma rotina de estudos mais estruturada." />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {passos.map(([t, d], i) => (
              <li key={t} className="card-lift rounded-2xl bg-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">{i + 1}</span>
                <h3 className="mt-5 font-bold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Muito Mais do Que um Único Material de Estudos" s="O kit reúne três recursos com finalidades complementares para apoiar diferentes necessidades da sua preparação." />
          <Grid items={diferencial} cols="md:grid-cols-3" />
        </div>
      </section>

      {/* Oferta */}
      <section id="compra" className="bg-dark-gradient px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head dark t="Garanta Seu Kit 3 em 1 de Enfermagem" s="Tenha três materiais de apoio para organizar seus estudos, revisar cálculos de medicamentos e praticar seus conhecimentos." />
          <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-card p-8 shadow-glow md:p-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">Kit digital · 3 materiais</p>
            <h3 className="mt-2 text-center text-2xl font-extrabold text-foreground">Kit 3 em 1 de Enfermagem</h3>
            <ul className="mt-6 space-y-3">
              {ofertaBeneficios.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground"><Check className="h-5 w-5 shrink-0 text-accent" />{b}</li>
              ))}
            </ul>
            <div className="my-8 rounded-2xl bg-muted py-6 text-center">
              <p className="text-sm text-muted-foreground">Investimento</p>
              <p className="text-3xl font-extrabold text-primary">Definir preço</p>
            </div>
            <Button variant="cta" size="xl" className="w-full">QUERO GARANTIR MEU KIT 3 EM 1</Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-soft">
          <ShieldCheck className="h-10 w-10 text-accent" />
          <h2 className="text-2xl font-extrabold text-foreground">Informações Claras Para Comprar com Tranquilidade</h2>
          <p className="text-muted-foreground">Condições de pagamento, entrega digital, suporte e política de reembolso serão informadas aqui para que você saiba exatamente o que está adquirindo.</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <Head t="Dúvidas Frequentes Sobre o Kit 3 em 1" />
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faq.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`} className="rounded-xl border bg-card px-5">
                <AccordionTrigger className="text-left font-semibold text-foreground">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a ?? PENDENTE}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-dark-gradient px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <Head dark t="Três Materiais Para Dar Mais Estrutura aos Seus Estudos" s="Organize sua rotina, revise cálculos e administração de medicamentos e pratique seus conhecimentos com 2.000 questões de Enfermagem. Reúna esses três recursos em um único kit e avance nos estudos com mais planejamento." />
          <div className="mt-10"><CTA>QUERO MEU KIT 3 EM 1</CTA></div>
        </div>
      </section>

      <footer className="bg-secondary px-6 py-8 text-center text-sm text-secondary-foreground/70">
        © 2026 Kit 3 em 1 de Enfermagem. Todos os direitos reservados.
      </footer>
    </main>
  );
}
