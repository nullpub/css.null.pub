import { h, FunctionalComponent } from 'preact';

import './Usage.css';
import SubSection from '~/components/SubSection';
import Section from '~/components/Section';
import Example from '~/components/Example';

export interface UsageProps {}

/**
 * @render react
 * @name Usage
 * @example
 * <Usage />
 */
export const Usage: FunctionalComponent<UsageProps> = () => (
  <Section title="Usage" subtitle="How to get things done">
    <SubSection title="Installation">
      <p>Include the latest full library (with breakpoints) using jsdelivr.</p>
      <Example>
        {`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@nll/css/dist/full.css" />`}
      </Example>
      <p>Include the minimal library (without breakpoints) using jsdelivr.</p>
      <Example>
        {`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@nll/css/dist/minimal.css" />`}
      </Example>
      <p>Pull in the complete library via npm and import it using the method of your choice.</p>
      <Example>{`npm i @nll/css`}</Example>
    </SubSection>
  </Section>
);

export default Usage;
