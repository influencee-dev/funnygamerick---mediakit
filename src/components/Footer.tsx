import type { CreatorData } from '../data/types';
import { PlatformIcon } from './ui/PlatformIcon';

/** Footer: riga di icone social grandi e cliccabili, poi il credito a chi ha realizzato il media kit. */
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

      {creator.credit && (
        <div className="border-t border-line/70">
          <p className="container-x py-6 text-center text-sm text-muted">
            Media kit realizzato da{' '}
            <a
              href={creator.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              {creator.credit.label}
            </a>{' '}
            · {year}
          </p>
        </div>
      )}
    </footer>
  );
}
