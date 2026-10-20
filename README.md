# FunnyGameRick — Media kit

Landing page media kit di **FunnyGameRick** (Riccardo Buttitta): una sola pagina, in italiano, pensata per brand e agenzie.

Repository: `influencee-dev/funnygamerick---mediakit`. Ogni push su `main` viene pubblicato da Vercel.

**Stack:** Vite 6 · React 19 · TypeScript · Tailwind CSS 4 · Motion (animazioni) · Lucide (icone) · Simple Icons (loghi social) · font Oxanium e Inter installati in locale (nessuna chiamata a Google Fonts).

## Avvio

```bash
npm install
npm run dev        # http://localhost:3001
npm run build      # controllo TypeScript + build in dist/
npm run preview    # anteprima della build su http://localhost:4173
```

Serve Node.js 20 o superiore.

## Dove si modificano i contenuti

**Tutto è in `src/data/creator.ts`.** I componenti leggono solo da lì, nessun testo è scritto dentro il layout.

Regole:

- Un dato sconosciuto si lascia `null` (o un array vuoto `[]`): la pagina lo nasconde da sola. **Mai 0 o numeri stimati.**
- I numeri si scrivono interi (`75200`), la pagina li formatta in italiano (`75,2K`).
- `approximate: true` indica un valore arrotondato (come "75,2K" letto su YouTube): viene mostrato con `≈`.
- Dopo ogni aggiornamento delle metriche, aggiorna `metricsUpdatedAt` (formato `AAAA-MM-GG`).

Cosa succede quando un dato manca:

| Dato mancante | Comportamento |
| --- | --- |
| Follower di una piattaforma | La piattaforma compare in "Presente anche su", solo con link al profilo |
| Visualizzazioni medie, reach, engagement | La card non viene mostrata |
| Dati audience (età, genere, paesi…) | Al posto dei grafici c'è un testo sulla community |
| Video in evidenza (`featuredContent`) | La sezione "Press play" e la voce di menu "Video" spariscono |
| Email (`contact.email`) | Se tolta, la CTA porta al profilo Instagram (`fallbackUrl`) e sparisce il pulsante "copia email" |
| Logo partner | Card con monogramma grafico |
| Foto reale (`images.aboutPhoto`) | "Dietro il controller" mostra una scheda personaggio in stile HUD |

In sviluppo (`npm run dev`) la console del browser elenca i dati ancora da compilare.

## Dati presenti e fonti

Tutti i numeri vengono dalla cartella Drive "Media kit" condivisa da Riccardo (screenshot degli strumenti ufficiali), aggiornati al **18 ottobre 2026**:

| Piattaforma | Dato | Valore |
| --- | --- | --- |
| YouTube | Iscritti | 75.252 |
| YouTube | Visualizzazioni 90 giorni (21 lug – 18 ott) | 1.330.494 (Short 97,8%) |
| TikTok (@riccardo_buttitta) | Follower · Mi piace totali | 48.031 · 1 Mln |
| TikTok | Visualizzazioni post 90 giorni | 456,4K |
| Instagram | Follower | 32.372 |
| Instagram | Visualizzazioni · Interazioni 90 giorni | 1.420.015 · 91.621 (93% views da non follower) |
| Facebook | Follower · Post | 8.878 · 10.722 |

- Audience (età, genere, paesi; città per Instagram) di YouTube, TikTok e Instagram.
- Partnership: Ubisoft Creator Program, Deep Silver Creator Collective, Keymailer, con il marchio di ciascuno in bianco (`public/images/logos/`).
- Contenuti sponsorizzati: AC Black Flag Resynced, Forza Horizon 6, Darwin's Paradox!, giveaway Kingdom Come: Deliverance II, CalcioEz.
- Contenuti più visti: TikTok "Doppi sensi" (1,2 Mln views), Reel e Short più visti, serie Tomb Raider.
  Titoli, like e visualizzazioni dei singoli video sono letti dalle pagine pubbliche; le miniature sono salvate in `public/images/video/`.
- Foto reale (`public/images/riccardo-*.webp`, foto davanti al poster di Spider-Man, leggermente migliorata) e logo ad alta risoluzione (avatar).
- Email di contatto: riccardobuttitta91@gmail.com.

## Da aggiornare periodicamente

- [ ] Numeri e audience (ripetere gli screenshot ogni 1–3 mesi e aggiornare `creator.ts` + `metricsUpdatedAt`)
- [ ] Follower Twitch e iscritti Telegram (oggi solo link)
- [ ] Like del 4° Reel (C8fGIC1CRMf): la copertina è un fotogramma fornito, i numeri non sono disponibili

## Pubblicazione

1. Compila i dati mancanti in `src/data/creator.ts`.
2. Imposta l'URL definitivo, che serve per canonical e anteprima social:
   ```bash
   SITE_URL=https://dominio-definitivo.it npm run build
   ```
   (oppure crea un file `.env` partendo da `.env.example`).
3. Pubblica la cartella `dist/` su un hosting statico (Vercel, Netlify, Cloudflare Pages, o un qualsiasi web server).
   Su Vercel il progetto è collegato a questo repository: ogni push su `main` va in produzione.
   Impostazioni: framework Vite, build command `npm run build`, output `dist`, variabile `SITE_URL` con il dominio definitivo.
4. Controlla l'anteprima social con il [Sharing Debugger di Facebook](https://developers.facebook.com/tools/debug/) e il [Post Inspector di LinkedIn](https://www.linkedin.com/post-inspector/).

Non serve un backend: la pagina non ha moduli. Il contatto avviene via email (`mailto:`) o tramite il canale indicato in `fallbackUrl`.

## Struttura

```
src/
  data/creator.ts        ← contenuti (l'unico file da modificare)
  data/types.ts          tipi dei dati
  lib/format.ts          formattazione numeri/date e regole "mostra o nascondi"
  App.tsx                ordine delle sezioni e menu
  components/            una sezione per file: Hero, Stats, About, ContentUniverse,
                         Partnerships, Audience, Formats, Featured, Contact, Navbar, Footer
  components/ui/         elementi riutilizzabili (Reveal, CountUp, WaveField, PlatformIcon…)
  index.css              design token (colori, font) ed effetti grafici
public/                  immagini, favicon, og-image
```

**Design token** (`src/index.css`, blocco `@theme`): `night #030A18`, `deep #07152B`, `surface #0C203A`, `gaming #1165A3`, `cyan #63DFF7`, `cyan-bright #35D9FF`, `ink #F5FAFF`, `muted #A6B8CC`, `line #234663`.

**Accessibilità e movimento:** link "Vai al contenuto", focus sempre visibile, menu mobile chiudibile con Esc, testi alternativi sulle immagini. Con "riduci movimento" attivo nel sistema operativo le animazioni (rotazioni, count-up, parallax, onde) si fermano.
