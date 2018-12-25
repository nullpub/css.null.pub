import { h, FunctionalComponent } from 'preact';

import './Reset.css';
import Section from '~/components/Section';

export interface ResetProps {}

/**
 * @render react
 * @name Reset
 * @example
 * <Reset />
 */
export const Reset: FunctionalComponent<ResetProps> = () => (
  <Section title="Reset" subtitle="Opinionated base styling">
    <p>
      The full and minimal packages come with an opinionated reset. First the{' '}
      <a href="https://meyerweb.com/eric/tools/css/reset/">Meyer Reset</a> is applied, then a handful of font and form
      based stylings are applied. This is the newest feature of this library and so is the least documented. Expect it
      to be filled out as the api is solidified.
    </p>
    <p>
      Currently, the only styling applies to header, paragraph, list, small, span, anchor, input, and button font sizes.
    </p>
  </Section>
);

export default Reset;
