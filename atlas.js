
const PALETTE_CLASSES = ['cb-protanopia', 'cb-deuteranopia', 'cb-tritanopia', 'cb-achromatopsia'];
const PALETTE_OVERRIDES = {
  protanopia: {
    '--accent': '#0072b2',
    '--accent-2': '#005a8a',
    '--accent-3': '#f0e442',
    '--line': '#95b4c8',
    '--focus': '#00548b'
  },
  deuteranopia: {
    '--accent': '#d55e00',
    '--accent-2': '#9d4300',
    '--accent-3': '#56b4e9',
    '--line': '#c8b19a',
    '--focus': '#7f3200'
  },
  tritanopia: {
    '--accent': '#cc79a7',
    '--accent-2': '#8f5174',
    '--accent-3': '#0072b2',
    '--line': '#b9acc7',
    '--focus': '#6a3d58'
  },
  achromatopsia: {
    '--accent': '#2f2f2f',
    '--accent-2': '#1f1f1f',
    '--accent-3': '#767676',
    '--line': '#9b9b9b',
    '--muted': '#474747',
    '--focus': '#1d1d1d'
  }
};
const PALETTE_VARIABLES = Array.from(
  new Set(
    Object.values(PALETTE_OVERRIDES).flatMap((row) => Object.keys(row))
  )
);

const I18N = {
  es: {
    skip_content: 'Saltar al contenido',
    skip_timeline: 'Saltar a linea de tiempo',
    skip_sources: 'Saltar a fuentes',
    nav_timeline: 'Linea de tiempo',
    nav_components: 'Componentes',
    nav_gallery: 'Galeria',
    nav_displays: 'Pantallas',
    nav_frontiers: 'Fronteras',
    nav_curiosities: 'Curiosidades',
    nav_sources: 'Fuentes',
    lang_label: 'Idioma',
    access_button: 'Accesibilidad',
    access_title: 'Panel de accesibilidad avanzada',
    access_desc: 'Incluye perfiles de color para diferentes tipos de daltonismo y ajustes de lectura.',
    toggle_contrast: 'Contraste alto',
    toggle_text: 'Texto grande',
    toggle_motion: 'Reducir movimiento',
    toggle_speak: 'Escuchar resumen',
    palette_label: 'Paleta para vision cromatica',
    pal_normal: 'Vision estandar',
    pal_protanopia: 'Protanopia (rojo reducido)',
    pal_deuteranopia: 'Deuteranopia (verde reducido)',
    pal_tritanopia: 'Tritanopia (azul reducido)',
    pal_achromatopsia: 'Acromatopsia (sin color)',
    theme_label: 'Tema visual',
    theme_default: 'Clasico editorial',
    theme_ocean: 'Oceano tecnico',
    theme_sunrise: 'Solar historico',
    theme_graphite: 'Grafito nocturno',
    hero_tag: 'Verificado al 24 de marzo de 2026',
    hero_title: 'Historia real y <em>fronteras tecnicas</em> de la computacion',
    hero_text: 'Contenido ordenado por impacto historico, madurez tecnologica y evidencia cientifica de fuentes primarias.',
    hero_cta1: 'Explorar linea interactiva',
    hero_cta2: 'Ir a fronteras tecnicas',
    panel_title: 'Resumen ejecutivo',
    panel_1: 'Transicion de computo mecanico a IA multimodal',
    panel_2: 'Eventos de guerra, ciencia y red global incluidos',
    panel_3: 'Fronteras con traccion en industria y academia',
    panel_4: 'Fuentes primarias y papers enlazados',
    overview_tag: 'Estructura de lectura',
    overview_title: 'Informacion mejor ordenada para estudiar y comparar',
    overview_text: 'Primero contexto historico, luego componentes, despues fronteras y finalmente metodologia/fuentes.',
    kpi1_title: 'Verificacion temporal',
    kpi1_text: 'Datos revisados con corte: 24 de marzo de 2026.',
    kpi2_title: 'Fuentes primarias',
    kpi2_text: 'CERN, DARPA, IEA, W3C, Nature, Stanford HAI y mas.',
    kpi3_title: 'Accesibilidad',
    kpi3_text: 'WCAG, teclado, lector de pantalla y paletas para daltonismo.',
    kpi4_title: 'Uso educativo',
    kpi4_text: 'Cada bloque incluye contexto, impacto y evidencia.',
    timeline_tag: 'Menu temporal interactivo',
    timeline_title: 'Linea de tiempo con hitos clave (incluye guerra, red e IA)',
    timeline_text: 'Selecciona un evento para ver contexto historico, impacto tecnico y evidencia.',
    timeline_menu_title: 'Instancias historicas',
    components_tag: 'Componentes esenciales',
    components_title: 'Mas detalle por componente y por que importa',
    components_text: 'Informacion sintetizada para estudiar limites fisicos, eficiencia y adopcion industrial.',
    gallery_tag: 'Galeria visual real',
    gallery_title: 'Como se ven los hitos del hardware en imagenes',
    gallery_text: 'Fotos de referencia historica para ubicar escala fisica, materiales y cambios de diseno en distintas epocas.',
    comp_cpu_title: 'CPU y aceleradores',
    comp_cpu_text: 'De CPU general a arquitecturas heterogeneas con NPU y bloques especializados.',
    comp_mem_title: 'Memoria y ancho de banda',
    comp_mem_text: 'La memoria suele ser el cuello de botella real en cargas de IA.',
    comp_storage_title: 'Almacenamiento',
    comp_storage_text: 'La transicion a NVMe redefine latencia, throughput y costos operativos.',
    comp_network_title: 'Red y conectividad',
    comp_network_text: 'Sin red robusta no existe nube elastica ni edge de baja latencia.',
    hub_title: 'Como se ve cada componente y como evoluciona',
    hub_text: 'Vista esquematica, linea de evolucion y fuentes por componente.',
    hub_types: 'Tipos relevantes',
    frontiers_tag: 'Fronteras tecnicas 2026+',
    frontiers_title: 'Tecnologias con traccion en industria y academia',
    frontiers_text: 'Cada bloque incluye estado, barrera principal, evidencia y relevancia.',
    displays_tag: 'Pantallas y monitores',
    displays_title: 'Evolucion de visualizacion: CRT, LCD, OLED, mini-LED y mas',
    displays_text: 'Incluye como se ven las tecnologias de pantalla, ventajas tecnicas, limites y fuentes.',
    curiosities_tag: 'Curiosidades tecnicas',
    curiosities_title: 'Datos llamativos que explican por que la computacion cambio todo',
    curiosities_text: 'Pequenos hechos historicos y tecnicos con referencia para ampliar.',
    sources_tag: 'Fuentes y metodologia',
    sources_title: 'De donde sale cada dato',
    sources_text: 'Solo fuentes primarias o institucionales de alta credibilidad.',
    method_title: 'Metodo de verificacion',
    method_1: 'Fecha de corte de verificacion: 24 de marzo de 2026 (America/Montevideo).',
    method_2: 'Criterio: fuente primaria, consistencia historica y trazabilidad con enlace directo.',
    method_3: 'Si un dato es estimado, se marca como orientativo.',
    sources_caption: 'Referencias clave para historia y fronteras tecnicas.',
    col_topic: 'Tema',
    col_claim: 'Dato verificado',
    col_source: 'Fuente',
    col_type: 'Tipo',
    col_year: 'Ano',
    footer_line: 'Pagina educativa con contenido verificable, accesible y multilingue.',
    timeline_context: 'Contexto',
    timeline_impact: 'Impacto tecnico',
    timeline_evidence: 'Evidencia',
    timeline_engineering: 'Detalle de ingenieria',
    timeline_social: 'Impacto social/economico',
    announce_lang: 'Idioma cambiado a Espanol',
    announce_palette: 'Paleta aplicada',
    announce_theme: 'Tema aplicado',
    announce_contrast_on: 'Contraste alto activado',
    announce_contrast_off: 'Contraste alto desactivado',
    announce_text_on: 'Texto grande activado',
    announce_text_off: 'Texto grande desactivado',
    announce_motion_on: 'Movimiento reducido activado',
    announce_motion_off: 'Movimiento reducido desactivado',
    announce_speech_start: 'Lectura iniciada',
    announce_speech_unsupported: 'Este navegador no soporta lectura por voz',
    img_unavailable: 'Imagen no disponible',
    summary_audio: 'Resumen accesible: esta pagina presenta la evolucion de la computacion con evidencia primaria. Incluye linea de tiempo interactiva, detalles de componentes, galeria visual, fronteras tecnologicas y fuentes cientificas verificables.'
  }
};
I18N.en = {
  skip_content: 'Skip to content',
  skip_timeline: 'Skip to timeline',
  skip_sources: 'Skip to sources',
  nav_timeline: 'Timeline',
  nav_components: 'Components',
  nav_gallery: 'Gallery',
  nav_displays: 'Displays',
  nav_frontiers: 'Frontiers',
  nav_curiosities: 'Curiosities',
  nav_sources: 'Sources',
  lang_label: 'Language',
  access_button: 'Accessibility',
  access_title: 'Advanced accessibility panel',
  access_desc: 'Includes color profiles for color-vision deficiency and reading adjustments.',
  toggle_contrast: 'High contrast',
  toggle_text: 'Large text',
  toggle_motion: 'Reduce motion',
  toggle_speak: 'Read summary aloud',
  palette_label: 'Color-vision palette',
  pal_normal: 'Standard vision',
  pal_protanopia: 'Protanopia (reduced red)',
  pal_deuteranopia: 'Deuteranopia (reduced green)',
  pal_tritanopia: 'Tritanopia (reduced blue)',
  pal_achromatopsia: 'Achromatopsia (no color)',
  theme_label: 'Visual theme',
  theme_default: 'Editorial classic',
  theme_ocean: 'Technical ocean',
  theme_sunrise: 'Historical sunrise',
  theme_graphite: 'Graphite night',
  hero_tag: 'Verified on March 24, 2026',
  hero_title: 'Real history and <em>technical frontiers</em> of computing',
  hero_text: 'Structured by historical impact, technology maturity, and scientific evidence from primary sources.',
  hero_cta1: 'Explore interactive timeline',
  hero_cta2: 'Go to technical frontiers',
  panel_title: 'Executive summary',
  panel_1: 'Transition from mechanical computing to multimodal AI',
  panel_2: 'War, science, and global network milestones included',
  panel_3: 'Frontiers with industry and academic traction',
  panel_4: 'Primary sources and linked papers',
  overview_tag: 'Reading structure',
  overview_title: 'Better ordered information for study and comparison',
  overview_text: 'Historical context first, then components, then frontiers, then methods and sources.',
  kpi1_title: 'Time validation',
  kpi1_text: 'Data reviewed with cutoff: March 24, 2026.',
  kpi2_title: 'Primary sources',
  kpi2_text: 'CERN, DARPA, IEA, W3C, Nature, Stanford HAI and more.',
  kpi3_title: 'Accessibility',
  kpi3_text: 'WCAG, keyboard support, screen reader support, color-vision palettes.',
  kpi4_title: 'Educational use',
  kpi4_text: 'Each block includes context, impact, and evidence.',
  timeline_tag: 'Interactive temporal menu',
  timeline_title: 'Timeline with key milestones (war, networking, AI)',
  timeline_text: 'Pick an event to see historical context, technical impact, and evidence.',
  timeline_menu_title: 'Historical instances',
  components_tag: 'Core components',
  components_title: 'More detail per component and why it matters',
  components_text: 'Concise information to analyze physical limits, efficiency, and adoption.',
  gallery_tag: 'Real visual gallery',
  gallery_title: 'How hardware milestones look in real images',
  gallery_text: 'Reference photos to understand physical scale, materials, and design shifts across eras.',
  comp_cpu_title: 'CPU and accelerators',
  comp_cpu_text: 'From general CPU to heterogeneous chips with NPU and special blocks.',
  comp_mem_title: 'Memory and bandwidth',
  comp_mem_text: 'Memory is often the true bottleneck in modern AI workloads.',
  comp_storage_title: 'Storage',
  comp_storage_text: 'NVMe changed latency, throughput and operating costs.',
  comp_network_title: 'Networking',
  comp_network_text: 'No robust network means no elastic cloud or low-latency edge.',
  hub_title: 'How each component looks and evolves',
  hub_text: 'Schematic view, evolution line, and direct sources per component.',
  hub_types: 'Relevant types',
  frontiers_tag: 'Technical frontiers 2026+',
  frontiers_title: 'Technologies with industry and academic traction',
  frontiers_text: 'Each card covers status, main barrier, evidence, and relevance.',
  displays_tag: 'Displays and monitors',
  displays_title: 'Display evolution: CRT, LCD, OLED, mini-LED and more',
  displays_text: 'Includes visual look, technical strengths, limits and direct sources.',
  curiosities_tag: 'Technical curiosities',
  curiosities_title: 'Interesting facts that explain why computing changed everything',
  curiosities_text: 'Compact historical and technical facts with references.',
  sources_tag: 'Sources and method',
  sources_title: 'Where each claim comes from',
  sources_text: 'Only primary or high-credibility institutional references.',
  method_title: 'Verification method',
  method_1: 'Verification cutoff: March 24, 2026 (America/Montevideo).',
  method_2: 'Criteria: primary source, historical consistency, traceable direct link.',
  method_3: 'Estimated values are explicitly marked as orientative.',
  sources_caption: 'Key references for history and technical frontiers.',
  col_topic: 'Topic',
  col_claim: 'Verified claim',
  col_source: 'Source',
  col_type: 'Type',
  col_year: 'Year',
  footer_line: 'Educational page with verifiable, accessible, multilingual content.',
  timeline_context: 'Context',
  timeline_impact: 'Technical impact',
  timeline_evidence: 'Evidence',
  timeline_engineering: 'Engineering detail',
  timeline_social: 'Social/economic impact',
  announce_lang: 'Language changed to English',
  announce_palette: 'Palette applied',
  announce_theme: 'Theme applied',
  announce_contrast_on: 'High contrast enabled',
  announce_contrast_off: 'High contrast disabled',
  announce_text_on: 'Large text enabled',
  announce_text_off: 'Large text disabled',
  announce_motion_on: 'Reduced motion enabled',
  announce_motion_off: 'Reduced motion disabled',
  announce_speech_start: 'Reading started',
  announce_speech_unsupported: 'Speech synthesis is not supported by this browser',
  img_unavailable: 'Image unavailable',
  summary_audio: 'Accessible summary: this page covers computing evolution with primary-source evidence, including an interactive timeline, component details, a visual gallery, frontier technologies, and verifiable scientific references.'
};

I18N.pt = {
  skip_content: 'Ir para o conteudo',
  skip_timeline: 'Ir para a linha do tempo',
  skip_sources: 'Ir para as fontes',
  nav_timeline: 'Linha do tempo',
  nav_components: 'Componentes',
  nav_gallery: 'Galeria',
  nav_displays: 'Telas',
  nav_frontiers: 'Fronteiras',
  nav_curiosities: 'Curiosidades',
  nav_sources: 'Fontes',
  lang_label: 'Idioma',
  access_button: 'Acessibilidade',
  access_title: 'Painel de acessibilidade avancada',
  access_desc: 'Inclui perfis de cor para daltonismo e ajustes de leitura.',
  toggle_contrast: 'Alto contraste',
  toggle_text: 'Texto grande',
  toggle_motion: 'Reduzir movimento',
  toggle_speak: 'Ouvir resumo',
  palette_label: 'Paleta para visao cromatica',
  pal_normal: 'Visao padrao',
  pal_protanopia: 'Protanopia',
  pal_deuteranopia: 'Deuteranopia',
  pal_tritanopia: 'Tritanopia',
  pal_achromatopsia: 'Acromatopsia',
  theme_label: 'Tema visual',
  theme_default: 'Classico editorial',
  theme_ocean: 'Oceano tecnico',
  theme_sunrise: 'Solar historico',
  theme_graphite: 'Grafite noturno',
  hero_tag: 'Verificado em 24 de marco de 2026',
  hero_title: 'Historia real e <em>fronteiras tecnicas</em> da computacao',
  hero_text: 'Conteudo organizado por impacto historico, maturidade tecnologica e evidencia cientifica.',
  hero_cta1: 'Explorar linha interativa',
  hero_cta2: 'Ir para fronteiras tecnicas',
  panel_title: 'Resumo executivo',
  panel_1: 'Transicao do calculo mecanico para IA multimodal',
  panel_2: 'Eventos de guerra, ciencia e rede global incluidos',
  panel_3: 'Fronteiras com tracao industrial e academica',
  panel_4: 'Fontes primarias e artigos vinculados',
  overview_tag: 'Estrutura de leitura',
  overview_title: 'Informacao mais organizada para estudo e comparacao',
  overview_text: 'Primeiro contexto historico, depois componentes, fronteiras e fontes.',
  kpi1_title: 'Validacao temporal',
  kpi1_text: 'Dados revisados com corte: 24 de marco de 2026.',
  kpi2_title: 'Fontes primarias',
  kpi2_text: 'CERN, DARPA, IEA, W3C, Nature, Stanford HAI e mais.',
  kpi3_title: 'Acessibilidade',
  kpi3_text: 'WCAG, teclado, leitor de tela e paletas para daltonismo.',
  kpi4_title: 'Uso educacional',
  kpi4_text: 'Cada bloco inclui contexto, impacto e evidencia.',
  timeline_tag: 'Menu temporal interativo',
  timeline_title: 'Linha do tempo com marcos chave',
  timeline_text: 'Selecione um evento para ver contexto, impacto e evidencia.',
  timeline_menu_title: 'Instancias historicas',
  components_tag: 'Componentes essenciais',
  components_title: 'Mais detalhe por componente e sua relevancia',
  components_text: 'Informacao sintetizada para limites fisicos, eficiencia e adocao.',
  gallery_tag: 'Galeria visual real',
  gallery_title: 'Como os marcos de hardware aparecem em imagens',
  gallery_text: 'Fotos de referencia historica para entender escala fisica, materiais e mudancas de design.',
  comp_cpu_title: 'CPU e aceleradores',
  comp_cpu_text: 'Da CPU geral para arquiteturas heterogeneas com NPU.',
  comp_mem_title: 'Memoria e largura de banda',
  comp_mem_text: 'Memoria e um gargalo central em cargas modernas de IA.',
  comp_storage_title: 'Armazenamento',
  comp_storage_text: 'NVMe transformou latencia, throughput e custos operacionais.',
  comp_network_title: 'Rede e conectividade',
  comp_network_text: 'Sem rede robusta nao ha nuvem elastica nem edge.',
  hub_title: 'Como cada componente se parece e evolui',
  hub_text: 'Visual esquematico, linha de evolucao e fontes por componente.',
  hub_types: 'Tipos relevantes',
  frontiers_tag: 'Fronteiras tecnicas 2026+',
  frontiers_title: 'Tecnologias com tracao na industria e academia',
  frontiers_text: 'Cada bloco mostra estado, barreira principal e evidencia.',
  displays_tag: 'Telas e monitores',
  displays_title: 'Evolucao de visualizacao: CRT, LCD, OLED, mini-LED e mais',
  displays_text: 'Inclui visual, vantagens tecnicas, limites e fontes diretas.',
  curiosities_tag: 'Curiosidades tecnicas',
  curiosities_title: 'Fatos interessantes sobre a evolucao da computacao',
  curiosities_text: 'Fatos historicos e tecnicos com referencia para ampliar.',
  sources_tag: 'Fontes e metodologia',
  sources_title: 'De onde vem cada dado',
  sources_text: 'Somente fontes primarias ou institucionais confiaveis.',
  method_title: 'Metodo de verificacao',
  method_1: 'Data de corte: 24 de marco de 2026 (America/Montevideo).',
  method_2: 'Criterios: fonte primaria, consistencia historica e link direto.',
  method_3: 'Valores estimados sao marcados como orientativos.',
  sources_caption: 'Referencias chave para historia e fronteiras tecnicas.',
  col_topic: 'Tema',
  col_claim: 'Dado verificado',
  col_source: 'Fonte',
  col_type: 'Tipo',
  col_year: 'Ano',
  footer_line: 'Pagina educativa com conteudo verificavel, acessivel e multilingue.',
  timeline_context: 'Contexto',
  timeline_impact: 'Impacto tecnico',
  timeline_evidence: 'Evidencia',
  timeline_engineering: 'Detalhe de engenharia',
  timeline_social: 'Impacto social/economico',
  announce_lang: 'Idioma alterado para Portugues',
  announce_palette: 'Paleta aplicada',
  announce_theme: 'Tema aplicado',
  announce_contrast_on: 'Alto contraste ativado',
  announce_contrast_off: 'Alto contraste desativado',
  announce_text_on: 'Texto grande ativado',
  announce_text_off: 'Texto grande desativado',
  announce_motion_on: 'Movimento reduzido ativado',
  announce_motion_off: 'Movimento reduzido desativado',
  announce_speech_start: 'Leitura iniciada',
  announce_speech_unsupported: 'Este navegador nao suporta leitura por voz',
  img_unavailable: 'Imagem indisponivel',
  summary_audio: 'Resumo acessivel: esta pagina apresenta a evolucao da computacao com evidencia primaria, incluindo linha do tempo interativa, detalhes de componentes, galeria visual, fronteiras tecnologicas e referencias cientificas verificaveis.'
};

I18N.fr = {
  skip_content: 'Aller au contenu',
  skip_timeline: 'Aller a la chronologie',
  skip_sources: 'Aller aux sources',
  nav_timeline: 'Chronologie',
  nav_components: 'Composants',
  nav_gallery: 'Galerie',
  nav_displays: 'Ecrans',
  nav_frontiers: 'Frontieres',
  nav_curiosities: 'Curiosites',
  nav_sources: 'Sources',
  lang_label: 'Langue',
  access_button: 'Accessibilite',
  access_title: 'Panneau d accessibilite avancee',
  access_desc: 'Profils de couleur pour daltonisme et reglages de lecture.',
  toggle_contrast: 'Contraste eleve',
  toggle_text: 'Grand texte',
  toggle_motion: 'Reduire les animations',
  toggle_speak: 'Lire le resume',
  palette_label: 'Palette de vision des couleurs',
  pal_normal: 'Vision standard',
  pal_protanopia: 'Protanopie',
  pal_deuteranopia: 'Deuteranopie',
  pal_tritanopia: 'Tritanopie',
  pal_achromatopsia: 'Achromatopsie',
  theme_label: 'Theme visuel',
  theme_default: 'Classique editorial',
  theme_ocean: 'Ocean technique',
  theme_sunrise: 'Solaire historique',
  theme_graphite: 'Graphite nocturne',
  hero_tag: 'Verifie le 24 mars 2026',
  hero_title: 'Histoire reelle et <em>frontieres techniques</em> du calcul',
  hero_text: 'Contenu organise par impact historique, maturite technologique et preuves scientifiques.',
  hero_cta1: 'Explorer la chronologie',
  hero_cta2: 'Aller aux frontieres',
  panel_title: 'Resume executif',
  panel_1: 'Transition du calcul mecanique vers IA multimodale',
  panel_2: 'Evenements de guerre, science et reseau global inclus',
  panel_3: 'Frontieres avec traction industrielle et academique',
  panel_4: 'Sources primaires et articles relies',
  overview_tag: 'Structure de lecture',
  overview_title: 'Information mieux organisee pour etudier et comparer',
  overview_text: 'Contexte historique, composants, frontieres, puis sources.',
  kpi1_title: 'Verification temporelle',
  kpi1_text: 'Donnees revues avec coupure: 24 mars 2026.',
  kpi2_title: 'Sources primaires',
  kpi2_text: 'CERN, DARPA, IEA, W3C, Nature, Stanford HAI.',
  kpi3_title: 'Accessibilite',
  kpi3_text: 'WCAG, clavier, lecteur d ecran, palettes daltonisme.',
  kpi4_title: 'Usage educatif',
  kpi4_text: 'Chaque bloc inclut contexte, impact et preuve.',
  timeline_tag: 'Menu temporel interactif',
  timeline_title: 'Chronologie avec jalons cles',
  timeline_text: 'Choisissez un evenement pour voir contexte, impact et preuve.',
  timeline_menu_title: 'Instances historiques',
  components_tag: 'Composants essentiels',
  components_title: 'Plus de details par composant',
  components_text: 'Synthese pour limites physiques, efficacite et adoption.',
  gallery_tag: 'Galerie visuelle reelle',
  gallery_title: 'Comment les jalons materiels apparaissent en images',
  gallery_text: 'Photos de reference historique pour comprendre echelle, materiaux et evolutions de design.',
  comp_cpu_title: 'CPU et accelerateurs',
  comp_cpu_text: 'De CPU general a des puces heterogenes avec NPU.',
  comp_mem_title: 'Memoire et bande passante',
  comp_mem_text: 'La memoire est souvent le vrai goulot en IA.',
  comp_storage_title: 'Stockage',
  comp_storage_text: 'NVMe a transforme latence, debit et couts.',
  comp_network_title: 'Reseau et connectivite',
  comp_network_text: 'Sans reseau robuste, pas de cloud elastique ni edge.',
  hub_title: 'Comment chaque composant apparait et evolue',
  hub_text: 'Vue schematique, ligne d evolution et sources directes.', 
  hub_types: 'Types pertinents',
  frontiers_tag: 'Frontieres techniques 2026+',
  frontiers_title: 'Technologies avec traction industrie + academie',
  frontiers_text: 'Chaque bloc indique etat, barriere, preuve et pertinence.',
  displays_tag: 'Ecrans et moniteurs',
  displays_title: 'Evolution des ecrans: CRT, LCD, OLED, mini-LED et plus',
  displays_text: 'Inclut aspect visuel, avantages techniques, limites et sources.',
  curiosities_tag: 'Curiosites techniques',
  curiosities_title: 'Faits marquants sur l evolution du calcul',
  curiosities_text: 'Faits historiques et techniques avec references.',
  sources_tag: 'Sources et methode',
  sources_title: 'Origine de chaque donnee',
  sources_text: 'Seulement des sources primaires ou institutionnelles fiables.',
  method_title: 'Methode de verification',
  method_1: 'Date de verification: 24 mars 2026 (America/Montevideo).',
  method_2: 'Criteres: source primaire, coherence historique, lien direct.',
  method_3: 'Les estimations sont marquees comme orientatives.',
  sources_caption: 'References cles pour histoire et frontieres techniques.',
  col_topic: 'Theme',
  col_claim: 'Donnee verifiee',
  col_source: 'Source',
  col_type: 'Type',
  col_year: 'Annee',
  footer_line: 'Page educative, verifiable, accessible et multilingue.',
  timeline_context: 'Contexte',
  timeline_impact: 'Impact technique',
  timeline_evidence: 'Preuve',
  timeline_engineering: 'Detail d ingenierie',
  timeline_social: 'Impact social/economique',
  announce_lang: 'Langue changee en Francais',
  announce_palette: 'Palette appliquee',
  announce_theme: 'Theme applique',
  announce_contrast_on: 'Contraste eleve active',
  announce_contrast_off: 'Contraste eleve desactive',
  announce_text_on: 'Grand texte active',
  announce_text_off: 'Grand texte desactive',
  announce_motion_on: 'Reduction des animations activee',
  announce_motion_off: 'Reduction des animations desactivee',
  announce_speech_start: 'Lecture demarree',
  announce_speech_unsupported: 'Lecture vocale non prise en charge',
  img_unavailable: 'Image indisponible',
  summary_audio: 'Resume accessible: cette page presente l evolution du calcul avec des sources primaires, une chronologie interactive, des details de composants, une galerie visuelle, des frontieres technologiques et des references scientifiques verifiables.'
};

I18N.zh = {
  ...I18N.en,
  lang_label: '语言',
  access_button: '无障碍',
  access_title: '高级无障碍面板',
  theme_label: '视觉主题',
  hero_tag: '已验证：2026年3月24日',
  nav_timeline: '时间线',
  nav_components: '组件',
  nav_gallery: '图库',
  nav_displays: '显示器',
  nav_frontiers: '前沿',
  nav_curiosities: '趣闻',
  nav_sources: '来源',
  gallery_tag: '真实视觉图库',
  gallery_title: '硬件里程碑的真实外观',
  gallery_text: '用参考图片呈现各时代的物理尺度、材料和设计变化。',
  hub_types: '相关类型',
  img_unavailable: '图片不可用',
  summary_audio: '无障碍摘要：本页面以一手资料展示计算发展史，包含交互时间线、组件演进、视觉图库、前沿技术与可核验的科学来源。',
  announce_lang: '语言已切换为中文'
};

I18N.ru = {
  ...I18N.en,
  lang_label: 'Язык',
  access_button: 'Доступность',
  access_title: 'Расширенная панель доступности',
  theme_label: 'Визуальная тема',
  nav_timeline: 'Таймлайн',
  nav_components: 'Компоненты',
  nav_gallery: 'Галерея',
  nav_displays: 'Экраны',
  nav_frontiers: 'Фронтиры',
  nav_curiosities: 'Факты',
  nav_sources: 'Источники',
  gallery_tag: 'Реальная галерея',
  gallery_title: 'Как выглядят аппаратные вехи',
  gallery_text: 'Справочные изображения масштаба, материалов и эволюции дизайна по эпохам.',
  hub_types: 'Ключевые типы',
  img_unavailable: 'Изображение недоступно',
  summary_audio: 'Доступное резюме: на странице показана эволюция вычислений с первоисточниками, интерактивной шкалой времени, деталями компонентов, визуальной галереей, технологическими фронтирами и проверяемыми научными ссылками.',
  announce_lang: 'Язык переключен на русский'
};

I18N.ko = {
  ...I18N.en,
  lang_label: '언어',
  access_button: '접근성',
  access_title: '고급 접근성 패널',
  theme_label: '시각 테마',
  nav_timeline: '타임라인',
  nav_components: '구성요소',
  nav_gallery: '갤러리',
  nav_displays: '디스플레이',
  nav_frontiers: '프런티어',
  nav_curiosities: '흥미로운 사실',
  nav_sources: '출처',
  gallery_tag: '실제 시각 갤러리',
  gallery_title: '하드웨어 이정표의 실제 모습',
  gallery_text: '시대별 물리적 크기, 재료, 설계 변화가 보이는 참고 이미지 모음입니다.',
  hub_types: '관련 유형',
  img_unavailable: '이미지를 표시할 수 없습니다',
  summary_audio: '접근성 요약: 이 페이지는 1차 출처를 바탕으로 컴퓨팅의 진화를 설명하며, 인터랙티브 타임라인, 부품 진화, 시각 갤러리, 기술 프런티어, 검증 가능한 과학 출처를 포함합니다.',
  announce_lang: '언어가 한국어로 변경되었습니다'
};

I18N.ja = {
  ...I18N.en,
  lang_label: '言語',
  access_button: 'アクセシビリティ',
  access_title: '高度なアクセシビリティ設定',
  theme_label: '表示テーマ',
  nav_timeline: 'タイムライン',
  nav_components: 'コンポーネント',
  nav_gallery: 'ギャラリー',
  nav_displays: 'ディスプレイ',
  nav_frontiers: 'フロンティア',
  nav_curiosities: '豆知識',
  nav_sources: 'ソース',
  gallery_tag: '実写ビジュアルギャラリー',
  gallery_title: 'ハードウェアの節目を画像で見る',
  gallery_text: '時代ごとの物理的スケール、素材、設計変化を参照画像で確認できます。',
  hub_types: '主な種類',
  img_unavailable: '画像を表示できません',
  summary_audio: 'アクセシブル要約: このページは一次資料に基づき、計算技術の進化をインタラクティブ年表、コンポーネント詳細、ビジュアルギャラリー、次世代フロンティア、検証可能な科学的出典とともに紹介します。',
  announce_lang: '言語が日本語に変更されました'
};
const TIMELINE = {
  es: [
    {
      year: '1642',
      short: 'Pascalina',
      title: 'Pascalina: automatizacion mecanica de calculo',
      context: 'Blaise Pascal construye una maquina para sumas/restas repetitivas y reduce error manual.',
      engineering: 'Mecanismo de engranajes decimales con acarreo automatico entre ruedas.',
      social: 'Resuelve tareas contables y fiscales; inicia la idea de delegar computo a una maquina.',
      impact: [
        'Formaliza el concepto de calculo mecanizado.',
        'Introduce confiabilidad operativa en operaciones repetitivas.',
        'Abre camino para diseno de maquinas analiticas.'
      ],
      sources: [{ label: 'Computer History Timeline', url: 'https://www.computerhistory.org/timeline/computers/' }]
    },
    {
      year: '1944',
      short: 'Colossus y guerra',
      title: 'Colossus en Bletchley Park (Segunda Guerra Mundial)',
      context: 'El sistema Colossus se uso para criptoanalisis de trafico Lorenz durante la guerra.',
      engineering: 'Procesamiento electronico especializado para busqueda de patrones criptograficos.',
      social: 'El computo se vuelve una capacidad estrategica en defensa y geopolítica.',
      impact: [
        'Muestra el valor estrategico del calculo en conflicto militar.',
        'Acelera metodos de procesamiento electronico programable.',
        'Conecta seguridad nacional y nacimiento de la computacion moderna.'
      ],
      sources: [
        { label: 'TNMOC Colossus', url: 'https://www.tnmoc.org/colossus' },
        { label: 'CHM Timeline', url: 'https://www.computerhistory.org/timeline/computers/' }
      ]
    },
    {
      year: '1947-1958',
      short: 'Transistor + IC',
      title: 'Del transistor al circuito integrado',
      context: 'Descubrimiento del transistor (1947) y consolidacion del chip integrado (1958).',
      engineering: 'Sustitucion de valvulas por semiconductores y empaquetado de multiples dispositivos en un chip.',
      social: 'Disminuyen costos y tamano, habilitando computacion masiva en decadas siguientes.',
      impact: [
        'Reduce consumo energetico y aumenta confiabilidad.',
        'Permite miniaturizacion sostenida.',
        'Base del hardware digital moderno.'
      ],
      sources: [
        { label: 'Nobel Prize 1956', url: 'https://www.nobelprize.org/prizes/physics/1956/summary/' },
        { label: 'Nobel 2000 (Integrated Circuit)', url: 'https://www.nobelprize.org/prizes/physics/2000/summary/' }
      ]
    },
    {
      year: '1969',
      short: 'ARPANET',
      title: 'Demostracion inicial de ARPANET',
      context: 'DARPA documenta la demostracion de 1969 que inicia la red precursora de Internet.',
      engineering: 'Conmutacion de paquetes y nodos distribuidos para compartir recursos de computo.',
      social: 'Transforma la computacion de local a conectada, preparando colaboracion global.',
      impact: [
        'Introduce red de recursos computacionales distribuidos.',
        'Establece base de protocolos y conectividad global.',
        'Transforma computacion aislada en infraestructura de red.'
      ],
      sources: [{ label: 'DARPA ARPANET', url: 'https://www.darpa.mil/about/innovation-timeline/arpanet' }]
    },
    {
      year: '1971',
      short: 'Intel 4004',
      title: 'Primer microprocesador comercial',
      context: 'La familia MCS-4 marca el inicio formal de la computacion basada en microprocesadores.',
      engineering: 'CPU de 4 bits con 2,250 transistores integrada en un solo chip comercial.',
      social: 'Baja barrera de entrada para sistemas programables de pequeno formato.',
      impact: [
        'Lleva CPU a dispositivos compactos.',
        'Abre mercado de sistemas programables de bajo costo.',
        'Acelera la transicion hacia la PC y sistemas embebidos.'
      ],
      sources: [{ label: 'Intel 4004', url: 'https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html' }]
    },
    {
      year: '1981',
      short: 'IBM PC',
      title: 'La arquitectura de PC se estandariza',
      context: 'IBM PC acelera el ecosistema de software y hardware compatible en empresa y hogar.',
      engineering: 'Arquitectura abierta con componentes reemplazables y expansion por terceros.',
      social: 'Expande alfabetizacion digital y productividad de oficina a escala global.',
      impact: [
        'Consolida mercado de software de consumo.',
        'Estandariza plataformas y periféricos.',
        'Acerca computacion personal a gran escala.'
      ],
      sources: [{ label: 'IBM PC History', url: 'https://www.ibm.com/history/personal-computer' }]
    },
    {
      year: '1989-1993',
      short: 'Nacimiento de la Web',
      title: 'CERN: de la idea de la Web a su apertura publica',
      context: 'Tim Berners-Lee propone la Web en 1989; CERN libera software en dominio publico en 1993.',
      engineering: 'HTTP + HTML + URL crean un modelo estandar de documentos hipervinculados.',
      social: 'Internet se vuelve plataforma masiva para ciencia, comercio, educacion y cultura.',
      impact: [
        'Estandariza intercambio de informacion global.',
        'Multiplica adopcion de Internet en ciencia, educacion y negocio.',
        'Abre la economia digital moderna.'
      ],
      sources: [{ label: 'CERN Birth of Web', url: 'https://home.cern/science/computing/birth-web' }]
    },
    {
      year: '2007-2008',
      short: 'Computacion movil',
      title: 'Smartphone como plataforma de computo universal',
      context: 'La combinacion de iPhone y Android redefine la computadora personal como dispositivo de bolsillo.',
      engineering: 'Integracion SoC, sensores, GPU movil y conectividad permanente.',
      social: 'Acceso ubicuo a servicios digitales, trabajo remoto y economia de apps.',
      impact: [
        'Aumenta usuarios digitales globales de forma exponencial.',
        'Desplaza patrones de uso desde escritorio a movilidad.',
        'Normaliza experiencia always-on.'
      ],
      sources: [
        { label: 'Apple iPhone Launch', url: 'https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/' },
        { label: 'Android Versions (Google)', url: 'https://developer.android.com/about/versions' }
      ]
    },
    {
      year: '2012',
      short: 'Aceleracion deep learning',
      title: 'AlexNet y la aceleracion moderna de IA',
      context: 'El resultado en ImageNet de 2012 muestra salto de rendimiento y cambia el rumbo de la IA aplicada.',
      engineering: 'Entrenamiento profundo con GPU y capas convolucionales a escala.',
      social: 'Impulsa inversion en IA, vision computacional y aprendizaje automatico industrial.',
      impact: [
        'Dispara adopcion de infraestructura GPU para entrenamiento.',
        'Reconfigura roadmap de empresas de semiconductores y nube.',
        'Inicia oleada de modelos fundacionales.'
      ],
      sources: [{ label: 'NIPS AlexNet 2012', url: 'https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html' }]
    },
    {
      year: '2019-2023',
      short: 'Hitos cuanticos',
      title: 'Supremacia cuantica y avances en correccion de errores',
      context: 'Nature 2019 reporta Sycamore; Nature 2023 muestra mejora con surface code.',
      engineering: 'Avance desde demostracion puntual a reduccion de error logico en sistemas escalados.',
      social: 'Pasa de promesa abstracta a agenda concreta de investigacion e inversion.',
      impact: [
        'Pasa de demostracion puntual a hoja de ruta de escalabilidad.',
        'La correccion de errores se confirma como condicion critica.',
        'Acerca computacion cuantica a casos de uso cientificos reales.'
      ],
      sources: [
        { label: 'Nature 2019', url: 'https://www.nature.com/articles/s41586-019-1666-5' },
        { label: 'Nature 2023', url: 'https://www.nature.com/articles/s41586-022-05434-1' }
      ]
    },
    {
      year: '2022-2026',
      short: 'LLMs y produccion',
      title: 'Modelos de lenguaje en despliegue productivo',
      context: 'La IA generativa pasa de prototipo a herramienta de trabajo transversal en empresas y sector publico.',
      engineering: 'Modelos fundacionales multimodales, inferencia optimizada y orquestacion con herramientas.',
      social: 'Impacta productividad, empleo, educacion y regulacion tecnológica.',
      impact: [
        'Aumenta la demanda de computo especializado y memoria de alto ancho de banda.',
        'Genera nuevos flujos de trabajo humano+IA.',
        'Exige marcos de gobernanza, seguridad y auditoria.'
      ],
      sources: [
        { label: 'Stanford AI Index 2025', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
        { label: 'FDA AI Devices', url: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices' }
      ]
    }
  ]
};

TIMELINE.en = [
  {
    year: '1642',
    short: 'Pascaline',
    title: 'Pascaline: mechanical automation of arithmetic',
    context: 'Blaise Pascal built a machine for repetitive additions and subtractions, reducing manual accounting error.',
    engineering: 'Decimal gear wheels with automatic carry propagation between digits.',
    social: 'It demonstrated that calculation could be delegated to a machine in daily administrative work.',
    impact: [
      'Established the practical idea of mechanized arithmetic.',
      'Improved reliability for repetitive operations.',
      'Influenced later analytical machine design.'
    ],
    sources: TIMELINE.es[0].sources
  },
  {
    year: '1944',
    short: 'Colossus and war',
    title: 'Colossus at Bletchley Park (World War II)',
    context: 'Colossus systems were used for Lorenz traffic cryptanalysis during WWII.',
    engineering: 'Specialized electronic pattern processing for cryptographic inference.',
    social: 'Computing became a strategic capability tied to defense and geopolitics.',
    impact: [
      'Showed the strategic value of computation in wartime.',
      'Accelerated development of electronic processing methods.',
      'Connected national security with modern computing origins.'
    ],
    sources: TIMELINE.es[1].sources
  },
  {
    year: '1947-1958',
    short: 'Transistor + IC',
    title: 'From transistor to integrated circuit',
    context: 'The transistor (1947) and integrated circuit (1958) transformed hardware reliability and density.',
    engineering: 'Vacuum tubes gave way to semiconductors, then multiple devices per silicon die.',
    social: 'Lower size and cost enabled broad computing expansion in later decades.',
    impact: [
      'Reduced power consumption and hardware failure rates.',
      'Enabled sustained miniaturization.',
      'Created the base of modern digital hardware.'
    ],
    sources: TIMELINE.es[2].sources
  },
  {
    year: '1969',
    short: 'ARPANET',
    title: 'ARPANET initial demonstration',
    context: 'DARPA documents the 1969 demonstration that started the network lineage of today\'s Internet.',
    engineering: 'Packet switching and distributed nodes for shared compute resources.',
    social: 'Computing shifted from isolated machines to connected infrastructure.',
    impact: [
      'Introduced practical distributed resource sharing.',
      'Prepared protocol foundations for global networking.',
      'Changed computing into networked infrastructure.'
    ],
    sources: TIMELINE.es[3].sources
  },
  {
    year: '1971',
    short: 'Intel 4004',
    title: 'First commercial microprocessor',
    context: 'The Intel MCS-4 family formalized microprocessor-based computing.',
    engineering: 'A 4-bit CPU with 2,250 transistors integrated on one commercial chip.',
    social: 'Lowered the barrier for compact programmable systems.',
    impact: [
      'Brought CPU logic into compact devices.',
      'Opened low-cost programmable-system markets.',
      'Accelerated transition toward PCs and embedded systems.'
    ],
    sources: TIMELINE.es[4].sources
  },
  {
    year: '1981',
    short: 'IBM PC',
    title: 'PC architecture standardization',
    context: 'The IBM PC accelerated compatible software and hardware ecosystems across office and home contexts.',
    engineering: 'Open architecture with replaceable components and third-party expansion.',
    social: 'Expanded digital literacy and office productivity at global scale.',
    impact: [
      'Consolidated a consumer software market.',
      'Standardized platforms and peripherals.',
      'Scaled personal computing access.'
    ],
    sources: TIMELINE.es[5].sources
  },
  {
    year: '1989-1993',
    short: 'Birth of the Web',
    title: 'CERN: from Web proposal to public release',
    context: 'Tim Berners-Lee proposed the Web in 1989; CERN released key software publicly in 1993.',
    engineering: 'HTTP, HTML and URLs created a standard model for linked digital documents.',
    social: 'Internet became a mass platform for science, commerce, education and culture.',
    impact: [
      'Standardized global information exchange.',
      'Accelerated Internet adoption across sectors.',
      'Opened the modern digital economy.'
    ],
    sources: TIMELINE.es[6].sources
  },
  {
    year: '2007-2008',
    short: 'Mobile computing',
    title: 'Smartphone as universal computing platform',
    context: 'iPhone and Android shifted personal computing toward always-connected pocket devices.',
    engineering: 'SoC integration, sensors, mobile GPU, and continuous connectivity.',
    social: 'Enabled ubiquitous digital access and app-driven economies.',
    impact: [
      'Expanded digital user base at global scale.',
      'Moved usage from desktop-first to mobile-first.',
      'Normalized always-on interaction patterns.'
    ],
    sources: TIMELINE.es[7].sources
  },
  {
    year: '2012',
    short: 'Deep learning surge',
    title: 'AlexNet and modern AI acceleration',
    context: 'ImageNet 2012 results triggered a major shift toward deep-learning deployment.',
    engineering: 'Large-scale GPU training with deep convolutional networks.',
    social: 'Increased investment in AI infrastructure and applied machine learning.',
    impact: [
      'Boosted GPU infrastructure adoption for training.',
      'Changed semiconductor and cloud roadmaps.',
      'Started the foundation-model wave.'
    ],
    sources: TIMELINE.es[8].sources
  },
  {
    year: '2019-2023',
    short: 'Quantum milestones',
    title: 'Quantum supremacy and error-correction progress',
    context: 'Nature 2019 reports Sycamore; Nature 2023 shows stronger logical behavior with larger codes.',
    engineering: 'Progress from one-off demonstrations toward scalable error-correction pathways.',
    social: 'Quantum moved from abstract promise to concrete research and investment agendas.',
    impact: [
      'Shifted focus from demo to scalable roadmaps.',
      'Confirmed error correction as a central requirement.',
      'Brought quantum use-cases closer to practical science workloads.'
    ],
    sources: TIMELINE.es[9].sources
  },
  {
    year: '2022-2026',
    short: 'LLMs in production',
    title: 'Language models in cross-sector deployment',
    context: 'Generative AI moved from prototype to everyday tooling in private and public organizations.',
    engineering: 'Multimodal foundation models, optimized inference, and tool orchestration.',
    social: 'Impacted productivity, labor, education, and governance discussions.',
    impact: [
      'Increased demand for specialized compute and high-bandwidth memory.',
      'Created new human+AI workflows.',
      'Raised needs for governance, security, and auditability.'
    ],
    sources: TIMELINE.es[10].sources
  }
];
TIMELINE.pt = TIMELINE.en;
TIMELINE.fr = TIMELINE.en;
TIMELINE.zh = TIMELINE.en;
TIMELINE.ru = TIMELINE.en;
TIMELINE.ko = TIMELINE.en;
TIMELINE.ja = TIMELINE.en;

const COMPONENTS = {
  es: {
    cpu: [
      'De 2,250 transistores (Intel 4004) a chips con decenas de miles de millones.',
      'Arquitecturas heterogeneas (P-cores/E-cores/NPU) optimizan energia por tipo de tarea.',
      'Frecuencias altas importan menos que IPC, cache y paralelismo efectivo.',
      'En IA moderna, la coordinacion CPU-GPU-NPU es mas relevante que el clock aislado.',
      'Fuentes: Intel History, IEEE/ACM microarquitectura.'
    ],
    mem: [
      'HBM y DDR5 sostienen workloads de IA por ancho de banda y menor cuello de botella.',
      'La jerarquia L1/L2/L3 + DRAM domina el rendimiento real en inferencia/entrenamiento.',
      'Latencia y throughput compiten: no siempre mas frecuencia implica mejor respuesta.',
      'Capacidad por nodo define tamano de modelo utilizable sin swapping.',
      'Fuentes: JEDEC DDR5, papers de sistemas para IA.'
    ],
    storage: [
      'NVMe Gen5+ ofrece ordenes de magnitud menos latencia que HDD en acceso aleatorio.',
      'El SSD es clave para datasets, checkpoints y arranque rapido de servicios.',
      'Durabilidad (TBW) y control termico importan en cargas sostenidas de escritura.',
      'Object storage en nube complementa SSD local para escala y resiliencia.',
      'Fuentes: NVM Express, IBM storage history.'
    ],
    network: [
      '3GPP Rel-18 amplia capacidades 5G-Advanced para IA, IoT y eficiencia.',
      'ETSI MEC empuja computo al borde para latencia ultra baja.',
      'Red define throughput efectivo entre almacenamiento, CPU y aceleradores distribuidos.',
      'Sin QoS y orquestacion robusta no hay edge confiable a gran escala.',
      'Fuentes: 3GPP, ETSI MEC.'
    ]
  },
  en: {
    cpu: ['From 2,250 transistors (Intel 4004) to chips with tens of billions.', 'Heterogeneous architectures improve workload-specific efficiency.', 'NPUs reduce latency and power for on-device inference.'],
    mem: ['HBM and DDR5 sustain AI workloads through bandwidth.', 'Memory hierarchy is often the dominant bottleneck.', 'Cost and energy per bit remain critical constraints.'],
    storage: ['NVMe Gen5+ cuts latency by orders of magnitude vs HDD.', 'Persistence is split across edge and cloud.', 'Storage design directly affects startup and analytics speed.'],
    network: ['3GPP Rel-18 expands 5G-Advanced capabilities.', 'ETSI MEC pushes compute to the edge for ultra-low latency.', 'Connectivity determines distributed-system viability.']
  },
  pt: {
    cpu: ['De 2.250 transistores para chips com dezenas de bilhoes.', 'Arquiteturas heterogeneas melhoram eficiencia por tarefa.', 'NPUs reduzem latencia e energia na inferencia local.'],
    mem: ['HBM e DDR5 sustentam cargas de IA com alta banda.', 'A hierarquia de memoria e gargalo frequente.', 'Custo e energia por bit seguem criticos.'],
    storage: ['NVMe Gen5+ reduz latencia em ordens de grandeza.', 'Persistencia distribuida entre edge e cloud.', 'Armazenamento impacta arranque e analitica.'],
    network: ['3GPP Rel-18 amplia recursos do 5G-Advanced.', 'ETSI MEC leva computacao para a borda.', 'Conectividade define viabilidade de sistemas distribuidos.']
  },
  fr: {
    cpu: ['De 2 250 transistors a des puces avec des dizaines de milliards.', 'Les architectures heterogenes ameliorent l efficacite par charge.', 'Les NPU reduisent latence et energie en inference locale.'],
    mem: ['HBM et DDR5 soutiennent les charges IA.', 'La hierarchie memoire est souvent le goulot principal.', 'Cout et energie par bit restent critiques.'],
    storage: ['NVMe Gen5+ reduit fortement la latence vs HDD.', 'Persistance repartie entre edge et cloud.', 'Le stockage impacte directement performance et cout.'],
    network: ['3GPP Rel-18 etend les capacites 5G-Advanced.', 'ETSI MEC rapproche le calcul de l utilisateur.', 'La connectivite conditionne les systemes distribues.']
  }
};

COMPONENTS.zh = COMPONENTS.en;
COMPONENTS.ru = COMPONENTS.en;
COMPONENTS.ko = COMPONENTS.en;
COMPONENTS.ja = COMPONENTS.en;

const COMPONENT_VISUALS = {
  es: [
    {
      key: 'cpu',
      tab: 'CPU',
      title: 'Procesador (CPU): vista fisica simplificada',
      look: 'Chip cuadrado con encapsulado, contactos y bloques internos de cache/unidades de ejecucion.',
      types: ['CPU CISC (x86)', 'CPU RISC (ARM)', 'CPU heterogenea con NPU'],
      svg: `<svg class=\"hub-svg\" viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"45\" y=\"20\" width=\"170\" height=\"140\" rx=\"12\" fill=\"#1b1f2a\"/><rect x=\"72\" y=\"45\" width=\"116\" height=\"90\" rx=\"8\" fill=\"#2f3645\" stroke=\"#5d6a85\"/><rect x=\"86\" y=\"57\" width=\"40\" height=\"30\" fill=\"#5b6d8f\"/><rect x=\"134\" y=\"57\" width=\"40\" height=\"30\" fill=\"#7f90af\"/><rect x=\"86\" y=\"94\" width=\"88\" height=\"26\" fill=\"#4a556d\"/><g fill=\"#9c7a2d\">${Array.from({length:18},(_,i)=>`<rect x=\"${48+i*9}\" y=\"10\" width=\"5\" height=\"8\"/>`).join('')}${Array.from({length:18},(_,i)=>`<rect x=\"${48+i*9}\" y=\"162\" width=\"5\" height=\"8\"/>`).join('')}</g></svg>`,
      evolution: [
        { era: '1971', note: 'Intel 4004, 4 bits, 2,250 transistores, 10 um.' },
        { era: '1993', note: 'Pentium superescalar, millones de transistores.' },
        { era: '2026', note: 'CPU heterogenea + NPU con nodos sub-5 nm.' }
      ],
      sources: [
        { label: 'Intel 4004 History', url: 'https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html' },
        { label: 'CHM CPU Timeline', url: 'https://www.computerhistory.org/timeline/computers/' }
      ]
    },
    {
      key: 'mem',
      tab: 'Memoria',
      title: 'Memoria: bancos y rutas de acceso',
      look: 'Modulo con celdas repetitivas y bus de datos; en HBM el apilado vertical reduce distancia.',
      types: ['SRAM cache', 'DRAM DDR', 'HBM apilada'],
      svg: `<svg class=\"hub-svg\" viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"28\" y=\"38\" width=\"204\" height=\"104\" rx=\"8\" fill=\"#22303a\" stroke=\"#4f6a7a\"/><g fill=\"#78a6bf\">${Array.from({length:10},(_,i)=>`<rect x=\"${38+i*20}\" y=\"48\" width=\"14\" height=\"30\" rx=\"2\"/>`).join('')}${Array.from({length:10},(_,i)=>`<rect x=\"${38+i*20}\" y=\"86\" width=\"14\" height=\"30\" rx=\"2\"/>`).join('')}</g><rect x=\"80\" y=\"146\" width=\"100\" height=\"14\" rx=\"4\" fill=\"#9c7a2d\"/></svg>`,
      evolution: [
        { era: '1960s', note: 'Nucleo magnetico: robusto pero costoso y voluminoso.' },
        { era: '1980s', note: 'DRAM masiva: KB/MB accesibles para PC.' },
        { era: '2026', note: 'DDR5/HBM3e: ancho de banda para IA y HPC.' }
      ],
      sources: [
        { label: 'JEDEC DDR5', url: 'https://www.jedec.org/standards-documents/docs/jesd79-5c' },
        { label: 'CHM Memory History', url: 'https://www.computerhistory.org/timeline/memory-storage/' }
      ]
    },
    {
      key: 'storage',
      tab: 'Storage',
      title: 'Almacenamiento: de plato magnetico a NAND',
      look: 'Comparacion conceptual entre disco con partes moviles y modulo SSD de estado solido.',
      types: ['Cinta/HDD magnetico', 'SSD SATA', 'SSD NVMe'],
      svg: `<svg class=\"hub-svg\" viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"82\" cy=\"88\" r=\"48\" fill=\"#c8d2da\" stroke=\"#76879a\"/><circle cx=\"82\" cy=\"88\" r=\"10\" fill=\"#6f7e8f\"/><rect x=\"145\" y=\"52\" width=\"82\" height=\"72\" rx=\"8\" fill=\"#22303a\" stroke=\"#5d7891\"/><g fill=\"#7ea7bf\">${Array.from({length:3},(_,i)=>`<rect x=\"158\" y=\"62\" width=\"56\" height=\"14\" rx=\"3\" transform=\"translate(0 ${i*18})\"/>`).join('')}</g></svg>`,
      evolution: [
        { era: '1950s', note: 'Cinta magnetica para lotes y respaldo.' },
        { era: '1956-1980s', note: 'HDD: acceso aleatorio, luego masificacion en PC.' },
        { era: '2010s-2026', note: 'SSD NVMe: baja latencia y alto throughput.' }
      ],
      sources: [
        { label: 'IBM 350 Storage', url: 'https://www.ibm.com/history/ibm-350-disk-storage-unit' },
        { label: 'NVM Express Specs', url: 'https://nvmexpress.org/specification/nvm-express-base-specification/' }
      ]
    },
    {
      key: 'gpu',
      tab: 'GPU',
      title: 'GPU: paralelismo masivo',
      look: 'Tarjeta con multiples unidades de computo y memoria dedicada de alto ancho de banda.',
      types: ['GPU raster tradicional', 'GPU programable', 'GPU tensorial para IA'],
      svg: `<svg class=\"hub-svg\" viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"24\" y=\"38\" width=\"212\" height=\"104\" rx=\"10\" fill=\"#253042\" stroke=\"#5f7896\"/><rect x=\"42\" y=\"56\" width=\"64\" height=\"68\" rx=\"6\" fill=\"#6f89aa\"/><g fill=\"#8fb2d1\">${Array.from({length:4},(_,r)=>Array.from({length:5},(_,c)=>`<rect x=\"${118+c*20}\" y=\"${54+r*20}\" width=\"14\" height=\"14\" rx=\"2\"/>`).join('')).join('')}</g></svg>`,
      evolution: [
        { era: '1980s', note: 'Graficos basicos (CGA/EGA), pipeline fijo.' },
        { era: '1999', note: 'GPU 3D programable y auge de shaders.' },
        { era: '2026', note: 'Aceleracion tensorial para IA y simulacion.' }
      ],
      sources: [
        { label: 'NVIDIA Architecture', url: 'https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/' },
        { label: 'CHM Graphics Timeline', url: 'https://www.computerhistory.org/timeline/computers/' }
      ]
    },
    {
      key: 'network',
      tab: 'Red',
      title: 'Red: nodos, enlaces y edge',
      look: 'Topologia distribuida con nodos centrales y borde para baja latencia.',
      types: ['Red centralizada', 'Internet distribuida', 'Edge + 5G-Advanced'],
      svg: `<svg class=\"hub-svg\" viewBox=\"0 0 260 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"130\" cy=\"90\" r=\"24\" fill=\"#2c3f54\" stroke=\"#7aa5c9\"/><circle cx=\"58\" cy=\"52\" r=\"14\" fill=\"#7aa5c9\"/><circle cx=\"204\" cy=\"54\" r=\"14\" fill=\"#7aa5c9\"/><circle cx=\"52\" cy=\"128\" r=\"14\" fill=\"#7aa5c9\"/><circle cx=\"208\" cy=\"128\" r=\"14\" fill=\"#7aa5c9\"/><g stroke=\"#9bc3e0\" stroke-width=\"3\"><line x1=\"130\" y1=\"90\" x2=\"58\" y2=\"52\"/><line x1=\"130\" y1=\"90\" x2=\"204\" y2=\"54\"/><line x1=\"130\" y1=\"90\" x2=\"52\" y2=\"128\"/><line x1=\"130\" y1=\"90\" x2=\"208\" y2=\"128\"/></g></svg>`,
      evolution: [
        { era: '1969', note: 'ARPANET: red experimental de paquetes.' },
        { era: '1990s', note: 'Internet comercial masiva.' },
        { era: '2024-2026', note: '5G-Advanced + MEC para edge en tiempo real.' }
      ],
      sources: [
        { label: 'DARPA ARPANET', url: 'https://www.darpa.mil/about/innovation-timeline/arpanet' },
        { label: '3GPP Release 18', url: 'https://www.3gpp.org/specifications-technologies/releases/release-18' },
        { label: 'ETSI MEC', url: 'https://www.etsi.org/technologies/multi-access-edge-computing' }
      ]
    }
  ]
};

COMPONENT_VISUALS.en = COMPONENT_VISUALS.es.map((item, idx) => {
  const EN = [
    {
      tab: 'CPU',
      title: 'Processor (CPU): simplified physical view',
      look: 'Square package with contacts and internal cache/execution blocks.',
      types: ['CISC CPU (x86)', 'RISC CPU (ARM)', 'Heterogeneous CPU with NPU'],
      evolution: [
        { era: '1971', note: 'Intel 4004, 4-bit, 2,250 transistors, 10 um.' },
        { era: '1993', note: 'Superscalar Pentium era with millions of transistors.' },
        { era: '2026', note: 'Heterogeneous CPU + NPU on advanced sub-5 nm nodes.' }
      ]
    },
    {
      tab: 'Memory',
      title: 'Memory: banks and access paths',
      look: 'Module with repeated cells and data bus; stacked HBM shortens distance and improves throughput.',
      types: ['SRAM cache', 'DRAM DDR', 'Stacked HBM'],
      evolution: [
        { era: '1960s', note: 'Magnetic core memory: robust but bulky and expensive.' },
        { era: '1980s', note: 'Mass DRAM: KB/MB became practical for PCs.' },
        { era: '2026', note: 'DDR5/HBM3e for AI and HPC bandwidth demands.' }
      ]
    },
    {
      tab: 'Storage',
      title: 'Storage: from magnetic platters to NAND',
      look: 'Conceptual comparison between moving-part disk and solid-state SSD module.',
      types: ['Tape/HDD magnetic', 'SATA SSD', 'NVMe SSD'],
      evolution: [
        { era: '1950s', note: 'Magnetic tape for batch processing and backup.' },
        { era: '1956-1980s', note: 'HDD enabled random access and later PC adoption.' },
        { era: '2010s-2026', note: 'NVMe SSD brought low latency and high throughput.' }
      ]
    },
    {
      tab: 'GPU',
      title: 'GPU: massive parallelism',
      look: 'Board with many compute units and high-bandwidth dedicated memory.',
      types: ['Raster GPU', 'Programmable 3D GPU', 'Tensor GPU for AI'],
      evolution: [
        { era: '1980s', note: 'Basic graphics paths (CGA/EGA), fixed pipeline.' },
        { era: '1999', note: 'Programmable 3D GPUs and shader growth.' },
        { era: '2026', note: 'Tensor acceleration for AI and scientific simulation.' }
      ]
    },
    {
      tab: 'Network',
      title: 'Networking: nodes, links, and edge',
      look: 'Distributed topology with core and edge nodes for low-latency workloads.',
      types: ['Centralized network', 'Distributed Internet', 'Edge + 5G-Advanced'],
      evolution: [
        { era: '1969', note: 'ARPANET: experimental packet-switched network.' },
        { era: '1990s', note: 'Commercial Internet at mass scale.' },
        { era: '2024-2026', note: '5G-Advanced + MEC for real-time edge services.' }
      ]
    }
  ];
  return { ...item, ...EN[idx] };
});
COMPONENT_VISUALS.pt = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.fr = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.zh = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ru = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ko = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ja = COMPONENT_VISUALS.en;

const FRONTIERS = {
  es: [
    {
      status: 'madurando',
      title: 'Computacion cuantica aplicada',
      summary: 'Paso de demostraciones aisladas a progreso en correccion de errores y escalado logico.',
      points: [
        'Hito: experimento Sycamore (Nature, 2019).',
        'Avance: surface code con mejora al escalar (Nature, 2023).',
        'Barrera: mantener errores fisicos suficientemente bajos de forma estable.',
        'Impacto potencial: simulacion de materiales, optimizacion y quimica computacional.'
      ],
      links: [
        { label: 'Nature 2019', url: 'https://www.nature.com/articles/s41586-019-1666-5' },
        { label: 'Nature 2023', url: 'https://www.nature.com/articles/s41586-022-05434-1' }
      ]
    },
    {
      status: 'despliegue acelerado',
      title: 'IA generativa en produccion',
      summary: 'La evidencia reciente muestra adopcion empresarial fuerte y mejoras tecnicas rapidas.',
      points: [
        'AI Index 2025 reporta crecimiento de uso organizacional y de inversion.',
        'Mejoras fuertes en benchmarks tecnicos durante 2024-2025.',
        'Barrera: razonamiento complejo y confiabilidad en entornos criticos.',
        'Aplicaciones: salud, programacion asistida, analitica y automatizacion documental.'
      ],
      links: [
        { label: 'Stanford AI Index 2025', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
        { label: 'FDA AI Devices', url: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices' }
      ]
    },
    {
      status: 'infraestructura critica',
      title: 'Edge computing + 5G-Advanced',
      summary: 'Combina red y computo distribuido para latencias muy bajas y nuevas aplicaciones industriales.',
      points: [
        '3GPP Release 18 consolida capacidades de 5G-Advanced.',
        'ETSI MEC avanza con enfoque multi-dominio y seguridad.',
        'Barrera: interoperabilidad, orquestacion y seguridad en despliegues complejos.',
        'Uso: fabrica conectada, V2X, video analitico y control en tiempo real.'
      ],
      links: [
        { label: '3GPP Rel-18', url: 'https://www.3gpp.org/specifications-technologies/releases/release-18' },
        { label: 'ETSI MEC', url: 'https://www.etsi.org/technologies/multi-access-edge-computing' }
      ]
    },
    {
      status: 'investigacion avanzada',
      title: 'Computacion neuromorfica',
      summary: 'Arquitecturas inspiradas en cerebro para IA mas eficiente energeticamente.',
      points: [
        'Base academica: Loihi (IEEE Micro, DOI:10.1109/MM.2018.112130359).',
        'Escala reciente: Hala Point de Intel para investigacion (2024).',
        'Barrera: ecosistema de software y estandares maduros.',
        'Promesa: aprendizaje en linea con menor consumo por inferencia.'
      ],
      links: [
        { label: 'IEEE Xplore Loihi', url: 'https://ieeexplore.ieee.org/document/8259423' },
        { label: 'Intel Hala Point', url: 'https://newsroom.intel.com/artificial-intelligence/intel-builds-worlds-largest-neuromorphic-system-to-enable-more-sustainable-ai' }
      ]
    },
    {
      status: 'imperativo global',
      title: 'Computacion sostenible',
      summary: 'La demanda digital crece y la eficiencia energetica pasa a ser criterio de diseno central.',
      points: [
        'IEA estima que data centres y redes consumen cada uno 1-1.5% de la electricidad global.',
        'La eficiencia mejora, pero no evita por si sola la presion de demanda.',
        'Barrera: descarbonizacion de suministro y diseno termico a gran escala.',
        'Prioridad: medir energia por tarea, no solo rendimiento bruto.'
      ],
      links: [
        { label: 'IEA Data Centres', url: 'https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks' }
      ]
    }
  ]
};

FRONTIERS.en = FRONTIERS.es.map((f, idx) => ([
  {
    status: 'maturing', title: 'Applied quantum computing',
    summary: 'From isolated demos to measurable progress in error correction and logical scaling.',
    points: ['Milestone: Sycamore experiment (Nature, 2019).', 'Progress: surface code scaling gains (Nature, 2023).', 'Barrier: keeping physical errors consistently low.', 'Potential: material simulation, optimization, computational chemistry.'], links: f.links
  },
  {
    status: 'rapid deployment', title: 'Generative AI in production',
    summary: 'Recent evidence shows strong enterprise adoption and fast technical progress.',
    points: ['AI Index 2025 reports strong growth in usage and investment.', 'Large benchmark gains in a short period.', 'Barrier: reliability for complex reasoning in high-stakes contexts.', 'Use cases: healthcare, coding, analytics, document automation.'], links: f.links
  },
  {
    status: 'critical infrastructure', title: 'Edge computing + 5G-Advanced',
    summary: 'Combines networking and distributed compute for low-latency industrial applications.',
    points: ['3GPP Release 18 consolidates 5G-Advanced capabilities.', 'ETSI MEC extends multi-domain edge ecosystems.', 'Barrier: interoperability, orchestration and security.', 'Use cases: connected factories, V2X, real-time control.'], links: f.links
  },
  {
    status: 'advanced research', title: 'Neuromorphic computing',
    summary: 'Brain-inspired architectures for more energy-efficient AI.',
    points: ['Academic base: Loihi (IEEE Micro).', 'Recent scale: Intel Hala Point (2024).', 'Barrier: software stack and standardization.', 'Promise: online learning with low-power inference.'], links: f.links
  },
  {
    status: 'global imperative', title: 'Sustainable computing',
    summary: 'Digital demand growth makes energy efficiency a first-class design metric.',
    points: ['IEA reports data centres and networks each use about 1-1.5% global electricity.', 'Efficiency gains help but do not remove demand pressure.', 'Barrier: decarbonized supply and thermal design at scale.', 'Priority: optimize energy per task, not only raw performance.'], links: f.links
  }
][idx]));

FRONTIERS.pt = FRONTIERS.es.map((f, idx) => ([
  {
    status: 'em maturacao', title: 'Computacao quantica aplicada',
    summary: 'De demonstracoes isoladas para progresso em correcao de erros e escala logica.',
    points: ['Marco: experimento Sycamore (Nature, 2019).', 'Avanco: surface code com melhora de escala (Nature, 2023).', 'Barreira: manter erros fisicos baixos de forma estavel.', 'Potencial: simulacao de materiais e otimizacao.'], links: f.links
  },
  {
    status: 'adocao acelerada', title: 'IA generativa em producao',
    summary: 'Evidencia recente mostra forte adocao e progresso tecnico rapido.',
    points: ['AI Index 2025 indica crescimento de uso e investimento.', 'Ganhos relevantes em benchmarks no periodo 2024-2025.', 'Barreira: confiabilidade em raciocinio complexo.', 'Aplicacoes: saude, codigo, analitica e automacao documental.'], links: f.links
  },
  {
    status: 'infraestrutura critica', title: 'Edge computing + 5G-Advanced',
    summary: 'Rede e computacao distribuida para latencia ultrabaixa.',
    points: ['3GPP Rel-18 consolida capacidades 5G-Advanced.', 'ETSI MEC amplia ecossistemas de borda.', 'Barreira: interoperabilidade e seguranca.', 'Uso: fabrica conectada, V2X, controle em tempo real.'], links: f.links
  },
  {
    status: 'pesquisa avancada', title: 'Computacao neuromorfica',
    summary: 'Arquiteturas inspiradas no cerebro para IA energeticamente eficiente.',
    points: ['Base academica: Loihi (IEEE Micro).', 'Escala recente: Intel Hala Point (2024).', 'Barreira: ecossistema de software maduro.', 'Promessa: aprendizado online com menor consumo.'], links: f.links
  },
  {
    status: 'imperativo global', title: 'Computacao sustentavel',
    summary: 'Demanda digital crescente exige eficiencia energetica como criterio central.',
    points: ['IEA: data centers e redes em torno de 1-1.5% da eletricidade global.', 'Eficiencia ajuda, mas demanda continua crescendo.', 'Barreira: descarbonizacao e projeto termico.', 'Prioridade: energia por tarefa.'], links: f.links
  }
][idx]));

FRONTIERS.fr = FRONTIERS.en;
FRONTIERS.zh = FRONTIERS.en;
FRONTIERS.ru = FRONTIERS.en;
FRONTIERS.ko = FRONTIERS.en;
FRONTIERS.ja = FRONTIERS.en;
const SOURCES = [
  {
    topic: { es: 'Guerra y computacion', en: 'War and computing', pt: 'Guerra e computacao', fr: 'Guerre et calcul' },
    claim: { es: 'Colossus fue usado para criptoanalisis durante la Segunda Guerra Mundial.', en: 'Colossus was used for wartime cryptanalysis in WWII.', pt: 'Colossus foi usado em criptoanalise na Segunda Guerra.', fr: 'Colossus a ete utilise pour la cryptanalyse pendant la WWII.' },
    source: 'TNMOC / CHM', url: 'https://www.tnmoc.org/colossus',
    type: { es: 'Museo tecnico', en: 'Technical museum', pt: 'Museu tecnico', fr: 'Musee technique' }, year: '1944 / actual'
  },
  {
    topic: { es: 'Transistor', en: 'Transistor', pt: 'Transistor', fr: 'Transistor' },
    claim: { es: 'Nobel 1956 reconoce el descubrimiento del efecto transistor.', en: '1956 Nobel Prize recognizes transistor-effect discovery.', pt: 'Nobel de 1956 reconhece descoberta do efeito transistor.', fr: 'Le Nobel 1956 reconnait la decouverte de l effet transistor.' },
    source: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/physics/1956/summary/',
    type: { es: 'Institucional', en: 'Institutional', pt: 'Institucional', fr: 'Institutionnel' }, year: '1956'
  },
  {
    topic: { es: 'ARPANET', en: 'ARPANET', pt: 'ARPANET', fr: 'ARPANET' },
    claim: { es: 'DARPA documenta la demostracion inicial de ARPANET en 1969.', en: 'DARPA documents ARPANET initial demonstration in 1969.', pt: 'DARPA documenta demonstracao inicial da ARPANET em 1969.', fr: 'DARPA documente la demonstration initiale d ARPANET en 1969.' },
    source: 'DARPA', url: 'https://www.darpa.mil/about/innovation-timeline/arpanet',
    type: { es: 'Gobierno', en: 'Government', pt: 'Governo', fr: 'Gouvernement' }, year: '1969'
  },
  {
    topic: { es: 'World Wide Web', en: 'World Wide Web', pt: 'World Wide Web', fr: 'World Wide Web' },
    claim: { es: 'CERN indica invencion en 1989 y liberacion publica en 1993.', en: 'CERN states invention in 1989 and public-domain release in 1993.', pt: 'CERN indica invencao em 1989 e abertura em 1993.', fr: 'Le CERN indique invention en 1989 et ouverture en 1993.' },
    source: 'CERN', url: 'https://home.cern/science/computing/birth-web',
    type: { es: 'Institucional', en: 'Institutional', pt: 'Institucional', fr: 'Institutionnel' }, year: '1989-1993'
  },
  {
    topic: { es: 'Computacion cuantica', en: 'Quantum computing', pt: 'Computacao quantica', fr: 'Calcul quantique' },
    claim: { es: 'Nature 2019 reporta el experimento de supremacia cuantica con Sycamore.', en: 'Nature 2019 reports the Sycamore quantum-supremacy experiment.', pt: 'Nature 2019 reporta experimento de supremacia quantica com Sycamore.', fr: 'Nature 2019 rapporte l experience de suprematie quantique Sycamore.' },
    source: 'Nature', url: 'https://www.nature.com/articles/s41586-019-1666-5',
    type: { es: 'Paper revisado por pares', en: 'Peer-reviewed paper', pt: 'Artigo revisado por pares', fr: 'Article evalue par les pairs' }, year: '2019'
  },
  {
    topic: { es: 'Correccion de errores cuanticos', en: 'Quantum error correction', pt: 'Correcao de erros quanticos', fr: 'Correction d erreurs quantiques' },
    claim: { es: 'Nature 2023 muestra mejora al escalar logical qubits con surface code.', en: 'Nature 2023 shows improved logical performance with larger surface codes.', pt: 'Nature 2023 mostra melhora ao escalar logical qubits com surface code.', fr: 'Nature 2023 montre une amelioration en augmentant la taille du code.' },
    source: 'Nature', url: 'https://www.nature.com/articles/s41586-022-05434-1',
    type: { es: 'Paper revisado por pares', en: 'Peer-reviewed paper', pt: 'Artigo revisado por pares', fr: 'Article evalue par les pairs' }, year: '2023'
  },
  {
    topic: { es: 'IA en economia real', en: 'AI in real economy', pt: 'IA na economia real', fr: 'IA dans l economie reelle' },
    claim: { es: 'AI Index 2025 reporta aumento de adopcion e inversion en IA.', en: 'AI Index 2025 reports increased AI adoption and investment.', pt: 'AI Index 2025 reporta aumento de adocao e investimento em IA.', fr: 'AI Index 2025 signale une hausse d adoption et d investissement IA.' },
    source: 'Stanford HAI', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report',
    type: { es: 'Reporte institucional', en: 'Institutional report', pt: 'Relatorio institucional', fr: 'Rapport institutionnel' }, year: '2025'
  },
  {
    topic: { es: 'IA en salud', en: 'AI in healthcare', pt: 'IA na saude', fr: 'IA en sante' },
    claim: { es: 'FDA mantiene lista de dispositivos medicos habilitados por IA.', en: 'FDA maintains a list of AI-enabled authorized medical devices.', pt: 'FDA mantem lista de dispositivos medicos habilitados por IA.', fr: 'La FDA maintient une liste d appareils medicaux IA autorises.' },
    source: 'FDA', url: 'https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices',
    type: { es: 'Regulatorio', en: 'Regulatory', pt: 'Regulatorio', fr: 'Reglementaire' }, year: 'actual'
  },
  {
    topic: { es: '5G-Advanced', en: '5G-Advanced', pt: '5G-Advanced', fr: '5G-Advanced' },
    claim: { es: 'Release 18 define mejoras de 5G-Advanced, incluyendo AI/ML y eficiencia.', en: 'Release 18 defines 5G-Advanced improvements including AI/ML and efficiency.', pt: 'Release 18 define melhorias 5G-Advanced incluindo IA/ML e eficiencia.', fr: 'Release 18 definit des ameliorations 5G-Advanced incluant IA/ML.' },
    source: '3GPP', url: 'https://www.3gpp.org/specifications-technologies/releases/release-18',
    type: { es: 'Estandar', en: 'Standard', pt: 'Padrao', fr: 'Norme' }, year: '2024'
  },
  {
    topic: { es: 'Edge computing', en: 'Edge computing', pt: 'Edge computing', fr: 'Edge computing' },
    claim: { es: 'ETSI MEC describe latencia ultra baja y despliegue multi-dominio.', en: 'ETSI MEC describes ultra-low latency and multi-domain deployment.', pt: 'ETSI MEC descreve baixa latencia e implantacao multi-dominio.', fr: 'ETSI MEC decrit faible latence et deploiement multi-domaine.' },
    source: 'ETSI', url: 'https://www.etsi.org/technologies/multi-access-edge-computing',
    type: { es: 'Estandar/industria', en: 'Standard/industry', pt: 'Padrao/industria', fr: 'Norme/industrie' }, year: '2024'
  },
  {
    topic: { es: 'Energia digital', en: 'Digital energy', pt: 'Energia digital', fr: 'Energie numerique' },
    claim: { es: 'IEA reporta que data centres y redes usan cada uno ~1-1.5% de electricidad global.', en: 'IEA reports data centres and networks each use roughly 1-1.5% of global electricity.', pt: 'IEA reporta que data centers e redes usam ~1-1.5% cada da eletricidade global.', fr: 'IEA indique environ 1-1.5% de l electricite mondiale pour chacun.' },
    source: 'IEA', url: 'https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks',
    type: { es: 'Agencia internacional', en: 'International agency', pt: 'Agencia internacional', fr: 'Agence internationale' }, year: '2023-2026'
  },
  {
    topic: { es: 'Accesibilidad web', en: 'Web accessibility', pt: 'Acessibilidade web', fr: 'Accessibilite web' },
    claim: { es: 'WCAG 1.4.3 exige contraste minimo de 4.5:1 para texto normal.', en: 'WCAG 1.4.3 requires minimum 4.5:1 contrast for normal text.', pt: 'WCAG 1.4.3 exige contraste minimo 4.5:1 para texto normal.', fr: 'WCAG 1.4.3 exige un contraste minimum de 4.5:1.' },
    source: 'W3C WAI', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum',
    type: { es: 'Norma', en: 'Standard', pt: 'Norma', fr: 'Norme' }, year: 'vigente'
  },
  {
    topic: { es: 'Daltonismo', en: 'Color vision deficiency', pt: 'Daltonismo', fr: 'Deficience de vision des couleurs' },
    claim: { es: 'NEI describe protanopia, deuteranopia, tritanopia y acromatopsia.', en: 'NEI describes protanopia, deuteranopia, tritanopia and achromatopsia.', pt: 'NEI descreve protanopia, deuteranopia, tritanopia e acromatopsia.', fr: 'Le NEI decrit protanopie, deuteranopie, tritanopie et achromatopsie.' },
    source: 'NEI (NIH)', url: 'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness/types-color-vision-deficiency',
    type: { es: 'Salud publica', en: 'Public health', pt: 'Saude publica', fr: 'Sante publique' }, year: '2023+'
  },
  {
    topic: { es: 'Neuromorfica', en: 'Neuromorphic computing', pt: 'Neuromorfica', fr: 'Calcul neuromorphique' },
    claim: { es: 'IEEE documenta Loihi; Intel reporta Hala Point para investigacion sostenible.', en: 'IEEE documents Loihi; Intel reports Hala Point neuromorphic scale-up.', pt: 'IEEE documenta Loihi; Intel reporta Hala Point para pesquisa.', fr: 'IEEE documente Loihi; Intel presente Hala Point pour la recherche.' },
    source: 'IEEE / Intel', url: 'https://ieeexplore.ieee.org/document/8259423',
    type: { es: 'Paper + industria', en: 'Paper + industry', pt: 'Artigo + industria', fr: 'Article + industrie' }, year: '2018 / 2024'
  },
  {
    topic: { es: 'Circuito integrado', en: 'Integrated circuit', pt: 'Circuito integrado', fr: 'Circuit integre' },
    claim: { es: 'TI documenta el hito de 1958 para el circuito integrado.', en: 'TI documents the 1958 integrated-circuit milestone.', pt: 'TI documenta o marco de 1958 do circuito integrado.', fr: 'TI documente le jalon 1958 du circuit integre.' },
    source: 'Nobel Prize', url: 'https://www.nobelprize.org/prizes/physics/2000/summary/',
    type: { es: 'Institucional', en: 'Institutional', pt: 'Institucional', fr: 'Institutionnel' }, year: '2000'
  },
  {
    topic: { es: 'Computadora personal', en: 'Personal computer', pt: 'Computador pessoal', fr: 'Ordinateur personnel' },
    claim: { es: 'IBM documenta el impacto del IBM PC en la estandarizacion del mercado.', en: 'IBM documents IBM PC impact on market standardization.', pt: 'IBM documenta o impacto do IBM PC na padronizacao do mercado.', fr: 'IBM documente l impact du IBM PC sur la standardisation.' },
    source: 'IBM History', url: 'https://www.ibm.com/history/personal-computer',
    type: { es: 'Archivo institucional', en: 'Institutional archive', pt: 'Arquivo institucional', fr: 'Archive institutionnelle' }, year: '1981'
  },
  {
    topic: { es: 'Computacion movil', en: 'Mobile computing', pt: 'Computacao movel', fr: 'Calcul mobile' },
    claim: { es: 'Apple registra el lanzamiento del iPhone en enero de 2007.', en: 'Apple records the iPhone launch in January 2007.', pt: 'Apple registra o lancamento do iPhone em janeiro de 2007.', fr: 'Apple documente le lancement de l iPhone en janvier 2007.' },
    source: 'Apple Newsroom', url: 'https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/',
    type: { es: 'Fuente primaria corporativa', en: 'Primary corporate source', pt: 'Fonte primaria corporativa', fr: 'Source primaire entreprise' }, year: '2007'
  },
  {
    topic: { es: 'Sistema Android', en: 'Android system', pt: 'Sistema Android', fr: 'Systeme Android' },
    claim: { es: 'Google mantiene cronologia oficial de Android.', en: 'Google maintains an official Android timeline.', pt: 'Google mantem cronologia oficial do Android.', fr: 'Google maintient une chronologie officielle Android.' },
    source: 'Android (Google)', url: 'https://developer.android.com/about/versions',
    type: { es: 'Fuente oficial de plataforma', en: 'Official platform source', pt: 'Fonte oficial da plataforma', fr: 'Source officielle de plateforme' }, year: '2008+'
  },
  {
    topic: { es: 'Deep learning moderno', en: 'Modern deep learning', pt: 'Deep learning moderno', fr: 'Deep learning moderne' },
    claim: { es: 'AlexNet 2012 marca salto en ImageNet y acelera uso de GPU en IA.', en: 'AlexNet 2012 marks major ImageNet jump and accelerates GPU use for AI.', pt: 'AlexNet 2012 marca salto em ImageNet e acelera uso de GPU para IA.', fr: 'AlexNet 2012 marque un saut ImageNet et accelere l usage GPU.' },
    source: 'NeurIPS Proceedings', url: 'https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html',
    type: { es: 'Paper academico', en: 'Academic paper', pt: 'Artigo academico', fr: 'Article academique' }, year: '2012'
  },
  {
    topic: { es: 'Estandar de memoria DDR5', en: 'DDR5 memory standard', pt: 'Padrao de memoria DDR5', fr: 'Standard memoire DDR5' },
    claim: { es: 'JEDEC publica la familia de estandares DDR5 (JESD79-5).', en: 'JEDEC publishes the DDR5 standards family (JESD79-5).', pt: 'JEDEC publica a familia de padroes DDR5 (JESD79-5).', fr: 'JEDEC publie la famille de standards DDR5 (JESD79-5).' },
    source: 'JEDEC', url: 'https://www.jedec.org/standards-documents/docs/jesd79-5c',
    type: { es: 'Estandar tecnico', en: 'Technical standard', pt: 'Padrao tecnico', fr: 'Norme technique' }, year: '2023+'
  },
  {
    topic: { es: 'NVMe', en: 'NVMe', pt: 'NVMe', fr: 'NVMe' },
    claim: { es: 'NVM Express mantiene especificacion base para almacenamiento de baja latencia.', en: 'NVM Express maintains base specification for low-latency storage.', pt: 'NVM Express mantem especificacao base para armazenamento de baixa latencia.', fr: 'NVM Express maintient la specification de base pour faible latence.' },
    source: 'NVM Express', url: 'https://nvmexpress.org/specification/nvm-express-base-specification/',
    type: { es: 'Consorcio tecnico', en: 'Technical consortium', pt: 'Consorcio tecnico', fr: 'Consortium technique' }, year: 'vigente'
  }
];

const DISPLAYS = {
  es: [
    {
      title: 'CRT (tubo de rayos catodicos)',
      summary: 'Pantallas voluminosas con barrido electronico. Dominantes hasta finales de 1990s.',
      points: [
        'Ventaja historica: alta tasa de refresco para su epoca.',
        'Limitaciones: peso, consumo electrico y geometria.',
        'Uso clave: TV, monitores de oficina y laboratorios.'
      ],
      visual: `<svg class="hub-svg" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="32" y="28" width="155" height="86" rx="10" fill="#374355"/><rect x="46" y="40" width="126" height="60" rx="5" fill="#89b6c6"/><rect x="182" y="48" width="38" height="48" rx="6" fill="#2a3342"/><rect x="85" y="116" width="54" height="12" rx="4" fill="#596274"/></svg>`,
      sources: [
        { label: 'CHM Display Timeline', url: 'https://www.computerhistory.org/timeline/memory-storage/' }
      ]
    },
    {
      title: 'LCD/TFT',
      summary: 'Reduccion de grosor y consumo frente a CRT; base de monitores de oficina modernos.',
      points: [
        'Retroiluminacion y matriz TFT mejoran nitidez.',
        'Ventaja: menor consumo y formato delgado.',
        'Limite: contraste/negros inferiores frente a OLED.'
      ],
      visual: `<svg class="hub-svg" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="22" y="22" width="216" height="106" rx="8" fill="#2f3b4a"/><rect x="36" y="34" width="188" height="74" rx="4" fill="#9ecde0"/><rect x="102" y="126" width="58" height="10" rx="3" fill="#5a6778"/></svg>`,
      sources: [
        { label: 'IEEE Display Tech', url: 'https://spectrum.ieee.org/tag/display' }
      ]
    },
    {
      title: 'OLED / QD-OLED',
      summary: 'Pixeles emisivos con negros profundos y alto contraste para contenido HDR.',
      points: [
        'Mejor contraste y tiempos de respuesta muy bajos.',
        'Desafio: retencion temporal/burn-in bajo uso extremo.',
        'Uso: televisores premium, monitores creativos y moviles.'
      ],
      visual: `<svg class="hub-svg" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="20" y="24" width="220" height="102" rx="10" fill="#202733"/><defs><linearGradient id="oledg" x1="0" x2="1"><stop offset="0%" stop-color="#9b4dff"/><stop offset="50%" stop-color="#47b9ff"/><stop offset="100%" stop-color="#f56b9f"/></linearGradient></defs><rect x="34" y="36" width="192" height="78" rx="6" fill="url(#oledg)"/><rect x="102" y="127" width="58" height="9" rx="3" fill="#4f5c70"/></svg>`,
      sources: [
        { label: 'Samsung Display Tech', url: 'https://www.samsungdisplay.com/eng/displaytech/oled.do' }
      ]
    },
    {
      title: 'Mini-LED / Micro-LED',
      summary: 'Backlight de zonas mas finas (mini-LED) y pixel emisivo potencial (micro-LED).',
      points: [
        'Mini-LED mejora brillo y control local de atenuacion.',
        'Micro-LED promete brillo alto y durabilidad, pero costo elevado.',
        'Uso: monitores de referencia, TV de gama alta y pantallas especializadas.'
      ],
      visual: `<svg class="hub-svg" viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="24" y="24" width="212" height="102" rx="10" fill="#2a3647"/><rect x="38" y="36" width="184" height="76" rx="5" fill="#87b6cc"/><g fill=\"#f4e07f\">${Array.from({length:8},(_,r)=>Array.from({length:14},(_,c)=>`<circle cx=\"${46+c*12}\" cy=\"${42+r*8}\" r=\"1.4\"/>`).join('')).join('')}</g></svg>`,
      sources: [
        { label: 'Display Supply Chain News', url: 'https://www.displaysupplychain.com/' }
      ]
    }
  ]
};

DISPLAYS.en = DISPLAYS.es.map((item, idx) => {
  const EN = [
    {
      title: 'CRT (cathode-ray tube)',
      summary: 'Bulky displays based on electron scanning. Dominant until the late 1990s.',
      points: [
        'Historical strength: high refresh rates for its era.',
        'Limitations: weight, power draw, and geometry distortion.',
        'Key use: TV, office monitors, and laboratories.'
      ]
    },
    {
      title: 'LCD/TFT',
      summary: 'Much thinner and more efficient than CRT, becoming the standard office monitor platform.',
      points: [
        'Backlight and TFT matrix improved clarity and panel density.',
        'Strength: lower power and slim industrial design.',
        'Limit: weaker blacks and contrast versus OLED.'
      ]
    },
    {
      title: 'OLED / QD-OLED',
      summary: 'Self-emissive pixels provide deep blacks and high contrast for HDR workloads.',
      points: [
        'Very high contrast and low response times.',
        'Challenge: temporary retention or burn-in under extreme use.',
        'Use: premium TVs, creator monitors, and mobile devices.'
      ]
    },
    {
      title: 'Mini-LED / Micro-LED',
      summary: 'Finer local-dimming backlights (mini-LED) and potential self-emissive future panels (micro-LED).',
      points: [
        'Mini-LED improves brightness and local contrast control.',
        'Micro-LED promises high brightness and durability, still at high cost.',
        'Use: reference monitors, high-end TV, and specialized displays.'
      ]
    }
  ];
  return { ...item, ...EN[idx] };
});
DISPLAYS.pt = DISPLAYS.en;
DISPLAYS.fr = DISPLAYS.en;
DISPLAYS.zh = DISPLAYS.en;
DISPLAYS.ru = DISPLAYS.en;
DISPLAYS.ko = DISPLAYS.en;
DISPLAYS.ja = DISPLAYS.en;

const GALLERY = {
  es: [
    {
      title: 'ENIAC en mantenimiento (1940s)',
      text: 'Tecnicos cambiando valvulas de vacio en ENIAC: escala fisica enorme y mantenimiento intensivo.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/ENIAC-changing_a_tube.jpg',
      alt: 'Tecnico reemplazando un tubo de vacio en ENIAC',
      source: { label: 'Wikimedia Commons / U.S. Army photo', url: 'https://commons.wikimedia.org/wiki/File:ENIAC-changing_a_tube.jpg' }
    },
    {
      title: 'Intel C4004 (1971)',
      text: 'Primer microprocesador comercial de Intel; simboliza el paso a CPU programable en un solo chip.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Intel_C4004.jpg',
      alt: 'Microprocesador Intel C4004 sobre fondo claro',
      source: { label: 'Wikimedia Commons / Intel C4004', url: 'https://commons.wikimedia.org/wiki/File:Intel_C4004.jpg' }
    },
    {
      title: 'IBM PC 5150 (1981)',
      text: 'Equipo que consolida el ecosistema de PC compatible en oficina y hogar.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/IBM_PC-5150.JPG',
      alt: 'Computadora IBM PC 5150 con monitor y teclado',
      source: { label: 'Wikimedia Commons / IBM PC-5150', url: 'https://commons.wikimedia.org/wiki/File:IBM_PC-5150.JPG' }
    },
    {
      title: 'Cray-1 supercomputadora',
      text: 'Ejemplo iconico de computo de alto rendimiento previo a la era de clusters modernos.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cray-1-deutsches-museum.jpg',
      alt: 'Cray-1 exhibida en museo',
      source: { label: 'Wikimedia Commons / Cray-1', url: 'https://commons.wikimedia.org/wiki/File:Cray-1-deutsches-museum.jpg' }
    },
    {
      title: 'Monitor CRT',
      text: 'Tecnologia dominante en escritorio durante decadas antes del salto masivo a LCD.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/CRT%20Monitor%202014-01-01%2023-42.jpg',
      alt: 'Monitor CRT clasico',
      source: { label: 'Wikimedia Commons / CRT Monitor', url: 'https://commons.wikimedia.org/wiki/File:CRT_Monitor_2014-01-01_23-42.jpg' }
    },
    {
      title: 'Panel OLED moderno',
      text: 'Ejemplo de pantalla emisiva actual, clave para alto contraste y HDR.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/OLED%20display.jpg',
      alt: 'Pantalla OLED encendida',
      source: { label: 'Wikimedia Commons / OLED display', url: 'https://commons.wikimedia.org/wiki/File:OLED_display.jpg' }
    }
  ]
};

GALLERY.en = [
  {
    title: 'ENIAC maintenance (1940s)',
    text: 'Technicians replacing vacuum tubes in ENIAC, highlighting extreme physical scale and maintenance complexity.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/ENIAC-changing_a_tube.jpg',
    alt: 'Technician replacing a vacuum tube in ENIAC',
    source: { label: 'Wikimedia Commons / U.S. Army photo', url: 'https://commons.wikimedia.org/wiki/File:ENIAC-changing_a_tube.jpg' }
  },
  {
    title: 'Intel C4004 (1971)',
    text: 'First commercial Intel microprocessor, marking programmable CPU integration on a single chip.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Intel_C4004.jpg',
    alt: 'Intel C4004 microprocessor on light background',
    source: { label: 'Wikimedia Commons / Intel C4004', url: 'https://commons.wikimedia.org/wiki/File:Intel_C4004.jpg' }
  },
  {
    title: 'IBM PC 5150 (1981)',
    text: 'System that helped standardize the compatible-PC ecosystem for home and office computing.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/IBM_PC-5150.JPG',
    alt: 'IBM PC 5150 with monitor and keyboard',
    source: { label: 'Wikimedia Commons / IBM PC-5150', url: 'https://commons.wikimedia.org/wiki/File:IBM_PC-5150.JPG' }
  },
  {
    title: 'Cray-1 supercomputer',
    text: 'Iconic high-performance system from the pre-cluster era of scientific computing.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cray-1-deutsches-museum.jpg',
    alt: 'Cray-1 supercomputer in museum exhibition',
    source: { label: 'Wikimedia Commons / Cray-1', url: 'https://commons.wikimedia.org/wiki/File:Cray-1-deutsches-museum.jpg' }
  },
  {
    title: 'CRT monitor',
    text: 'Dominant desktop display technology before the mass shift to LCD panels.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/CRT%20Monitor%202014-01-01%2023-42.jpg',
    alt: 'Classic CRT monitor',
    source: { label: 'Wikimedia Commons / CRT Monitor', url: 'https://commons.wikimedia.org/wiki/File:CRT_Monitor_2014-01-01_23-42.jpg' }
  },
  {
    title: 'Modern OLED panel',
    text: 'Current emissive-display example used for high contrast and HDR imaging.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/OLED%20display.jpg',
    alt: 'OLED display turned on',
    source: { label: 'Wikimedia Commons / OLED display', url: 'https://commons.wikimedia.org/wiki/File:OLED_display.jpg' }
  }
];
GALLERY.pt = GALLERY.en;
GALLERY.fr = GALLERY.en;
GALLERY.zh = GALLERY.en;
GALLERY.ru = GALLERY.en;
GALLERY.ko = GALLERY.en;
GALLERY.ja = GALLERY.en;

const CURIOSITIES = {
  es: [
    { title: 'ENIAC y consumo', text: 'ENIAC ocupaba una sala completa y consumia ~150 kW para tareas hoy triviales.', source: { label: 'CHM ENIAC', url: 'https://www.computerhistory.org/timeline/computers/' } },
    { title: 'Ley de Moore no lineal', text: 'La mejora no solo vino por transistores: arquitectura, software y empaquetado tambien cambiaron todo.', source: { label: 'Intel Moore\'s Law', url: 'https://www.intel.com/content/www/us/en/newsroom/resources/moores-law.html' } },
    { title: 'Internet nacio militar-academica', text: 'ARPANET comenzo como proyecto de investigacion con motivacion estrategica y cientifica.', source: { label: 'DARPA ARPANET', url: 'https://www.darpa.mil/about/innovation-timeline/arpanet' } },
    { title: 'La web se libero al publico', text: 'CERN habilito la Web en dominio publico en 1993, acelerando adopcion mundial.', source: { label: 'CERN Web', url: 'https://home.cern/science/computing/birth-web' } },
    { title: 'La memoria manda', text: 'En muchos sistemas de IA, el cuello de botella es ancho de banda de memoria, no solo FLOPS.', source: { label: 'NVIDIA Hopper', url: 'https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/' } },
    { title: 'Data centers y energia', text: 'IEA estima que centros de datos y redes ya representan una parte relevante de la demanda electrica global.', source: { label: 'IEA Data Centres', url: 'https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks' } }
  ]
};

CURIOSITIES.en = [
  { title: 'ENIAC and power draw', text: 'ENIAC filled a room and consumed around 150 kW for tasks now considered trivial.', source: { label: 'CHM ENIAC', url: 'https://www.computerhistory.org/timeline/computers/' } },
  { title: 'Moore trend is not the whole story', text: 'Progress came from architecture, software, and packaging advances, not transistor count alone.', source: { label: 'Intel Moore\'s Law', url: 'https://www.intel.com/content/www/us/en/newsroom/resources/moores-law.html' } },
  { title: 'Internet began military-academic', text: 'ARPANET started as research infrastructure with strategic and scientific motivations.', source: { label: 'DARPA ARPANET', url: 'https://www.darpa.mil/about/innovation-timeline/arpanet' } },
  { title: 'The Web was opened publicly', text: 'CERN released core Web technology publicly in 1993, accelerating global adoption.', source: { label: 'CERN Web', url: 'https://home.cern/science/computing/birth-web' } },
  { title: 'Memory often dominates', text: 'In many AI systems, memory bandwidth is the real bottleneck rather than raw FLOPS.', source: { label: 'NVIDIA Hopper', url: 'https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/' } },
  { title: 'Data centers and energy', text: 'IEA reports that data centers and networks each represent a meaningful share of global electricity demand.', source: { label: 'IEA Data Centres', url: 'https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks' } }
];
CURIOSITIES.pt = CURIOSITIES.en;
CURIOSITIES.fr = CURIOSITIES.en;
CURIOSITIES.zh = CURIOSITIES.en;
CURIOSITIES.ru = CURIOSITIES.en;
CURIOSITIES.ko = CURIOSITIES.en;
CURIOSITIES.ja = CURIOSITIES.en;

const TIMELINE_MEDIA = [
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pascaline.jpg', alt: 'Pascaline mechanical calculator', source: { label: 'Wikimedia Commons · Pascaline', url: 'https://commons.wikimedia.org/wiki/File:Pascaline.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Colossus.jpg', alt: 'Colossus machine reconstruction', source: { label: 'Wikimedia Commons · Colossus', url: 'https://commons.wikimedia.org/wiki/File:Colossus.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Replica-of-first-transistor.jpg', alt: 'Replica of first transistor', source: { label: 'Wikimedia Commons · First transistor', url: 'https://commons.wikimedia.org/wiki/File:Replica-of-first-transistor.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arpanet_logical_map,_march_1977.png', alt: 'ARPANET logical map', source: { label: 'Wikimedia Commons · ARPANET map', url: 'https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Intel_C4004.jpg', alt: 'Intel C4004 microprocessor', source: { label: 'Wikimedia Commons · Intel C4004', url: 'https://commons.wikimedia.org/wiki/File:Intel_C4004.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/IBM_PC-5150.JPG', alt: 'IBM PC 5150', source: { label: 'Wikimedia Commons · IBM PC 5150', url: 'https://commons.wikimedia.org/wiki/File:IBM_PC-5150.JPG' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/First_Web_Server.jpg', alt: 'CERN first web server', source: { label: 'Wikimedia Commons · First Web Server', url: 'https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/IPhone_First_Generation.jpg', alt: 'First-generation iPhone', source: { label: 'Wikimedia Commons · iPhone first generation', url: 'https://commons.wikimedia.org/wiki/File:IPhone_First_Generation.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_GPU.jpg', alt: 'NVIDIA graphics card', source: { label: 'Wikimedia Commons · NVIDIA GPU', url: 'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sycamore_Quantum_Chip.jpg', alt: 'Google Sycamore quantum chip', source: { label: 'Wikimedia Commons · Sycamore chip', url: 'https://commons.wikimedia.org/wiki/File:Sycamore_Quantum_Chip.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frontier_supercomputer_(24).jpg', alt: 'Frontier supercomputer racks', source: { label: 'Wikimedia Commons · Frontier supercomputer', url: 'https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(24).jpg' } }
];

const COMPONENT_MEDIA = {
  cpu: { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Intel_C4004.jpg', alt: 'Intel C4004 microprocessor', source: { label: 'Wikimedia Commons · Intel C4004', url: 'https://commons.wikimedia.org/wiki/File:Intel_C4004.jpg' } },
  mem: { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/RAM_module.jpg', alt: 'RAM module', source: { label: 'Wikimedia Commons · RAM module', url: 'https://commons.wikimedia.org/wiki/File:RAM_module.jpg' } },
  storage: { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/1TB_2280_NVME_SSD.jpg', alt: 'NVMe SSD module', source: { label: 'Wikimedia Commons · NVMe SSD', url: 'https://commons.wikimedia.org/wiki/File:1TB_2280_NVME_SSD.jpg' } },
  gpu: { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_GPU.jpg', alt: 'NVIDIA GPU card', source: { label: 'Wikimedia Commons · NVIDIA GPU', url: 'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg' } },
  network: { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ethernet_Switch_(Front_View).jpg', alt: 'Ethernet switch front view', source: { label: 'Wikimedia Commons · Ethernet switch', url: 'https://commons.wikimedia.org/wiki/File:Ethernet_Switch_(Front_View).jpg' } }
};

const FRONTIER_MEDIA = [
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sycamore_Quantum_Chip.jpg', alt: 'Sycamore quantum chip', source: { label: 'Wikimedia Commons · Sycamore chip', url: 'https://commons.wikimedia.org/wiki/File:Sycamore_Quantum_Chip.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_GPU.jpg', alt: 'NVIDIA AI accelerator', source: { label: 'Wikimedia Commons · NVIDIA GPU', url: 'https://commons.wikimedia.org/wiki/File:NVIDIA_GPU.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/5G_cell_tower.JPG', alt: '5G cell tower', source: { label: 'Wikimedia Commons · 5G cell tower', url: 'https://commons.wikimedia.org/wiki/File:5G_cell_tower.JPG' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Core_Top-Level_Microarchitecture.png', alt: 'Neuromorphic core architecture diagram', source: { label: 'Wikimedia Commons · Neuromorphic architecture', url: 'https://commons.wikimedia.org/wiki/File:Core_Top-Level_Microarchitecture.png' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frontier_supercomputer_(24).jpg', alt: 'High-performance datacenter system', source: { label: 'Wikimedia Commons · Frontier supercomputer', url: 'https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(24).jpg' } }
];

const DISPLAY_MEDIA = [
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/CRT%20Monitor%202014-01-01%2023-42.jpg', alt: 'Classic CRT monitor', source: { label: 'Wikimedia Commons · CRT monitor', url: 'https://commons.wikimedia.org/wiki/File:CRT_Monitor_2014-01-01_23-42.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/LCD_Monitor.png', alt: 'LCD monitor', source: { label: 'Wikimedia Commons · LCD monitor', url: 'https://commons.wikimedia.org/wiki/File:LCD_Monitor.png' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/OLED_display.jpg', alt: 'OLED display panel', source: { label: 'Wikimedia Commons · OLED display', url: 'https://commons.wikimedia.org/wiki/File:OLED_display.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Wall_(Samsung_MicroLED_display).jpg', alt: 'Samsung The Wall MicroLED display', source: { label: 'Wikimedia Commons · MicroLED display', url: 'https://commons.wikimedia.org/wiki/File:The_Wall_(Samsung_MicroLED_display).jpg' } }
];

const CURIOSITY_MEDIA = [
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/ENIAC-changing_a_tube.jpg', alt: 'ENIAC maintenance', source: { label: 'Wikimedia Commons · ENIAC', url: 'https://commons.wikimedia.org/wiki/File:ENIAC-changing_a_tube.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Replica-of-first-transistor.jpg', alt: 'First transistor replica', source: { label: 'Wikimedia Commons · Transistor', url: 'https://commons.wikimedia.org/wiki/File:Replica-of-first-transistor.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arpanet_logical_map,_march_1977.png', alt: 'ARPANET map', source: { label: 'Wikimedia Commons · ARPANET', url: 'https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/First_Web_Server.jpg', alt: 'First web server', source: { label: 'Wikimedia Commons · First Web Server', url: 'https://commons.wikimedia.org/wiki/File:First_Web_Server.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/RAM_module.jpg', alt: 'RAM module close-up', source: { label: 'Wikimedia Commons · RAM module', url: 'https://commons.wikimedia.org/wiki/File:RAM_module.jpg' } },
  { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frontier_supercomputer_(24).jpg', alt: 'Modern supercomputer infrastructure', source: { label: 'Wikimedia Commons · Frontier', url: 'https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(24).jpg' } }
];

TIMELINE.es = TIMELINE.es.map((item, idx) => ({ ...item, media: TIMELINE_MEDIA[idx] || null }));
TIMELINE.en = TIMELINE.en.map((item, idx) => ({ ...item, media: TIMELINE_MEDIA[idx] || null }));
TIMELINE.pt = TIMELINE.en;
TIMELINE.fr = TIMELINE.en;
TIMELINE.zh = TIMELINE.en;
TIMELINE.ru = TIMELINE.en;
TIMELINE.ko = TIMELINE.en;
TIMELINE.ja = TIMELINE.en;

COMPONENT_VISUALS.es = COMPONENT_VISUALS.es.map((item) => ({ ...item, media: COMPONENT_MEDIA[item.key] || null }));
COMPONENT_VISUALS.en = COMPONENT_VISUALS.en.map((item) => ({ ...item, media: COMPONENT_MEDIA[item.key] || null }));
COMPONENT_VISUALS.pt = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.fr = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.zh = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ru = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ko = COMPONENT_VISUALS.en;
COMPONENT_VISUALS.ja = COMPONENT_VISUALS.en;

FRONTIERS.es = FRONTIERS.es.map((item, idx) => ({ ...item, media: FRONTIER_MEDIA[idx] || null }));
FRONTIERS.en = FRONTIERS.en.map((item, idx) => ({ ...item, media: FRONTIER_MEDIA[idx] || null }));
FRONTIERS.pt = FRONTIERS.pt.map((item, idx) => ({ ...item, media: FRONTIER_MEDIA[idx] || null }));
FRONTIERS.fr = FRONTIERS.en;
FRONTIERS.zh = FRONTIERS.en;
FRONTIERS.ru = FRONTIERS.en;
FRONTIERS.ko = FRONTIERS.en;
FRONTIERS.ja = FRONTIERS.en;

DISPLAYS.es = DISPLAYS.es.map((item, idx) => ({ ...item, media: DISPLAY_MEDIA[idx] || null }));
DISPLAYS.en = DISPLAYS.en.map((item, idx) => ({ ...item, media: DISPLAY_MEDIA[idx] || null }));
DISPLAYS.pt = DISPLAYS.en;
DISPLAYS.fr = DISPLAYS.en;
DISPLAYS.zh = DISPLAYS.en;
DISPLAYS.ru = DISPLAYS.en;
DISPLAYS.ko = DISPLAYS.en;
DISPLAYS.ja = DISPLAYS.en;

CURIOSITIES.es = CURIOSITIES.es.map((item, idx) => ({ ...item, media: CURIOSITY_MEDIA[idx] || null }));
CURIOSITIES.en = CURIOSITIES.en.map((item, idx) => ({ ...item, media: CURIOSITY_MEDIA[idx] || null }));
CURIOSITIES.pt = CURIOSITIES.en;
CURIOSITIES.fr = CURIOSITIES.en;
CURIOSITIES.zh = CURIOSITIES.en;
CURIOSITIES.ru = CURIOSITIES.en;
CURIOSITIES.ko = CURIOSITIES.en;
CURIOSITIES.ja = CURIOSITIES.en;

let currentLang = 'es';
let timelineIndex = 0;

const langSel = document.getElementById('lang');
const timelineButtonsEl = document.getElementById('timeline-buttons');
const timelineDetailEl = document.getElementById('timeline-detail');
const frontierGridEl = document.getElementById('frontier-grid');
const sourceBodyEl = document.getElementById('source-table-body');
const a11yBtn = document.getElementById('a11y-btn');
const a11yPanel = document.getElementById('a11y-panel');
const live = document.getElementById('a11y-live');
const paletteSelect = document.getElementById('palette');
const themeSelect = document.getElementById('theme-palette');
const hubControlsEl = document.getElementById('component-hub-controls');
const hubDetailEl = document.getElementById('component-hub-detail');
const galleryGridEl = document.getElementById('gallery-grid');
const displayGridEl = document.getElementById('display-grid');
const curiosityGridEl = document.getElementById('curiosity-grid');

let componentIndex = 0;

function text(key) {
  const group = I18N[currentLang] || I18N.es;
  return group[key] || I18N.en[key] || key;
}

function announce(msg) {
  if (!live) return;
  live.textContent = '';
  setTimeout(() => { live.textContent = msg; }, 40);
}

function attrEsc(value) {
  return String(value ?? '').replace(/"/g, '&quot;');
}

function renderMedia(media, className) {
  if (!media?.image) return '';
  const fallback = attrEsc(text('img_unavailable'));
  const alt = attrEsc(media.alt || '');
  const source = media.source?.url
    ? `<figcaption><a href="${media.source.url}" target="_blank" rel="noopener noreferrer">${media.source.label}</a></figcaption>`
    : '';
  return `
    <figure class="media-box ${className}" data-fallback="${fallback}">
      <img src="${media.image}" loading="lazy" alt="${alt}" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('broken'); this.remove();">
      ${source}
    </figure>
  `;
}

function applyI18N() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const val = text(key);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    const val = text(key);
    if (val) el.setAttribute('aria-label', val);
  });
  renderComponents();
  renderComponentHub();
  renderTimeline();
  renderFrontiers();
  renderGallery();
  renderDisplays();
  renderCuriosities();
  renderSources();
  announce(text('announce_lang'));
}

function renderComponents() {
  const pack = COMPONENTS[currentLang] || COMPONENTS.es;
  const map = [['comp-cpu-list', pack.cpu], ['comp-mem-list', pack.mem], ['comp-storage-list', pack.storage], ['comp-network-list', pack.network]];
  map.forEach(([id, items]) => {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  });
}

function renderComponentHub() {
  const rows = COMPONENT_VISUALS[currentLang] || COMPONENT_VISUALS.es;
  if (!rows.length || !hubControlsEl || !hubDetailEl) return;
  if (componentIndex >= rows.length) componentIndex = 0;

  hubControlsEl.innerHTML = '';
  rows.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'component-tab';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(idx === componentIndex));
    btn.textContent = item.tab;
    btn.addEventListener('click', () => {
      componentIndex = idx;
      renderComponentHub();
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        componentIndex = (idx + 1) % rows.length;
        renderComponentHub();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        componentIndex = (idx - 1 + rows.length) % rows.length;
        renderComponentHub();
      }
    });
    hubControlsEl.appendChild(btn);
  });

  const selected = rows[componentIndex];
  const evolution = selected.evolution.map((step) => `<article class="hub-era"><strong>${step.era}</strong><span>${step.note}</span></article>`).join('');
  const links = selected.sources.map((src) => `<a class="source-chip" href="${src.url}" target="_blank" rel="noopener noreferrer">${src.label}</a>`).join('');
  const types = (selected.types || []).map((t) => `<li>${t}</li>`).join('');
  const media = renderMedia(selected.media, 'hub-photo');

  hubDetailEl.innerHTML = `
    <div class="hub-grid">
      <div class="hub-visual-stack">
        <div class="hub-visual">${selected.svg}</div>
        ${media}
      </div>
      <div class="hub-body">
        <h4>${selected.title}</h4>
        <p>${selected.look}</p>
        <p><strong>${text('hub_types')}:</strong></p>
        <ul class="component-list">${types}</ul>
        <div class="hub-evolution">${evolution}</div>
        <div class="hub-sources">${links}</div>
      </div>
    </div>
  `;
}

function renderTimeline() {
  const events = TIMELINE[currentLang] || TIMELINE.es;
  if (timelineIndex >= events.length) timelineIndex = 0;

  timelineButtonsEl.innerHTML = '';
  events.forEach((ev, idx) => {
    const btn = document.createElement('button');
    btn.className = 'timeline-btn';
    btn.type = 'button';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(idx === timelineIndex));
    btn.id = `time-tab-${idx}`;
    btn.innerHTML = `<strong>${ev.year}</strong><br>${ev.short}`;
    btn.addEventListener('click', () => { timelineIndex = idx; renderTimeline(); });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        timelineIndex = (idx + 1) % events.length;
        renderTimeline();
        document.getElementById(`time-tab-${timelineIndex}`)?.focus();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        timelineIndex = (idx - 1 + events.length) % events.length;
        renderTimeline();
        document.getElementById(`time-tab-${timelineIndex}`)?.focus();
      }
    });
    timelineButtonsEl.appendChild(btn);
  });

  const ev = events[timelineIndex];
  const points = ev.impact.map((p) => `<li>${p}</li>`).join('');
  const links = ev.sources.map((s) => `<a class="source-chip" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`).join('');
  const engineering = ev.engineering ? `<p><strong>${text('timeline_engineering')}:</strong> ${ev.engineering}</p>` : '';
  const social = ev.social ? `<p><strong>${text('timeline_social')}:</strong> ${ev.social}</p>` : '';
  const media = renderMedia(ev.media, 'timeline-media');
  timelineDetailEl.style.setProperty('--stagger', `${(timelineIndex % 6) * 40}ms`);
  timelineDetailEl.innerHTML = `
    <div class="timeline-top">
      <span class="timeline-year">${ev.year}</span>
      <h3 class="timeline-title">${ev.title}</h3>
    </div>
    ${media}
    <p><strong>${text('timeline_context')}:</strong> ${ev.context}</p>
    ${engineering}
    ${social}
    <p><strong>${text('timeline_impact')}:</strong></p>
    <ul class="timeline-points">${points}</ul>
    <p><strong>${text('timeline_evidence')}:</strong></p>
    <div class="timeline-sources">${links}</div>
  `;
}

function renderFrontiers() {
  const rows = FRONTIERS[currentLang] || FRONTIERS.es;
  frontierGridEl.innerHTML = '';
  rows.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'frontier-card';
    card.style.setProperty('--stagger', `${idx * 55}ms`);
    const points = item.points.map((p) => `<li>${p}</li>`).join('');
    const links = item.links.map((l) => `<a class="source-chip" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('');
    const media = renderMedia(item.media, 'frontier-media');
    card.innerHTML = `
      <div class="frontier-top"><span class="frontier-tag">${item.status}</span></div>
      ${media}
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <ul class="frontier-list">${points}</ul>
      <div class="timeline-sources" style="margin-top:.55rem">${links}</div>
    `;
    frontierGridEl.appendChild(card);
  });
}

function renderDisplays() {
  if (!displayGridEl) return;
  const rows = DISPLAYS[currentLang] || DISPLAYS.es;
  displayGridEl.innerHTML = '';
  rows.forEach((row, idx) => {
    const points = row.points.map((p) => `<li>${p}</li>`).join('');
    const links = row.sources.map((src) => `<a class="source-chip" href="${src.url}" target="_blank" rel="noopener noreferrer">${src.label}</a>`).join('');
    const card = document.createElement('article');
    card.className = 'display-card';
    card.style.setProperty('--stagger', `${idx * 55}ms`);
    const media = renderMedia(row.media, 'display-photo');
    card.innerHTML = `
      ${media}
      <div class="display-visual">${row.visual}</div>
      <h3>${row.title}</h3>
      <p>${row.summary}</p>
      <ul>${points}</ul>
      <div class="hub-sources">${links}</div>
    `;
    displayGridEl.appendChild(card);
  });
}

function renderGallery() {
  if (!galleryGridEl) return;
  const rows = GALLERY[currentLang] || GALLERY.en || GALLERY.es;
  galleryGridEl.innerHTML = '';
  rows.forEach((row, idx) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.style.setProperty('--stagger', `${idx * 45}ms`);
    card.innerHTML = `
      <figure class="gallery-photo" data-fallback="${text('img_unavailable')}">
        <img src="${row.image}" loading="lazy" alt="${row.alt}" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('broken'); this.remove();">
      </figure>
      <div class="gallery-body">
        <h3>${row.title}</h3>
        <p>${row.text}</p>
        <a class="source-chip" href="${row.source.url}" target="_blank" rel="noopener noreferrer">${row.source.label}</a>
      </div>
    `;
    galleryGridEl.appendChild(card);
  });
}

function renderCuriosities() {
  if (!curiosityGridEl) return;
  const rows = CURIOSITIES[currentLang] || CURIOSITIES.es;
  curiosityGridEl.innerHTML = '';
  rows.forEach((row, idx) => {
    const card = document.createElement('article');
    card.className = 'curiosity-card';
    card.style.setProperty('--stagger', `${idx * 50}ms`);
    const media = renderMedia(row.media, 'curiosity-photo');
    card.innerHTML = `
      ${media}
      <h3>${row.title}</h3>
      <p>${row.text}</p>
      <a href="${row.source.url}" target="_blank" rel="noopener noreferrer">${row.source.label}</a>
    `;
    curiosityGridEl.appendChild(card);
  });
}

function renderSources() {
  sourceBodyEl.innerHTML = '';
  SOURCES.forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.topic[currentLang] || row.topic.en || row.topic.es}</td>
      <td>${row.claim[currentLang] || row.claim.en || row.claim.es}</td>
      <td><a href="${row.url}" target="_blank" rel="noopener noreferrer">${row.source}</a></td>
      <td>${row.type[currentLang] || row.type.en || row.type.es}</td>
      <td>${row.year}</td>
    `;
    sourceBodyEl.appendChild(tr);
  });
}

function savePrefs() {
  const prefs = {
    lang: currentLang,
    contrast: document.body.classList.contains('high-contrast'),
    text: document.body.classList.contains('large-text'),
    motion: document.body.classList.contains('reduce-motion'),
    palette: paletteSelect.value,
    theme: themeSelect ? themeSelect.value : 'default'
  };
  localStorage.setItem('atlasPrefs', JSON.stringify(prefs));
}

function loadPrefs() {
  const raw = localStorage.getItem('atlasPrefs');
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);
    if (prefs.lang && I18N[prefs.lang]) currentLang = prefs.lang;
    if (prefs.contrast) document.body.classList.add('high-contrast');
    if (prefs.text) document.body.classList.add('large-text');
    if (prefs.motion) document.body.classList.add('reduce-motion');
    if (prefs.palette) paletteSelect.value = prefs.palette;
    if (prefs.theme && themeSelect) themeSelect.value = prefs.theme;
  } catch (_) {
    localStorage.removeItem('atlasPrefs');
  }
}

function syncToggleStates() {
  document.querySelectorAll('[data-toggle]').forEach((btn) => {
    const k = btn.dataset.toggle;
    const on = k === 'contrast'
      ? document.body.classList.contains('high-contrast')
      : k === 'text'
        ? document.body.classList.contains('large-text')
        : document.body.classList.contains('reduce-motion');
    btn.setAttribute('aria-pressed', String(on));
  });
}

function applyPalette(value, withAnnounce = true) {
  PALETTE_CLASSES.forEach((cls) => document.body.classList.remove(cls));
  if (value === 'protanopia') document.body.classList.add('cb-protanopia');
  if (value === 'deuteranopia') document.body.classList.add('cb-deuteranopia');
  if (value === 'tritanopia') document.body.classList.add('cb-tritanopia');
  if (value === 'achromatopsia') document.body.classList.add('cb-achromatopsia');
  PALETTE_VARIABLES.forEach((key) => document.body.style.removeProperty(key));
  const overrides = PALETTE_OVERRIDES[value];
  if (overrides) {
    Object.entries(overrides).forEach(([key, paletteValue]) => {
      document.body.style.setProperty(key, paletteValue);
    });
  }
  if (withAnnounce) announce(`${text('announce_palette')}: ${paletteSelect.options[paletteSelect.selectedIndex].textContent}`);
  savePrefs();
}

function applyTheme(value, withAnnounce = true) {
  document.body.classList.remove('theme-ocean', 'theme-sunrise', 'theme-graphite');
  if (value === 'ocean') document.body.classList.add('theme-ocean');
  if (value === 'sunrise') document.body.classList.add('theme-sunrise');
  if (value === 'graphite') document.body.classList.add('theme-graphite');
  if (withAnnounce && themeSelect) announce(`${text('announce_theme')}: ${themeSelect.options[themeSelect.selectedIndex].textContent}`);
  savePrefs();
}

function toggleMode(mode) {
  if (mode === 'contrast') {
    document.body.classList.toggle('high-contrast');
    announce(document.body.classList.contains('high-contrast') ? text('announce_contrast_on') : text('announce_contrast_off'));
  }
  if (mode === 'text') {
    document.body.classList.toggle('large-text');
    announce(document.body.classList.contains('large-text') ? text('announce_text_on') : text('announce_text_off'));
  }
  if (mode === 'motion') {
    document.body.classList.toggle('reduce-motion');
    announce(document.body.classList.contains('reduce-motion') ? text('announce_motion_on') : text('announce_motion_off'));
  }
  syncToggleStates();
  savePrefs();
}

function speechLangForCurrent() {
  if (currentLang === 'pt') return 'pt-BR';
  if (currentLang === 'fr') return 'fr-FR';
  if (currentLang === 'en') return 'en-US';
  if (currentLang === 'zh') return 'zh-CN';
  if (currentLang === 'ru') return 'ru-RU';
  if (currentLang === 'ko') return 'ko-KR';
  if (currentLang === 'ja') return 'ja-JP';
  return 'es-ES';
}

function pickVoiceForLang(langCode) {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const exact = voices.find((voice) => voice.lang?.toLowerCase() === langCode.toLowerCase());
  if (exact) return exact;
  const prefix = langCode.split('-')[0].toLowerCase();
  const partial = voices.find((voice) => voice.lang?.toLowerCase().startsWith(prefix));
  if (partial) return partial;
  return voices.find((voice) => voice.default) || voices[0];
}

function speakSummaryNow() {
  const direct = text('summary_audio');
  const fallback = document.getElementById('audio-summary')?.textContent?.trim() || '';
  const txt = direct && direct !== 'summary_audio' ? direct : fallback;
  if (!txt) return;

  const langCode = speechLangForCurrent();
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(txt);
  const voice = pickVoiceForLang(langCode);
  if (voice) {
    utter.voice = voice;
    utter.lang = voice.lang || langCode;
  } else {
    utter.lang = langCode;
  }
  utter.rate = 1;
  utter.pitch = 1;
  utter.onerror = () => announce(text('announce_speech_unsupported'));
  window.speechSynthesis.speak(utter);
  announce(text('announce_speech_start'));
}

function readSummary() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    announce(text('announce_speech_unsupported'));
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    speakSummaryNow();
    return;
  }

  let done = false;
  const onVoices = () => {
    if (done) return;
    done = true;
    window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
    speakSummaryNow();
  };

  window.speechSynthesis.addEventListener('voiceschanged', onVoices);
  setTimeout(() => {
    if (done) return;
    done = true;
    window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
    speakSummaryNow();
  }, 500);
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.querySelector('#progress .bar').style.width = `${Math.min(100, Math.max(0, ratio))}%`;
}

function updateNavCurrent() {
  const ids = ['timeline', 'components', 'gallery', 'displays', 'frontiers', 'curiosities', 'sources'];
  let active = '';
  const y = window.scrollY + 180;
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= y) active = id;
  });
  document.querySelectorAll('.links a').forEach((a) => {
    if (a.getAttribute('href') === `#${active}`) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

function initReveal() {
  const nodes = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach((n) => observer.observe(n));
}

function initInteractions() {
  a11yBtn.addEventListener('click', () => {
    const open = !a11yPanel.classList.contains('open');
    a11yPanel.classList.toggle('open', open);
    a11yPanel.setAttribute('aria-hidden', String(!open));
    a11yBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!a11yPanel.contains(e.target) && !a11yBtn.contains(e.target)) {
      a11yPanel.classList.remove('open');
      a11yPanel.setAttribute('aria-hidden', 'true');
      a11yBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('[data-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => toggleMode(btn.dataset.toggle));
  });

  paletteSelect.addEventListener('change', () => applyPalette(paletteSelect.value));
  themeSelect?.addEventListener('change', () => applyTheme(themeSelect.value));
  document.getElementById('speak-summary')?.addEventListener('click', readSummary);

  document.getElementById('goto-frontiers')?.addEventListener('click', () => {
    document.getElementById('frontiers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  langSel.addEventListener('change', () => {
    currentLang = langSel.value;
    applyI18N();
    initFooterLine();
    savePrefs();
  });

  window.addEventListener('scroll', () => {
    updateProgress();
    updateNavCurrent();
  }, { passive: true });
}

function initFooterLine() {
  const line = document.getElementById('footer-line');
  if (!line) return;
  line.textContent = `${text('footer_line')} Edicion ${new Date().getFullYear()}.`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadPrefs();
  langSel.value = currentLang;
  applyPalette(paletteSelect.value, false);
  if (themeSelect) applyTheme(themeSelect.value, false);
  syncToggleStates();
  applyI18N();
  initReveal();
  initInteractions();
  initFooterLine();
  updateProgress();
  updateNavCurrent();
});
