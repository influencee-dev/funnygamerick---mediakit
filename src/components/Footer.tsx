import type { CreatorData } from '../data/types';
import { PlatformIcon } from './ui/PlatformIcon';

/** Footer: riga di icone social grandi e cliccabili, poi firma e copyright. */
export function Footer({ creator }: { creator: CreatorData }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-deep">
      <div className="container-x py-14">
        <p className="eyebrow text-center">Seguimi su</p>
        <ul className="mt-8 flex flex-wrap items-start justify-center gap-x-4 gap-y-6 sm:gap-x-8" aria-label="Profili social">
          {creator.platforms.map((p) => (
            <li key={p.id}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-20 flex-col items-center gap-2.5 text-muted transition-colors hover:text-ink"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/60">
                  <PlatformIcon id={p.id} className="h-6 w-6 text-ink transition-colors group-hover:text-cyan" />
                </span>
                <span className="text-sm">{p.label}</span>
                <span className="sr-only">(si apre in una nuova scheda)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line/70">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
          <span className="font-display text-lg font-bold tracking-wide text-ink">
            Funny<span className="text-cyan">Game</span>Rick
          </span>
          <span className="text-center">
            © {year} {creator.realName} · {creator.name}. Tutti i diritti riservati.
          </span>
          {creator.contact.extraLinks.length > 0 && (
            <ul className="flex gap-4">
              {creator.contact.extraLinks.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
