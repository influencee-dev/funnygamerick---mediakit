/**
 * FunnyGameRick — dati del media kit.
 *
 * QUESTO È L'UNICO FILE DA MODIFICARE per aggiornare i contenuti della pagina.
 *
 * Regole:
 * - Un dato sconosciuto si lascia `null` (o un array vuoto): la pagina lo nasconde da sola.
 *   Non scrivere mai 0 o numeri stimati al posto di un dato mancante.
 * - I numeri vanno inseriti come valori interi (es. 75200, non "75,2K"):
 *   la formattazione italiana la fa la pagina.
 * - Ogni volta che aggiorni le metriche, aggiorna anche `metricsUpdatedAt`.
 *
 * Fonti dei dati (aggiornati il 20/10/2026):
 * - Cartella Drive "Media kit" condivisa da Riccardo: screenshot di YouTube Studio, TikTok Studio,
 *   Instagram Insights e profilo Facebook (periodo 90 giorni: 21 lug – 18 ott 2026), elenco aziende,
 *   contenuti sponsorizzati, video più performanti, foto e logo.
 * - Pagine pubbliche dei video (titoli, like e visualizzazioni dei singoli contenuti).
 * - Storia del canale: descrizione pubblica di https://www.youtube.com/@FunnyGameRick.
 */

import type {
  AudienceData,
  CollaborationFormat,
  ContentPillar,
  CreatorData,
  FeaturedItem,
  SponsoredCollab,
} from './types';

export type * from './types';

const contentPillars: ContentPillar[] = [
  {
    id: 'gameplay',
    title: 'Gameplay',
    description:
      'Serie walkthrough complete al 100%, storia e missioni secondarie incluse. In video o in live, dall’inizio ai titoli di coda.',
    tags: ['Walkthrough', 'Live', '100%'],
    icon: 'gamepad',
    size: 'large',
  },
  {
    id: 'short',
    title: 'Short form content',
    description:
      'Da 1 a 4 short al giorno: clip rapide e ironiche per TikTok, YouTube Shorts e Instagram Reels. Su YouTube gli Short generano il 97,8% delle visualizzazioni.',
    tags: ['TikTok', 'Shorts', 'Reels'],
    icon: 'zap',
    size: 'tall',
    // Anteprime nei tre schermi della card (Reel/short reali).
    previews: ['images/video/ig3.webp', 'images/video/ig1.webp', 'images/video/ig4.webp'],
  },
  {
    id: 'meme',
    title: 'Meme & humor',
    description:
      'Ironia, trend e meme del mondo gaming. Contenuti leggeri, nati per strappare un sorriso.',
    tags: ['Meme', 'Trend', 'Ironia'],
    icon: 'laugh',
    size: 'regular',
  },
  {
    id: 'culture',
    title: 'Gaming culture',
    description:
      'L’immaginario videoludico e, quando ha senso, la cultura pop che gli gira intorno: anime, manga, saghe e personaggi.',
    tags: ['Pop culture', 'Anime', 'Manga'],
    icon: 'sparkles',
    size: 'regular',
  },
];

const collaborationFormats: CollaborationFormat[] = [
  {
    id: 'short-sponsored',
    title: 'Video brevi sponsorizzati',
    description: 'Short verticali nel suo stile, con il prodotto dentro la gag e non appiccicato sopra.',
    icon: 'smartphone',
  },
  {
    id: 'stories',
    title: 'Instagram Stories e integrazioni social',
    description: 'Stories, menzioni e contenuti di supporto per dare continuità alla campagna.',
    icon: 'layers',
  },
  {
    id: 'youtube-dedicated',
    title: 'Video YouTube e gameplay dedicati',
    description: 'Gameplay, prime impressioni o serie dedicate a un titolo, in video o in live.',
    icon: 'monitor-play',
  },
  {
    id: 'placement',
    title: 'Product placement e integrazioni branded',
    description: 'Integrazioni naturali dentro i contenuti abituali, anche fuori dal mondo gaming se coerenti.',
    icon: 'package',
  },
  {
    id: 'review',
    title: 'Test e presentazione di prodotti',
    description: 'Unboxing, prove sul campo e racconto onesto di periferiche, accessori e prodotti.',
    icon: 'scan-search',
  },
  {
    id: 'multiplatform',
    title: 'Campagne multipiattaforma',
    description: 'Un’unica idea declinata su YouTube, TikTok, Instagram e gli altri canali attivi.',
    icon: 'network',
  },
  {
    id: 'events',
    title: 'Eventi gaming, fiere e manifestazioni',
    description: 'Presenza a eventi, fiere e trasferte, con condizioni da concordare.',
    icon: 'map-pin',
  },
];

/* Numeri principali, riusati nei totali qui sotto. */
const FOLLOWERS = { youtube: 75252, tiktok: 48031, instagram: 32372, facebook: 8878 };
const VIEWS_90D = { youtube: 1330494, instagram: 1420015, tiktok: 456400 };

/**
 * Dati demografici dagli strumenti di analisi ufficiali (screenshot nella cartella Drive).
 * Percentuali da 0 a 100. Una piattaforma senza dati si toglie dall'array.
 */
const audience: AudienceData = {
  source: 'YouTube Studio, TikTok Studio e Instagram Insights',
  insights: [
    { value: '96,1%', label: 'del pubblico YouTube è in Italia' },
    { value: '93%', label: 'delle visualizzazioni Instagram arriva da chi non lo segue ancora' },
    { value: '25–34', label: 'la fascia d’età più ampia su YouTube e Instagram' },
  ],
  platforms: [
    {
      id: 'youtube',
      label: 'YouTube',
      basis: 'Visualizzazioni, 21 lug – 18 ott 2026',
      ageRanges: [
        { label: '13-17', value: 19.0 },
        { label: '18-24', value: 11.0 },
        { label: '25-34', value: 22.2 },
        { label: '35-44', value: 19.5 },
        { label: '45-54', value: 18.6 },
        { label: '55-64', value: 5.0 },
        { label: '65+', value: 4.8 },
      ],
      gender: [
        { label: 'Uomini', value: 69.6 },
        { label: 'Donne', value: 30.4 },
      ],
      topCountries: [
        { label: 'Italia', value: 96.1 },
        { label: 'Svizzera', value: 0.4 },
        { label: 'Germania', value: 0.2 },
      ],
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      basis: 'Spettatori, 20 lug – 17 ott 2026',
      ageRanges: [
        { label: '18-24', value: 33.8 },
        { label: '25-34', value: 30.1 },
        { label: '35-44', value: 19.0 },
        { label: '45-54', value: 13.6 },
        { label: '55+', value: 3.5 },
      ],
      gender: [
        { label: 'Donne', value: 49 },
        { label: 'Uomini', value: 45 },
        { label: 'Altro', value: 6 },
      ],
      topCountries: [
        { label: 'Italia', value: 89.4 },
        { label: 'Francia', value: 7.2 },
        { label: 'Romania', value: 0.4 },
      ],
    },
    {
      id: 'instagram',
      label: 'Instagram',
      basis: 'Pubblico del profilo, ottobre 2026',
      ageRanges: [
        { label: '13-17', value: 6.3 },
        { label: '18-24', value: 17.8 },
        { label: '25-34', value: 28.1 },
        { label: '35-44', value: 23.7 },
        { label: '45-54', value: 15.8 },
        { label: '55-64', value: 6.2 },
        { label: '65+', value: 2.1 },
      ],
      gender: [
        { label: 'Uomini', value: 67.5 },
        { label: 'Donne', value: 32.5 },
      ],
      topCountries: [
        { label: 'Italia', value: 95.7 },
        { label: 'Germania', value: 0.7 },
        { label: 'Svizzera', value: 0.6 },
      ],
      topCities: [
        { label: 'Roma', value: 4.9 },
        { label: 'Palermo', value: 2.2 },
        { label: 'Napoli', value: 1.5 },
        { label: 'Milano', value: 1.4 },
        { label: 'Torino', value: 1.2 },
      ],
    },
  ],
};

/** Collaborazioni sponsorizzate (cartella Drive "Brand / Contenuti sponsorizzati"). */
const sponsoredContent: SponsoredCollab[] = [
  {
    brand: 'Assassin’s Creed Black Flag Resynced',
    kind: 'Serie gameplay sponsorizzata',
    videos: [
      {
        title: 'Walkthrough Gameplay ITA – Parte 1: Edward, il pirata',
        platform: 'youtube',
        url: 'https://youtu.be/GreAw1m0uAQ',
        thumbnail: 'images/video/acbf.webp',
        format: 'horizontal',
      },
    ],
  },
  {
    brand: 'Forza Horizon 6',
    kind: 'Serie gameplay sponsorizzata',
    videos: [
      {
        title: 'Si parte per il Giappone! Gameplay PC ITA – Parte 1',
        platform: 'youtube',
        url: 'https://youtu.be/IXXXLsUxIIQ',
        thumbnail: 'images/video/fh6.webp',
        format: 'horizontal',
      },
    ],
  },
  {
    brand: 'Darwin’s Paradox!',
    kind: 'Serie gameplay sponsorizzata',
    videos: [
      {
        title: 'Walkthrough Gameplay PC ITA – Parte 1: inizia l’avventura di un polpo',
        platform: 'youtube',
        url: 'https://youtu.be/oQcjowL6-kM',
        thumbnail: 'images/video/darwin.webp',
        format: 'horizontal',
      },
    ],
  },
  {
    brand: 'Kingdom Come: Deliverance II',
    kind: 'Giveaway con Deep Silver',
    videos: [
      {
        title: 'Giveaway in collaborazione con Deep Silver e Kingdom Come',
        platform: 'youtube',
        url: 'https://youtube.com/shorts/IlirurWD18k',
        thumbnail: 'images/video/kcd2.webp',
        format: 'vertical',
      },
    ],
  },
  {
    brand: 'CalcioEz',
    kind: 'Unboxing e short con codice sconto',
    videos: [
      {
        title: 'Unboxing: maglie da calcio a basso prezzo',
        platform: 'youtube',
        url: 'https://youtu.be/s1KPG680RnM',
        thumbnail: 'images/video/calcioez1.webp',
        format: 'horizontal',
      },
      {
        title: 'Short con codice sconto',
        platform: 'youtube',
        url: 'https://youtube.com/shorts/mRJKHicjwdY',
        thumbnail: 'images/video/calcioez2.webp',
        format: 'vertical',
      },
      {
        title: 'Short “Tipi di tifosi in Italia”',
        platform: 'youtube',
        url: 'https://youtube.com/shorts/Xpy6-No-xHM',
        thumbnail: 'images/video/calcioez3.webp',
        format: 'vertical',
      },
    ],
  },
];

/** Contenuti più performanti (cartella Drive "Video performanti" e "Instagram Reels più performanti"). */
const featuredContent: FeaturedItem[] = [
  {
    title: 'Doppi sensi',
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@riccardo_buttitta/video/7303939957998095649',
    thumbnail: 'images/video/tiktok.webp',
    format: 'vertical',
    stats: '1,2 Mln visualizzazioni · 164,9K like',
  },
  {
    title: 'Anche voi la cantate così?',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DJw9CiZAWH9/',
    thumbnail: 'images/video/ig1.webp',
    format: 'vertical',
    stats: '155K like · 1.411 commenti',
  },
  {
    title: 'Anche voi le cantate così?',
    platform: 'youtube',
    url: 'https://youtu.be/ucygmzT0-Ig',
    thumbnail: 'images/video/topshort.webp',
    format: 'vertical',
    meta: 'Lo Short più visto',
  },
  {
    title: 'Reel “Sveglia”',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C1M2MXFiNST/',
    thumbnail: 'images/video/ig3.webp',
    format: 'vertical',
    stats: '65K like',
  },
  {
    title: 'Reel “Ho il tonno e le insalate”',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/Copx1AZo9B5/',
    thumbnail: 'images/video/ig4.webp',
    format: 'vertical',
    stats: '57K like',
  },
  {
    title: 'Reel Instagram',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/C8fGIC1CRMf/',
    thumbnail: 'images/video/ig2.webp',
    format: 'vertical',
    meta: 'Tra i Reel più visti',
  },
  {
    title: 'Tomb Raider: Definitive Edition PS5 (completato)',
    platform: 'youtube',
    url: 'https://www.youtube.com/playlist?list=PLCxsiL4H5xLgNVezpIeGmwZXBwgEuehY8',
    thumbnail: 'images/video/topserie.webp',
    format: 'horizontal',
    meta: 'La serie più seguita',
  },
];

export const creator: CreatorData = {
  name: 'FunnyGameRick',
  realName: 'Riccardo Buttitta',
  handle: '@FunnyGameRick',
  claim: 'Non solo un gamer.',
  bannerTagline: 'Storia · Secondarie · 100% · Meme',
  heroEyebrow: ['Gaming', 'Entertainment', 'Content creator'],
  heroSubtitle: 'Gameplay, ironia e contenuti che trasformano ogni partita in intrattenimento.',
  heroIntro:
    'Sono Riccardo, in arte FunnyGameRick. Ogni giorno pubblico short ironici e serie gameplay complete al 100%, e parlo direttamente con chi mi segue. È questo che porto nei progetti con i brand.',
  heroLabels: ['Gaming', 'Meme', 'Creator'],

  images: {
    avatar: {
      src: 'images/avatar-800.webp',
      srcSet: 'images/avatar-400.webp 400w, images/avatar-800.webp 800w',
      alt: 'Illustrazione ufficiale di FunnyGameRick: Riccardo con occhiali e un controller in mano',
      width: 800,
      height: 800,
    },
    banner: {
      src: 'images/banner-youtube.webp',
      alt: 'Banner del canale YouTube FunnyGameRick con la scritta "Non solo un gamer"',
      width: 2560,
      height: 424,
    },
    // Foto reale per la sezione "Dietro il controller". Lasciare null finché non viene fornita.
    aboutPhoto: {
      src: 'images/riccardo-1000.webp',
      srcSet: 'images/riccardo-600.webp 600w, images/riccardo-1000.webp 1000w',
      alt: 'Riccardo Buttitta a braccia conserte davanti a un poster di Spider-Man',
      width: 1000,
      height: 1250,
    },
  },

  /** Fatti verificabili mostrati in hero e nella sezione "chi è". */
  highlights: [
    { value: '164K+', label: 'Follower su YouTube, TikTok, Instagram e Facebook' },
    { value: '3,2 Mln', label: 'Visualizzazioni negli ultimi 90 giorni' },
    { value: '1–4', label: 'Short pubblicati ogni giorno' },
  ],

  about: {
    paragraphs: [
      'FunnyGameRick nasce dalla voglia di rimettersi in gioco. Nel 2022, in un momento in cui Riccardo cercava una nuova strada, pubblica i primi video su TikTok quasi per curiosità. Alcuni girano molto più del previsto.',
      'Da lì il passo verso YouTube è breve: prima gli stessi short ironici, poi le serie walkthrough, completando i giochi al 100% con tutte le missioni secondarie. Più completista che cacciatore di trofei.',
      'Oggi FunnyGameRick unisce gameplay, meme e contenuti ironici. Riccardo scrive, registra e monta tutto da solo, e risponde personalmente ai messaggi della sua community.',
    ],
    pillars: [
      {
        title: 'Autenticità',
        description: 'Un’identità costruita in modo spontaneo, video dopo video, senza filtri da studio.',
      },
      {
        title: 'Creatività',
        description: 'Gameplay, ironia e nuovi format: lo stesso gioco raccontato in modi diversi.',
      },
      {
        title: 'Community',
        description: 'Un rapporto diretto: commenti e messaggi hanno una risposta, e la dà lui.',
      },
    ],
  },

  /**
   * Metriche. `value: null` = dato non disponibile → la card non viene mostrata.
   * `approximate: true` mostra il valore come arrotondato (es. "75,2K").
   */
  metricsUpdatedAt: '2026-10-18',
  metricsSource:
    'YouTube Studio, TikTok Studio, Instagram Insights e profilo Facebook. Visualizzazioni e interazioni: ultimi 90 giorni (21 lug – 18 ott 2026)',
  platforms: [
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@FunnyGameRick',
      url: 'https://www.youtube.com/@FunnyGameRick',
      metrics: [
        { label: 'Iscritti', value: FOLLOWERS.youtube, primary: true },
        { label: 'Visualizzazioni in 90 giorni', value: VIEWS_90D.youtube },
        { label: 'Video pubblicati', value: 6600, approximate: true },
      ],
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@riccardo_buttitta',
      url: 'https://www.tiktok.com/@riccardo_buttitta',
      metrics: [
        { label: 'Follower', value: FOLLOWERS.tiktok, primary: true },
        { label: 'Visualizzazioni post in 90 giorni', value: VIEWS_90D.tiktok, approximate: true },
        { label: 'Mi piace totali', value: 1000000, approximate: true },
      ],
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@funnygamerick',
      url: 'https://www.instagram.com/funnygamerick',
      metrics: [
        { label: 'Follower', value: FOLLOWERS.instagram, primary: true },
        { label: 'Visualizzazioni in 90 giorni', value: VIEWS_90D.instagram },
        { label: 'Interazioni in 90 giorni', value: 91621 },
      ],
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'Riccardo Buttitta - Funnygamerick',
      url: 'https://www.facebook.com/riccardo.buttitta.14',
      metrics: [
        { label: 'Follower', value: FOLLOWERS.facebook, primary: true },
        { label: 'Post pubblicati', value: 10722 },
      ],
    },
    {
      id: 'twitch',
      label: 'Twitch',
      handle: 'funnygamerick',
      url: 'https://www.twitch.tv/funnygamerick',
      metrics: [{ label: 'Follower', value: null, primary: true }],
    },
    {
      id: 'telegram',
      label: 'Telegram',
      handle: 't.me/FunnyGameRick',
      url: 'https://t.me/FunnyGameRick',
      metrics: [{ label: 'Iscritti', value: null, primary: true }],
    },
  ],

  /** Totali calcolati dai numeri qui sopra. */
  aggregateMetrics: [
    {
      label: 'Follower totali su YouTube, TikTok, Instagram e Facebook',
      value: FOLLOWERS.youtube + FOLLOWERS.tiktok + FOLLOWERS.instagram + FOLLOWERS.facebook,
    },
    {
      label: 'Visualizzazioni in 90 giorni su YouTube, Instagram e TikTok',
      value: VIEWS_90D.youtube + VIEWS_90D.instagram + VIEWS_90D.tiktok,
      approximate: true,
    },
  ],

  contentPillars,

  /**
   * Partnership. `kind` distingue la natura del rapporto: non tutto è una sponsorizzazione.
   *  - 'creator-program'  → programma creator dell'editore
   *  - 'game-access'      → accesso a giochi/codici tramite piattaforma
   *  - 'commercial'       → collaborazione commerciale confermata
   *  - 'affiliate'        → programma di affiliazione
   * `logo` resta null finché non ci sono loghi ufficiali utilizzabili.
   */
  partnerships: [
    {
      name: 'Ubisoft Creator Program',
      kind: 'creator-program',
      description: 'Partecipazione al programma creator di Ubisoft, con accesso a titoli e contenuti dell’editore.',
      logo: null,
    },
    {
      name: 'Deep Silver Creator Collective',
      kind: 'creator-program',
      description: 'Partecipazione al collettivo creator di Deep Silver, con il giveaway di Kingdom Come: Deliverance II.',
      logo: null,
      highlight: 'Kingdom Come: Deliverance II',
    },
    {
      name: 'Keymailer',
      kind: 'game-access',
      description: 'Utilizzo della piattaforma per ricevere codici e opportunità legate all’uscita di nuovi videogiochi.',
      logo: null,
    },
  ],
  // Riquadro "programmi di affiliazione" nascosto su richiesta. Per mostrarlo: { note: '...', names: ['Amazon', ...] }
  affiliatePrograms: null,
  sponsoredContent,

  audience,
  communityNote:
    'Dietro i numeri ci sono persone vere. Riccardo legge i commenti, risponde ai messaggi e costruisce i contenuti anche a partire da quello che chiede la sua community. Per un brand significa parlare a un pubblico che si fida della voce che lo racconta.',

  collaborationFormats,
  collaborationNote:
    'Ogni collaborazione viene progettata sugli obiettivi del brand e sulla coerenza con il pubblico di FunnyGameRick. Nessun pacchetto preconfezionato: si parte da un’idea e la si costruisce insieme.',
  eventsNote: 'Disponibile per eventi e trasferte, con condizioni da concordare.',

  /**
   * Contenuti in evidenza (sezione "Press play"). Array vuoto = sezione nascosta.
   * format 'vertical' = short/reel/tiktok, 'horizontal' = video o serie.
   */
  featuredContent,

  /** Credito in fondo alla pagina. */
  credit: { label: 'Influencee', url: 'https://influencee.it' },

  contact: {
    /** Email professionale. null = nessun pulsante email (la CTA usa `fallbackUrl`). */
    email: 'riccardobuttitta91@gmail.com',
    /** Canale da usare per la CTA quando l'email non è ancora disponibile. */
    fallbackUrl: 'https://www.instagram.com/funnygamerick',
    fallbackLabel: 'Scrivi su Instagram',
    fallbackNote: 'Per un primo contatto, scrivi in direct su Instagram.',
    emailSubject: 'Proposta di collaborazione — FunnyGameRick',
    /** Altri link utili mostrati nel footer (non social). */
    extraLinks: [{ label: 'Linktree', url: 'https://linktr.ee/RICCARDOBUTTITTA' }],
  },

  seo: {
    title: 'FunnyGameRick | Gaming Creator & Media Kit',
    description:
      'Scopri FunnyGameRick, content creator italiano tra gaming, gameplay, meme e intrattenimento. Esplora il media kit e proponi una collaborazione.',
  },
};
