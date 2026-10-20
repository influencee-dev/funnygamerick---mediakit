import { MessageCircle, Radio, Repeat } from 'lucide-react';
import { useId, useState, type KeyboardEvent } from 'react';
import type { AudiencePlatform, CreatorData, Datum } from '../data/types';
import { hasAudienceData, hasValue, primaryMetric } from '../lib/format';
import { PlatformIcon } from './ui/PlatformIcon';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Audience({ creator }: { creator: CreatorData }) {
  const show = hasAudienceData(creator);
  return (
    <section id="community" aria-labelledby="community-title" className="section overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(17,101,163,0.18),transparent_70%)]" />
      <div className="container-x">
        <SectionHeader
          id="community-title"
          index="06"
          label="Audience & community"
          title={
            <>
              Non solo visualizzazioni. <span className="glow-text">Persone.</span>
            </>
          }
        />
        {show ? <AudienceData creator={creator} /> : <CommunityStory creator={creator} />}
      </div>
    </section>
  );
}

const TRAITS = [
  { icon: MessageCircle, title: 'Risposte dirette', text: 'Commenti e messaggi li legge e li risponde lui, in prima persona.' },
  { icon: Repeat, title: 'Un appuntamento quotidiano', text: 'Da 1 a 4 short al giorno: la community sa che troverà sempre qualcosa di nuovo.' },
  { icon: Radio, title: 'Video e live', text: 'Le serie gameplay si seguono anche in diretta, giocando insieme a chi guarda.' },
];

function CommunityStory({ creator }: { creator: CreatorData }) {
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-7">
        <blockquote className="relative border-l-2 border-cyan pl-6 sm:pl-8">
          <p className="text-xl leading-relaxed font-medium text-ink sm:text-2xl">{creator.communityNote}</p>
        </blockquote>
      </Reveal>
      <ul className="grid gap-4 lg:col-span-5">
        {TRAITS.map((t, i) => (
          <Reveal as="li" key={t.title} delay={0.1 + i * 0.08} className="card card-hover flex gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-deep text-cyan">
              <t.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold tracking-wide text-ink">{t.title}</span>
              <span className="mt-1 block text-[15px] leading-relaxed text-muted">{t.text}</span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

function AudienceData({ creator }: { creator: CreatorData }) {
  const { audience } = creator;
  const platforms = audience.platforms.filter((p) => p.ageRanges.length + p.gender.length + p.topCountries.length > 0);
  const [active, setActive] = useState(platforms[0]?.id);
  const current = platforms.find((p) => p.id === active) ?? platforms[0];
  const baseId = useId();

  // Ripartizione della community: calcolata dai follower reali di ogni piattaforma.
  const split = creator.platforms
    .map((p) => ({ p, m: primaryMetric(p) }))
    .filter(({ m }) => m && hasValue(m))
    .map(({ p, m }) => ({ id: p.id, label: p.label, value: m!.value as number }));
  const total = split.reduce((a, b) => a + b.value, 0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = platforms[(i + (e.key === 'ArrowRight' ? 1 : platforms.length - 1)) % platforms.length];
    setActive(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  return (
    <>
      <Reveal>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">{creator.communityNote}</p>
      </Reveal>

      {audience.insights.length > 0 && (
        <Reveal delay={0.05}>
          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {audience.insights.map((ins) => (
              <div key={ins.label} className="card flex flex-col p-6">
                <dt className="order-2 mt-2 text-[15px] leading-snug text-muted">{ins.label}</dt>
                <dd className="order-1 display text-5xl text-cyan">{ins.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      {current && (
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
            <div role="tablist" aria-label="Piattaforma" className="flex flex-wrap gap-2">
              {platforms.map((p, i) => {
                const selected = p.id === current.id;
                return (
                  <button
                    key={p.id}
                    id={`${baseId}-tab-${p.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(p.id)}
                    onKeyDown={(e) => onKey(e, i)}
                    className={`flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors ${
                      selected ? 'border-cyan bg-cyan text-night' : 'border-line bg-deep text-ink hover:border-cyan/60'
                    }`}
                  >
                    <PlatformIcon id={p.id} className="h-4 w-4" />
                    {p.label}
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-muted">{current.basis}</p>
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${current.id}`}
            className="mt-6 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <BarsCard title="Fasce d’età" data={current.ageRanges} highlightMax />
            <BarsCard title="Genere" data={current.gender} />
            <PlacesCard platform={current} />
          </div>
        </Reveal>
      )}

      {split.length > 1 && (
        <Reveal delay={0.1}>
          <div className="card mt-5 p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="eyebrow">Community per piattaforma</h3>
              <p className="text-sm text-muted">
                {total.toLocaleString('it-IT')} follower totali
              </p>
            </div>
            <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-deep" aria-hidden="true">
              {split.map((s, i) => (
                <span
                  key={s.id}
                  className="h-full"
                  style={{ width: `${(s.value / total) * 100}%`, background: SPLIT_COLORS[i % SPLIT_COLORS.length] }}
                />
              ))}
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
              {split.map((s, i) => (
                <li key={s.id} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: SPLIT_COLORS[i % SPLIT_COLORS.length] }} aria-hidden="true" />
                  <span>
                    <span className="block text-sm text-muted">{s.label}</span>
                    <span className="block font-display text-2xl font-bold text-ink tabular-nums">{pct((s.value / total) * 100)}</span>
                    <span className="block text-sm text-muted tabular-nums">{s.value.toLocaleString('it-IT')} follower</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {audience.source && <p className="mt-6 text-sm text-muted">Fonte: {audience.source}.</p>}
    </>
  );
}

/* Sfumature della stessa famiglia cyan/blu, distinguibili tra loro sul fondo scuro. */
const SPLIT_COLORS = ['#63DFF7', '#2E9BD6', '#1165A3', '#A6E9F7'];

const pct = (v: number) => `${v.toLocaleString('it-IT', { maximumFractionDigits: 1 })}%`;

function BarsCard({ title, data, highlightMax = false }: { title: string; data: Datum[]; highlightMax?: boolean }) {
  if (!data.length) return null;
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="card p-7">
      <h3 className="eyebrow">{title}</h3>
      <ul className="mt-6 space-y-3.5">
        {data.map((d) => {
          const top = highlightMax && d.value === max;
          return (
            <li key={d.label}>
              <div className="flex items-baseline justify-between text-[15px]">
                <span className={top ? 'font-semibold text-ink' : 'text-ink/90'}>{d.label}</span>
                <span className="font-semibold text-ink tabular-nums">{pct(d.value)}</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-deep" aria-hidden="true">
                <div
                  className={`h-full rounded-full ${top ? 'bg-cyan' : 'bg-gaming'}`}
                  style={{ width: `${Math.max(1.5, Math.min(100, (d.value / max) * 100))}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PlacesCard({ platform }: { platform: AudiencePlatform }) {
  const { topCountries, topCities } = platform;
  if (!topCountries.length && !topCities?.length) return null;
  return (
    <div className="card p-7 md:col-span-2 lg:col-span-1">
      <h3 className="eyebrow">Paesi principali</h3>
      <ul className="mt-6 space-y-3">
        {topCountries.map((d, i) => (
          <li key={d.label} className="flex items-baseline justify-between text-[15px]">
            <span className={i === 0 ? 'font-semibold text-ink' : 'text-ink/90'}>{d.label}</span>
            <span className={`tabular-nums ${i === 0 ? 'display text-3xl text-cyan' : 'font-semibold text-ink'}`}>{pct(d.value)}</span>
          </li>
        ))}
      </ul>
      {topCities && topCities.length > 0 && (
        <>
          <h3 className="eyebrow mt-8">Città principali</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {topCities.map((c) => (
              <li key={c.label} className="chip">
                {c.label} <span className="font-semibold text-ink tabular-nums">{pct(c.value)}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
