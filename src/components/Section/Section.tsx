import './Section.css';

import { FunctionalComponent, h } from 'preact';

export interface SectionProps {
  title: string;
  subtitle?: string;
  classes?: string;
}

/**
 * @render react
 * @name Section
 * @example
 * <Section title="Title" subtitle="Subtitle" />
 */
export const Section: FunctionalComponent<SectionProps> = ({
  title,
  subtitle,
  classes,
  children,
}) => (
  <section id={title.replace(/\s+/g, '')} class="section">
    <header class="fld-row flg-4 flai-flex-end px-4">
      <h2>{title}</h2>
      {!!subtitle && <small class="pb-2">{subtitle}</small>}
      <p class="fls-1-1 pb-2 ta-right cf-link">
        <a href="#top">Top</a>
      </p>
    </header>
    <section class={`fld-column flg-5 pa-4 ct-light bra-2 sh-1 ${classes}`}>
      {children}
    </section>
  </section>
);

export default Section;
