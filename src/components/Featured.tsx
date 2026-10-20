import { ArrowUpRight, Play } from 'lucide-react';
import type { CreatorData, FeaturedItem } from '../data/types';
import { thumbnailFor, validFeatured } from '../lib/format';
import { PlatformIcon } from './ui/PlatformIcon';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export const PLATFORM_LABEL: Record<FeaturedItem['platform'], string> = {
  youtube: 'YouTube',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  twitch: 'Twitch',
};

/** Sezione "Press play": viene renderizzata solo se ci sono contenuti configurati (vedi App). */
export function Featured({ creator }: { creator: CreatorData }) {
  const items = validFeatured(creator);
  if (!items.length) return null;
  const vertical = items.filter((i) => i.format !== 'horizontal');
  const horizontal = items.filter((i) => i.format === 'horizontal');

  return (
    <section id="video" aria-labelledby="video-title" className="section">
      <div className="container-x">
        <SectionHeader
          id="video-title"
          index="08"
          label="Featured content"
          title={
            <>
              Press <span className="glow-text">play.</span>
            </>
          }
          subtitle="I contenuti che hanno girato di più su TikTok, Instagram e YouTube."
        />

        {vertical.length > 0 && (
          <>
            <Reveal>
              <h3 className="eyebrow mt-14">Short, Reel e TikTok più visti</h3>
            </Reveal>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {vertical.map((item, i) => (
                <Reveal as="li" key={item.url} delay={(i % 6) * 0.06}>
                  <VerticalCard item={item} />
                </Reveal>
              ))}
            </ul>
          </>
        )}

        {horizontal.length > 0 && (
          <>
            <Reveal>
              <h3 className="eyebrow mt-14">Video e serie</h3>
            </Reveal>
            <ul className={`mt-6 grid gap-5 ${horizontal.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {horizontal.map((item, i) => (
                <Reveal as="li" key={item.url} delay={i * 0.08}>
                  <HorizontalCard item={item} wide={horizontal.length === 1} />
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

export function VerticalCard({ item }: { item: FeaturedItem }) {
  const thumb = thumbnailFor(item);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-cyan/60"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-deep">
        {thumb ? (
          <img src={thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div aria-hidden="true" className="flex h-full w-full items-center justify-center bg-deep">
            <PlatformIcon id={item.platform} className="h-12 w-12 text-line" />
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
        <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-night/85">
          <PlatformIcon id={item.platform} colored className="h-4 w-4" />
        </span>
        <span aria-hidden="true" className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-night opacity-0 transition group-hover:opacity-100">
          <Play className="h-3.5 w-3.5 translate-x-px" fill="currentColor" />
        </span>
        <div className="absolute inset-x-3 bottom-3">
          <p className="text-[15px] leading-snug font-semibold text-ink">{item.title}</p>
          {(item.stats || item.meta) && <p className="mt-1 text-[13px] leading-snug text-cyan">{item.stats ?? item.meta}</p>}
        </div>
      </div>
      <span className="sr-only">Apri su {PLATFORM_LABEL[item.platform]} in una nuova scheda</span>
    </a>
  );
}

export function HorizontalCard({ item, kicker, wide = false }: { item: FeaturedItem; kicker?: string; wide?: boolean }) {
  const thumb = thumbnailFor(item);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card card-hover group flex h-full flex-col overflow-hidden ${wide ? 'lg:flex-row' : ''}`}
    >
      <div className={`relative aspect-video shrink-0 overflow-hidden bg-deep ${wide ? 'lg:w-3/5' : ''}`}>
        {thumb && item.format === 'vertical' ? (
          <>
            {/* Miniatura verticale: sfondo sfocato + immagine intera, senza ritagli strani. */}
            <img src={thumb} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl" />
            <img src={thumb} alt="" loading="lazy" decoding="async" className="relative mx-auto h-full w-auto object-contain" />
          </>
        ) : thumb ? (
          <img src={thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
        )}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan text-night transition group-hover:scale-110"
        >
          <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
        </span>
      </div>
      <div className={`flex min-w-0 flex-1 flex-col p-6 ${wide ? 'lg:justify-center lg:p-10' : ''}`}>
        <span className="flex items-center gap-2 text-sm text-muted">
          <PlatformIcon id={item.platform} colored className="h-4 w-4" />
          {kicker ?? item.meta ?? PLATFORM_LABEL[item.platform]}
        </span>
        <h4 className={`mt-2 font-display leading-snug font-semibold text-ink ${wide ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{item.title}</h4>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-cyan">
          Guarda su {PLATFORM_LABEL[item.platform]}
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
        <span className="sr-only">(si apre in una nuova scheda)</span>
      </div>
    </a>
  );
}
