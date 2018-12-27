import { h, FunctionalComponent } from 'preact';

import './Color.css';
import Section from '~/components/Section';
import SubSection from '../SubSection';
import ExampleContainer from '../ExampleContainer';

export interface ColorProps {}

/**
 * @render react
 * @name Color
 * @example
 * <Color />
 */
export const Color: FunctionalComponent<ColorProps> = () => (
  <Section title="Color" subtitle="Runtime color themes">
    <SubSection title="Color Theme" subtitle=".ct-{theme}, .ctr-{theme}">
      <p>
        The color theme can be applied to any element. The theme will set the color, background-color, and border-color
        of the element. For the {`.ct-{theme}`} classes, color and border-color come from the {`--color-{theme}`}{' '}
        variables while background-color comes from {`--color-{theme}-contrast`}. For the {`.ctr-{theme}`} classes,
        color and border-color come from {`--color-{theme}-contrast`} and background-color comes from{' '}
        {`--color-{theme}`}.
      </p>
      <ExampleContainer title="Color Theme Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-1 ct-base">.ct-base</div>
          <div class="pa-2 bwa-1 ct-light">.ct-light</div>
          <div class="pa-2 bwa-1 ct-dark">.ct-dark</div>
          <div class="pa-2 bwa-1 ct-link">.ct-link</div>
          <div class="pa-2 bwa-1 ct-primary">.ct-primary</div>
          <div class="pa-2 bwa-1 ct-secondary">.ct-secondary</div>
          <div class="pa-2 bwa-1 ct-accent">.ct-accent</div>
          <div class="pa-2 bwa-1 ct-info">.ct-info</div>
          <div class="pa-2 bwa-1 ct-warning">.ct-warning</div>
          <div class="pa-2 bwa-1 ct-error">.ct-error</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title="Color Theme Reverse Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-1 ctr-base">.ctr-base</div>
          <div class="pa-2 bwa-1 ctr-light">.ctr-light</div>
          <div class="pa-2 bwa-1 ctr-dark">.ctr-dark</div>
          <div class="pa-2 bwa-1 ctr-link">.ctr-link</div>
          <div class="pa-2 bwa-1 ctr-primary">.ctr-primary</div>
          <div class="pa-2 bwa-1 ctr-secondary">.ctr-secondary</div>
          <div class="pa-2 bwa-1 ctr-accent">.ctr-accent</div>
          <div class="pa-2 bwa-1 ctr-info">.ctr-info</div>
          <div class="pa-2 bwa-1 ctr-warning">.ctr-warning</div>
          <div class="pa-2 bwa-1 ctr-error">.ctr-error</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Color Foreground" subtitle=".cf-{theme}, .cfr-{theme}">
      <p>
        The foreground color can be set to any of the theme variables. The {`.cf-{theme}`} classes pull from the{' '}
        {`--color-{theme}`} variables and {`.cfr-{theme}`} pull from {`--color-{theme}-contrast`}.
      </p>
      <ExampleContainer title="Foreground Color Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 cb-base cf-base">.cf-base</div>
          <div class="pa-2 cb-base cf-light">.cf-light</div>
          <div class="pa-2 cb-base cf-dark">.cf-dark</div>
          <div class="pa-2 cb-base cf-link">.cf-link</div>
          <div class="pa-2 cb-base cf-primary">.cf-primary</div>
          <div class="pa-2 cb-base cf-secondary">.cf-secondary</div>
          <div class="pa-2 cb-base cf-accent">.cf-accent</div>
          <div class="pa-2 cb-base cf-info">.cf-info</div>
          <div class="pa-2 cb-base cf-warning">.cf-warning</div>
          <div class="pa-2 cb-base cf-error">.cf-error</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title="Foreground Reverse Color Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 cb-base cfr-base">.cfr-base</div>
          <div class="pa-2 cb-base cfr-light">.cfr-light</div>
          <div class="pa-2 cb-base cfr-dark">.cfr-dark</div>
          <div class="pa-2 cb-base cfr-link">.cfr-link</div>
          <div class="pa-2 cb-base cfr-primary">.cfr-primary</div>
          <div class="pa-2 cb-base cfr-secondary">.cfr-secondary</div>
          <div class="pa-2 cb-base cfr-accent">.cfr-accent</div>
          <div class="pa-2 cb-base cfr-info">.cfr-info</div>
          <div class="pa-2 cb-base cfr-warning">.cfr-warning</div>
          <div class="pa-2 cb-base cfr-error">.cfr-error</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Color Background" subtitle=".cb-{theme}, .cbr-{theme}">
      <p>
        The background color can be set to any of the theme variables. The {`.cb-{theme}`} classes pull from the{' '}
        {`--color-{theme}-contrast`} variables and {`.cbr-{theme}`} pull from {`--color-{theme}`}.
      </p>
      <ExampleContainer title="Background Color Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 cb-base">.cb-base</div>
          <div class="pa-2 ct-light">.cb-light</div>
          <div class="pa-2 ct-dark">.cb-dark</div>
          <div class="pa-2 cb-link">.cb-link</div>
          <div class="pa-2 cb-primary">.cb-primary</div>
          <div class="pa-2 cb-secondary">.cb-secondary</div>
          <div class="pa-2 cb-accent">.cb-accent</div>
          <div class="pa-2 cb-info">.cb-info</div>
          <div class="pa-2 cb-warning">.cb-warning</div>
          <div class="pa-2 cb-error">.cb-error</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title="Background Reverse Color Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 ctr-base">.cbr-base</div>
          <div class="pa-2 ctr-light">.cbr-light</div>
          <div class="pa-2 cbr-dark">.cbr-dark</div>
          <div class="pa-2 cbr-link">.cbr-link</div>
          <div class="pa-2 cbr-primary">.cbr-primary</div>
          <div class="pa-2 cbr-secondary">.cbr-secondary</div>
          <div class="pa-2 cbr-accent">.cbr-accent</div>
          <div class="pa-2 cbr-info">.cbr-info</div>
          <div class="pa-2 cbr-warning">.cbr-warning</div>
          <div class="pa-2 cbr-error">.cbr-error</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Color Psuedo Selectors" subtitle=".c{t, tr, f, fr, b, br}-{theme}-{psuedo}">
      <p>
        Color themes can also be applied based on psuedo classes. The available psuedo classea are: required, invalid,
        read-only, hover, and focus. This is primarily useful for naked form elements. Here is an example.
      </p>
      <ExampleContainer title="Color Hover Psuedoselector Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-1 ct-primary ctr-primary-hover">.ct-primary.ctr-primary-hover</div>
          <div class="pa-2 bwa-1 ct-secondary ctr-secondary-hover">.ct-secondary.ctr-secondary-hover</div>
          <div class="pa-2 bwa-1 ct-accent ctr-accent-hover">.ct-accent.ctr-accent-hover</div>
          <div class="pa-2 bwa-1 ct-info ctr-info-hover">.ct-info.ctr-info-hover</div>
          <div class="pa-2 bwa-1 ct-error ctr-error-hover">.ct-error.ctr-error-hover</div>
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Color;
