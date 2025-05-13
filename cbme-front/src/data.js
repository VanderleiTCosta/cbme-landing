// Importações de ícones
import { GiAchievement, GiTeacher } from "react-icons/gi";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaAward,
  FaHandshake,
  FaSchool,
  FaBook,
  FaSmile,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import {
  MdAccessibility,
  MdStars,
  MdGroups,
  MdPublic,
  MdComputer,
  MdBusinessCenter,
  MdHealthAndSafety,
} from "react-icons/md";

// Importações de imagens
import LogoImg from "../src/assets/img/header/Logo CBME - Fundo Transparente.png";
import HeroImg1 from "../src/assets/img/hero/1banners.png";
import HeroImg2 from "../src/assets/img/hero/2banners.png";

import Feature1Img from "../src/assets/img/features/Cursos livres - opção 02.jpg";
import Feature2Img from "../src/assets/img/features/professores.jpg";
import Feature3Img from "../src/assets/img/features/Plano de Negócio.jpg";
import ArrowRightImg from "../src/assets/img/features/arrow-right.svg";

import DireitoDigitalImg from "../src/assets/img/cursos/direito-digital.jpg";
import DireitoFinanceiroImg from "../src/assets/img/cursos/direito-financeiro.jpg";
import DireitoNotarialImg from "../src/assets/img/cursos/direito.jpg";

import ProdCursos from "./assets/img/produtos/Cursos livres - opção 01.jpg";
import Concursos from "./assets/img/produtos/Graduação.jpg";
import OAB from "./assets/img/produtos/oab.png";
import Noticia1 from "./assets/img/noticias/Planejamento Tributário.jpg";
import Noticia2 from "./assets/img/noticias/Planejamento Tributário.jpg";
import Noticia3 from "./assets/img/noticias/Planejamento Tributário.jpg";

import Psicanalista from "./assets/img/saude/psicanalise.jpg";
import Psicologo from "./assets/img/saude/psicologa.jpg";
import Pediatra from "./assets/img/saude/pediatria.jpg";
import Psiquiatra from "./assets/img/saude/psiquiatra.jpg";
import Enfermagem from "./assets/img/saude/enfermagem.jpg";
import Nutricionista from "./assets/img/saude/nutricionista.jpg";

const criarSlug = (texto) => {
  return texto
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
    .replace(/[\s_-]+/g, "-") // Substitui espaços e underscores por hífens
    .replace(/^-+|-+$/g, ""); // Remove hífens do início e do fim
};

// Dados do Header
export const header = {
  logo: LogoImg,
  btnText: "Acessar Conta",
};

// Navegação
export const nav = [
  { name: "Início", href: "/" },
  {
    name: "Institucional",
    dropdown: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Missão e Valores", href: "/missao" },
      { name: "Nossa Equipe", href: "/equipe" },
      { name: "Parceiros", href: "/parceiros" },
    ],
  },
  { name: "Cursos", href: "/cursos" },
  {
    name: "Saúde",
    dropdown: [
      { name: "Psicanalistas Clínico", href: "/saude/psicanalistas" },
      { name: "Psicólogos", href: "/saude/psicologos" },
      { name: "Pediatras", href: "/saude/pediatras" },
      { name: "Psiquiatras", href: "/saude/psiquiatras" },
      { name: "Enfermagem", href: "/saude/enfermagem" },
      { name: "Nutricionistas", href: "/saude/nutricionistas" },
    ],
  },
  { name: "Contato", href: "/contato" },
];

// Dados Institucionais
export const institucional = {
  timeline: [
    {
      year: "2013",
      title: "Fundação",
      description:
        "Nascimento da instituição.",
      icon: <FaAward className="text-red-600" />,
    },
    {
      year: "2018",
      title: "Iniciamos o EAD",
      description:
        "Lançamento da plataforma EAD completa, atendendo alunos de todo o país com cursos remotos.",
      icon: <FaBuilding className="text-red-600" />,
    },
    {
      year: "2020",
      title: "Reconhecimento",
      description:
        "Instituição de cursos com mais acessos no mês.",
      icon: <GiAchievement className="text-red-600" />,
    },
    {
      year: "2025",
      title: "Atualidade",
      description:
        "Mais de 500 alunos formados e parcerias com grandes empresas do setor.",
      icon: <FaUserGraduate className="text-red-600" />,
    },
  ],

  valores: [
    {
      icon: <MdStars className="text-3xl mb-2 text-red-600" />,
      title: "Excelência",
      description:
        "Compromisso inegociável com o mais alto padrão educacional em todas as nossas atividades e cursos.",
      cor: "bg-red-50",
    },
    {
      icon: <MdAccessibility className="text-3xl mb-2 text-red-600" />,
      title: "Acessibilidade",
      description:
        "Educação de qualidade para todos, com programas de bolsas e financiamento estudantil inclusivos.",
      cor: "bg-red-100",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl mb-2 text-red-600" />,
      title: "Inovação",
      description:
        "Métodos de ensino atualizados com tecnologia de ponta e abordagens pedagógicas modernas.",
      cor: "bg-red-50",
    },
    {
      icon: <MdGroups className="text-3xl mb-2 text-red-600" />,
      title: "Comunidade",
      description:
        "Integração ativa com a sociedade através de projetos sociais e extensão comunitária.",
      cor: "bg-red-100",
    },
    {
      icon: <GiTeacher className="text-3xl mb-2 text-red-600" />,
      title: "Respeito",
      description:
        "Valorização da diversidade e promoção de ambiente acolhedor para todos os perfis de alunos.",
      cor: "bg-red-50",
    },
    {
      icon: <MdPublic className="text-3xl mb-2 text-red-600" />,
      title: "Sustentabilidade",
      description:
        "Práticas institucionais ecologicamente responsáveis e formação de cidadãos conscientes.",
      cor: "bg-red-100",
    },
  ],

  equipe: [
    {
      name: "Ana Silva",
      role: "Diretora Geral",
      bio: "Doutora em Educação com 20 anos de experiência em gestão educacional.",
      departamento: "Administrativo",
      foto: "/img/equipe/ana.jpg",
    },
  ],

  numeros: [
    {
      valor: "11",
      label: "Anos de História",
      icone: <FaSchool className="text-4xl mb-2" />,
    },
    {
      valor: "50+",
      label: "Cursos Oferecidos",
      icone: <FaBook className="text-4xl mb-2" />,
    },
    {
      valor: "200+",
      label: "Alunos Formados",
      icone: <FaUserGraduate className="text-4xl mb-2" />,
    },
    {
      valor: "98%",
      label: "Índice de Satisfação",
      icone: <FaSmile className="text-4xl mb-2" />,
    },
    {
      valor: "50+",
      label: "Parceiros",
      icone: <FaHandshake className="text-4xl mb-2" />,
    },
    {
      valor: "2",
      label: "Unidades",
      icone: <FaBuilding className="text-4xl mb-2" />,
    },
  ],

  parceirosPagina: {
    titulo: "Nossos Parceiros",
    subtitulo: "Juntos transformando a educação",
    parceiros: [
      {
        nome: "Microsoft Educação",
        logo: "/img/parceiros/microsoft.png",
        descricao: "Parceria em tecnologia educacional e certificações",
        area: "Tecnologia",
      },
    ],
  },

  missaoVisao: {
    missao:
      "Democratizar o acesso à educação de qualidade através de metodologias inovadoras e formação humana integral, preparando cidadãos para os desafios do século XXI.",
    visao:
      "Ser referência nacional em educação transformadora até 2030, reconhecida pela excelência acadêmica e impacto social positivo em todas as comunidades onde atuamos.",
    principios:
      "Educação inclusiva, ética, inovação constante e compromisso com o desenvolvimento sustentável.",
  },
};

// Dados dos Cursos
export const cursos = {
  todosCursos: [
    {
      id: 1,
      delay: "500",
      categoria: "Direito",
      icone: <MdComputer className="text-3xl text-blue-600" />,
      titulo: "DIREITO DIGITAL",
      descricao:
        "O curso abordará temáticas atuais do Direito Digital, no intuito de expandir o conhecimento e agregar positivamente na carreira do profissional que o realizará.",
      duracao: "30h/aula",
      vagas: "30 alunos por turma",
      certificado: true,
      emprego: "85% de empregabilidade",
      destaques: [
        "Surgimento e Evolução da Internet",
        "LGPD",
        "Responsabilidade Civil e Moedas Digitais",
        "Jogos e Crimes na Internet",
      ],
      link: "#",
      imagem: DireitoDigitalImg,
      tipo: "Curso de Atualização",
      modalidade: "ONLINE",
      inicio: "06/11/2023",
      valor: "R$ 250,00",
      slug: criarSlug("DIREITO DIGITAL"),
      ministrante: {
        nome: "A definir",
        bio: "",
        foto: "/img/ministrantes/mariluza.jpg",
      },
      cronograma: [
        {
          modulo: "Módulo 1 - Surgimento e evolução da internet",
          aulas: [
            "Marco zero - Boas-vindas",
            "Aula 1 - Origem e conceitos fundamentais",
            "Aula 2 - Aspectos operacionais da internet",
            "Aula 3 - Internet e sua regulação",
            "Aula 4 - Direitos fundamentais no ambiente virtual",
            "Aula 5 - Marco civil da internet",
          ],
        },
        {
          modulo:
            "Módulo 2 - Lei de Proteção de Dados (LGPD), Responsabilidade Civil, Comércio Eletrônico e Moedas Digitais",
          aulas: [
            "Aula 1 - Proteção e tratamento de dados",
            "Aula 2 - Agentes de tratamento de dados e responsabilidade por danos",
            "Aula 3 - Responsabilidade civil e inteligência artificial",
            "Aula 4 - Responsabilidade contratual e reparação dos danos",
            "Aula 5 - Responsabilidade dos provedores de conteúdo e conexão de internet",
            "Aula 6 - Responsabilidade dos bancos, fraude bancária em transações de internet banking",
            "Aula 7 - Contrato eletrônico, regulamentação do e-commerce e assinatura digital",
            "Aula 8 - Proteção ao consumidor e direito ao arrependimento",
            "Aula 9 - Moedas digitais: blockchain e criptomoedas",
            "Aula 10 - Criptocorretoras, bitcoins, pix, pagamentos por aproximação e instantâneo",
          ],
        },
        {
          modulo: "Módulo 3 - Virtualização de jogos e crimes",
          aulas: [
            "Aula 1 - Meio ambiente virtual e o cyberbullying",
            "Aula 2 - Jogos digitais e metaverso",
            "Aula 3 - Aspectos gerais de crimes praticados na internet",
            "Aula 4 - Crimes contra a honra e racismo",
            "Aula 5 - Pornografia infantil e pornografia de revanche",
            "Aula 6 - Pirataria, clonagem, falsificação de cartões",
            "Aula 7 - Ações de combates aos crimes de informática, projetos de lei e legislação em vigor",
          ],
        },
      ],
    },
    {
      id: 2,
      delay: "600",
      categoria: "Direito",
      icone: <MdBusinessCenter className="text-3xl text-green-600" />,
      titulo: "DIREITO FINANCEIRO",
      descricao:
        "O curso abordará temáticas atuais do Direito Financeiro, no intuito de expandir o conhecimento e agregar positivamente na carreira do profissional que o realizará.",
      duracao: "30h/aula",
      vagas: "25 alunos por turma",
      certificado: true,
      emprego: "78% de empregabilidade",
      destaques: ["Planejamento", "Finanças", "Marketing", "Liderança"],
      link: "#",
      imagem: DireitoFinanceiroImg,
      tipo: "Curso de Atualização",
      modalidade: "ONLINE",
      inicio: "06/11/2023",
      valor: "R$ 250,00",
      slug: criarSlug("DIREITO FINANCEIRO"),
      ministrante: {
        nome: "A definir",
        bio: "",
        foto: "/img/ministrantes/daniel.jpg",
      },
      cronograma: [
        {
          modulo: "Módulo 1 - Introdução ao Direito Financeiro",
          aulas: [
            "Aula 1 - Conceitos fundamentais",
            "Aula 2 - Princípios do Direito Financeiro",
            "Aula 3 - Orçamento público",
          ],
        },
      ],
    },
    {
      id: 3,
      delay: "700",
      categoria: "Direito",
      icone: <MdHealthAndSafety className="text-3xl text-red-600" />,
      titulo: "DIREITO NOTARIAL E REGISTRAL",
      descricao:
        "O curso abordará temáticas atuais do Direito Notarial e Registral, no intuito de expandir o conhecimento e agregar positivamente na carreira do profissional que o realizará.",
      duracao: "30h/aula",
      vagas: "20 alunos por turma",
      certificado: true,
      emprego: "92% de empregabilidade",
      destaques: [
        "Primeiros Socorros",
        "Assistência",
        "Biossegurança",
        "Ética",
      ],
      link: "#",
      imagem: DireitoNotarialImg,
      tipo: "Curso de Atualização",
      modalidade: "ONLINE",
      inicio: "06/11/2023",
      valor: "R$ 250,00",
      slug: criarSlug("DIREITO NOTARIAL E REGISTRAL"),
      ministrante: {
        nome: "A definir",
        bio: "",
        foto: "/img/ministrantes/antonio.jpg",
      },
      cronograma: [
        {
          modulo: "Módulo 1 - Fundamentos do Direito Notarial",
          aulas: [
            "Aula 1 - Conceitos básicos",
            "Aula 2 - Atribuições notariais",
          ],
        },
      ],
    },
    //Adicionar mais cursos
  ],

  categorias: [
    {
      nome: "Todos",
      icone: <MdComputer />,
      cor: "bg-gray-800",
      corTexto: "text-white",
    },
    {
      nome: "Direito",
      icone: <MdComputer />,
      cor: "bg-gray-800",
      corTexto: "text-white",
    },
    //Add mais categorias
  ],

  tiposCursos: [
    { nome: "Todos", cor: "bg-gray-800" },
    { nome: "Livre", cor: "bg-blue-800" },
    { nome: "Curso de Atualização", cor: "bg-red-800" },
  ],

  filtrarPorCategoria: (categoria) => {
    return categoria === "Todos"
      ? cursos.todosCursos
      : cursos.todosCursos.filter((curso) => curso.categoria === categoria);
  },

  filtrarPorTipo: (tipo) => {
    return tipo === "Todos"
      ? cursos.todosCursos
      : cursos.todosCursos.filter((curso) => curso.tipo === tipo);
  },
};

// Hero Section
export const hero = {
  title: "INVISTA EM VOCÊ",
  subtitle: "Capacitação de qualidade no CBME para impulsionar sua carreira.",
  btnText: "Quero me Inscrever",
  carouselImages: [
    {
      image: HeroImg1,
      altText: "Estudantes em sala de aula",
    },
    {
      image: HeroImg2,
      altText: "Professores ensinando",
    },
  ],
};

// Produtos
export const produtosData = [
  {
    id: 1,
    titulo: "Cursos",
    imagem: ProdCursos,
    link: "/cursos",
    delay: "500",
  },
  {
    id: 2,
    titulo: "Concursos",
    imagem: Concursos,
    link: "/concursos",
    delay: "600",
  },
  {
    id: 3,
    titulo: "OAB",
    imagem: OAB,
    link: "/oab",
    delay: "700",
  },
];

// Notícias
export const noticiasData = [
  {
    id: 1,
    titulo: "Novos Cursos Disponíveis",
    resumo: "Confira nossa nova grade de cursos para este semestre",
    imagem: Noticia1,
    data: "15/05/2023",
    delay: "500",
  },
  {
    id: 2,
    titulo: "Resultado do Concurso",
    resumo: "Veja a lista de aprovados no último concurso",
    imagem: Noticia2,
    data: "10/05/2023",
    delay: "600",
  },
  {
    id: 3,
    titulo: "Dicas para a OAB",
    resumo: "Confira as melhores estratégias para a prova da OAB",
    imagem: Noticia3,
    data: "05/05/2023",
    delay: "700",
  },
];

// Features
export const featuresData = [
  {
    id: 1,
    titulo: "Flexibilidade de Horários",
    resumo:
      "Os cursos EAD permitem que o aluno estude no seu próprio ritmo, adaptando os horários à sua rotina pessoal e profissional.",
    imagem: Feature1Img,
    link: "/cursos",
    btnLink: "Ver Cursos",
    btnIcon: ArrowRightImg,
    data: "Atualizado em 02/05/2025",
    delay: "500",
    isMain: true,
  },
  {
    id: 2,
    titulo: "Professores Qualificados",
    resumo:
      "Corpo docente com experiência de mercado e formação acadêmica reconhecida em suas áreas de atuação.",
    imagem: Feature2Img,
    link: "/equipe",
    btnLink: "Conheça a Equipe",
    btnIcon: ArrowRightImg,
    data: "Atualizado em 02/05/2025",
    delay: "600",
  },
  {
    id: 3,
    titulo: "Cursos Modernos",
    resumo:
      "Cursos modernos e ministrados por professores que são referência em suas áreas de atuação.",
    imagem: Feature3Img,
    link: "/sobre",
    btnLink: "Sobre nós",
    btnIcon: ArrowRightImg,
    data: "Atualizado em 02/05/2025",
    delay: "700",
  },
];

//Saude
export const saude = {
  todasEspecialidades: [
    {
      id: 1,
      slug: "psicanalistas",
      titulo: "Psicanalistas Clínicos",
      categoria:"Psicanálise",
      descricao:
        "Atendimento psicanalítico especializado para diversos perfis e necessidades.",
      imagem: Psicanalista,
      duracaoConsulta: "50 minutos",
      modalidade: "Presencial e Online",
      valor: "R$ 200,00 por sessão",
      certificado: false,
      destaques: [
        "Psicanálise Freudiana",
        "Psicanálise Lacaniana",
        "Psicanálise Infantil",
      ],
      profissional: {
        nome: "Dra. Ana Silva",
        bio: "Psicanalista com 15 anos de experiência, especializada em psicanálise infantil e orientação familiar.",
        foto: "/img/profissionais/ana-silva.jpg",
        formacao: "Formada pela Sociedade Brasileira de Psicanálise",
        experiencia: "15 anos de experiência clínica",
      },
      abordagem: [
        {
          modulo: "Técnicas de Atendimento",
          itens: [
            "Associação livre",
            "Interpretação de sonhos",
            "Análise de resistências",
          ],
        },
        {
          modulo: "Áreas de Atuação",
          itens: [
            "Psicanálise infantil",
            "Crises existenciais",
            "Orientação familiar",
          ],
        },
      ],
    },
    {
      id: 2,
      slug: "psicologos",
      titulo: "Psicólogos Clínicos",
      categoria:"Psicologia",
      descricao:
        "Atendimento psicológico especializado para promoção de saúde mental e bem-estar emocional.",
      imagem: Psicologo,
      duracaoConsulta: "50 minutos",
      modalidade: "Presencial e Online",
      valor: "R$ 180,00 por sessão",
      certificado: false,
      destaques: [
        "Terapia Cognitivo-Comportamental",
        "Psicologia Positiva",
        "Aconselhamento psicológico",
      ],
      profissional: {
        nome: "Dr. Carlos Mendes",
        bio: "Psicólogo clínico com 12 anos de experiência, especializado em ansiedade e depressão.",
        foto: "/img/profissionais/carlos-mendes.jpg",
        formacao: "Formado pela Universidade de São Paulo (USP)",
        experiencia: "12 anos de experiência clínica",
      },
      abordagem: [
        {
          modulo: "Técnicas Utilizadas",
          itens: [
            "Terapia cognitivo-comportamental",
            "Mindfulness",
            "Técnicas de relaxamento",
          ],
        },
        {
          modulo: "Áreas de Atuação",
          itens: [
            "Ansiedade e depressão",
            "Orientação profissional",
            "Relacionamentos interpessoais",
          ],
        },
      ],
    },
    {
      id: 3,
      slug: "pediatras",
      titulo: "Pediatras",
      categoria:"Pediatria",
      descricao:
        "Cuidados especializados para a saúde infantil desde o nascimento até a adolescência.",
      imagem: Pediatra,
      duracaoConsulta: "30 minutos",
      modalidade: "Presencial",
      valor: "R$ 250,00 por consulta",
      certificado: true,
      destaques: [
        "Puericultura",
        "Vacinação",
        "Acompanhamento do desenvolvimento",
      ],
      profissional: {
        nome: "Dra. Juliana Oliveira",
        bio: "Pediatra com 10 anos de experiência, especializada em neonatologia e aleitamento materno.",
        foto: "/img/profissionais/juliana-oliveira.jpg",
        formacao: "Formada pela Universidade Federal do Rio de Janeiro (UFRJ)",
        experiencia: "10 anos de experiência em pediatria",
      },
      abordagem: [
        {
          modulo: "Serviços Oferecidos",
          itens: [
            "Consultas de rotina",
            "Acompanhamento do crescimento",
            "Orientações nutricionais",
          ],
        },
        {
          modulo: "Especialidades",
          itens: ["Neonatologia", "Alergia infantil", "Doenças respiratórias"],
        },
      ],
    },
    {
      id: 4,
      slug: "psiquiatras",
      titulo: "Psiquiatras",
      categoria:"Psiquiatria",
      descricao:
        "Diagnóstico e tratamento especializado para transtornos mentais e comportamentais.",
      imagem: Psiquiatra,
      duracaoConsulta: "50 minutos",
      modalidade: "Presencial e Online",
      valor: "R$ 300,00 por consulta",
      certificado: true,
      destaques: [
        "Psicofarmacologia",
        "Psiquiatria forense",
        "Interconsulta hospitalar",
      ],
      profissional: {
        nome: "Dr. Roberto Almeida",
        bio: "Psiquiatra com 18 anos de experiência, especializado em transtornos de humor e ansiedade.",
        foto: "/img/profissionais/roberto-almeida.jpg",
        formacao: "Formado pela Universidade Federal de Minas Gerais (UFMG)",
        experiencia: "18 anos de experiência em psiquiatria clínica",
      },
      abordagem: [
        {
          modulo: "Abordagens Terapêuticas",
          itens: [
            "Terapia medicamentosa",
            "Psicoterapia breve",
            "Intervenções em crise",
          ],
        },
        {
          modulo: "Transtornos Tratados",
          itens: [
            "Depressão e transtorno bipolar",
            "Transtornos de ansiedade",
            "Transtornos psicóticos",
          ],
        },
      ],
    },
    {
      id: 5,
      slug: "enfermagem",
      titulo: "Enfermeiros Especializados",
      categoria:"Enfermagem",
      descricao:
        "Cuidados de enfermagem especializados para diversas necessidades de saúde.",
      imagem: Enfermagem,
      duracaoConsulta: "40 minutos",
      modalidade: "Presencial e Domiciliar",
      valor: "R$ 150,00 por atendimento",
      certificado: true,
      destaques: [
        "Curativos especiais",
        "Administração de medicamentos",
        "Educação em saúde",
      ],
      profissional: {
        nome: "Enf. Marcelo Costa",
        bio: "Enfermeiro com 8 anos de experiência, especializado em feridas e estomaterapia.",
        foto: "/img/profissionais/marcelo-costa.jpg",
        formacao: "Formado pela Universidade Estadual de Campinas (UNICAMP)",
        experiencia: "8 anos de experiência em enfermagem clínica",
      },
      abordagem: [
        {
          modulo: "Serviços Prestados",
          itens: [
            "Aplicação de injetáveis",
            "Monitoramento de sinais vitais",
            "Coleta de exames",
          ],
        },
        {
          modulo: "Especialidades",
          itens: [
            "Estomaterapia",
            "Enfermagem em oncologia",
            "Cuidados paliativos",
          ],
        },
      ],
    },
    {
      id: 6,
      slug: "nutricionistas",
      titulo: "Nutricionistas",
      categoria:"Nutrição",
      descricao:
        "Orientações nutricionais personalizadas para promoção de saúde e qualidade de vida.",
      imagem: Nutricionista,
      duracaoConsulta: "45 minutos",
      modalidade: "Presencial e Online",
      valor: "R$ 170,00 por consulta",
      certificado: false,
      destaques: [
        "Nutrição esportiva",
        "Reeducação alimentar",
        "Nutrição funcional",
      ],
      profissional: {
        nome: "Dra. Fernanda Lima",
        bio: "Nutricionista com 7 anos de experiência, especializada em nutrição esportiva e emagrecimento saudável.",
        foto: "/img/profissionais/fernanda-lima.jpg",
        formacao: "Formada pela Universidade de Brasília (UnB)",
        experiencia: "7 anos de experiência em nutrição clínica",
      },
      abordagem: [
        {
          modulo: "Abordagens Nutricionais",
          itens: [
            "Avaliação corporal",
            "Planejamento alimentar personalizado",
            "Acompanhamento nutricional",
          ],
        },
        {
          modulo: "Áreas de Atuação",
          itens: [
            "Nutrição esportiva",
            "Distúrbios alimentares",
            "Nutrição materno-infantil",
          ],
        },
      ],
    },
    // Adicione outras especialidades seguindo o mesmo padrão
  ],

  categoriasSaude: [
    { nome: "Todos", cor: "bg-gray-800" },
    { nome: "Psicanálise", cor: "bg-gray-800" },
    { nome: "Psiquiatria", cor: "bg-gray-800" },
    { nome: "Psicologia", cor: "bg-gray-800" },
    { nome: "Pediatria", cor: "bg-gray-800" },
    { nome: "Enfermagem", cor: "bg-gray-800" },
    { nome: "Nutrição", cor: "bg-gray-800" },
    // Outras categorias
  ],
};

//Contato
export const contato = {
  titulo: "Fale Conosco",
  subtitulo: "Estamos aqui para ajudar. Entre em contato através dos nossos canais.",
  email: "contato@seusite.com",
  telefone: "(61) 99841-7200",
  whatsapp: "(61) 99841-7200",
  endereco: "Rua Exemplo, 123 - Centro, Cidade/Estado, CEP: 00000-000",
  horario: "Segunda a Sexta, das 8h às 18h",
  redesSociais: [
    {
      nome: "Facebook",
      icone: <FaFacebook />,
      url: "https://facebook.com/seufacebook",
      cor: "text-blue-600"
    },
    {
      nome: "Instagram",
      icone: <FaInstagram />,
      url: "https://instagram.com/seuinstagram", 
      cor: "text-pink-600"
    },
    {
      nome: "LinkedIn",
      icone: <FaLinkedin />,
      url: "https://linkedin.com/company/sualinkedin",
      cor: "text-blue-700"
    },
    {
      nome: "WhatsApp",
      icone: <FaWhatsapp />,
      url: `https://wa.me/${"00000000000".replace(/\D/g, '')}`,
      cor: "text-green-600"
    }
  ]
};

//Trabalhe conosco2a
export const trabalheConosco = {
  titulo: "Trabalhe Conosco",
  subtitulo: "Faça parte do time CBME e ajude-nos a transformar a educação",
  beneficios: [
    "Plano de carreira estruturado",
    "Ambiente de trabalho colaborativo",
    "Oportunidades de desenvolvimento profissional",
    "Benefícios competitivos",
    "Flexibilidade de horários (para algumas posições)",
    "Impacto social na educação"
  ],
  processoSeletivo: [
    { step: "1", title: "Análise do currículo", desc: "Nossa equipe analisará seu perfil" },
    { step: "2", title: "Entrevista inicial", desc: "Conversa com o RH para alinhamento" },
    { step: "3", title: "Entrevista técnica", desc: "Avaliação com a área contratante" },
    { step: "4", title: "Proposta", desc: "Envio da proposta formal" }
  ],
  areasInteresse: [
    "Administrativo",
    "Docência",
    "Coordenação",
    "TI",
    "Marketing",
    "Outros"
  ],
  emailDestino: "rh@cbme.edu.br", // Seu email para receber os currículos
  // Vagas disponíveis (pode ser atualizado dinamicamente)
  vagasDisponiveis: [
    { id: 1, titulo: "Professor de Direito", tipo: "CLT", local: "São Paulo/SP", ativo: true },
    { id: 2, titulo: "Coordenador Pedagógico", tipo: "CLT", local: "Remoto", ativo: true },
    { id: 3, titulo: "Assistente Administrativo", tipo: "Estágio", local: "Rio de Janeiro/RJ", ativo: false }
  ]
};

// Footer
export const footer = {
  logo: "/images/Logo CBME - Fundo Transparente.png",
  institucional: [
    { name: "Quem Somos", path: "/sobre" },
    { name: "Contato", path: "/contato" },
    { name: "Trabalhe Conosco", path: "/trabalhe-conosco" },
    { name: "Parcerias", path: "/parceiros" }
  ],
  servicos: [
    { name: "Saúde", path: "/saude" },
    { name: "Cursos Livres", path: "/cursos" },
    { name: "Cursos de Atualização", path: "/cursos" },
  ],
  redesSociais: [
    { nome: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
    { nome: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
    { nome: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
    { nome: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/seunumerodewhatsapp" }
  ],
  textoLogo: "CENTRO BRASILEIRO METROPOLITANO DE ENSINO",
  copyright: `© ${new Date().getFullYear()} CBME - Todos os direitos reservados`
};
