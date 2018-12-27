import { h, FunctionalComponent } from 'preact';

import './Variables.css';
import Section from '~/components/Section';
import Example from '~/components/Example';
import SubSection from '../SubSection';

export interface VariablesProps {}

/**
 * @render react
 * @name Variables
 * @example
 * <Variables  />
 */
export const Variables: FunctionalComponent<VariablesProps> = () => (
  <Section title="Variables" subtitle="CSS Custom Properties">
    <p>
      This library uses css custom properties for colors, font size, font weight, border size, padding size, margin
      size, flex gaps, and transitions. By default postcss is setup to leave the css custom properties in the build,
      making this library <a href="https://caniuse.com/#feat=css-variables">not viable for Internet Explorer</a>.
      However, to expand the browser list this library can be compiled with cssnext to seed the classes with actual
      values at the cost of runtime flexibility. All of these properties are meant to be modified to fit the specific
      designs of your website, either by including a custom css file as a theme or compiling with your custom changes.
    </p>
    <SubSection title="Color Variables">
      <p>Color variables are set in pairs, the theme name and the its contrast color.</p>
      <Example>
        {`:root {
  --color-base: #111111;
  --color-base-contrast: #ffffff;
  --color-light: #111111;
  --color-light-contrast: #f4f4f4;
  --color-dark: #f4f4f4;
  --color-dark-contrast: #111111;
  --color-link: #357edd;
  --color-link-contrast: #ffffff;
  --color-primary: #eeeeee;
  --color-primary-contrast: #5e2ca5;
  --color-secondary: #eeeeee;
  --color-secondary-contrast: #a463f2;
  --color-accent: #555555;
  --color-accent-contrast: #ffb700;
  --color-info: #f4f4f4;
  --color-info-contrast: #357edd;
  --color-warning: #ff4136;
  --color-warning-contrast: #ffd700;
  --color-error: #ff4136;
  --color-error-contrast: #ffdfdf;
}`}
      </Example>
    </SubSection>

    <SubSection title="Base Size Variables">
      <p>
        The root size variable should be the default font height for your site. The standard recommended height is 16px.
        This size is then used to scale font size, fill size (border, padding, margin), border radius, and (in the
        future) box shadows.
      </p>
      <Example>
        {`:root {
  --size: 16px;
  --font-size: calc(var(--size) / 1);
  --fill-size: calc(var(--size) / 16);
  --radius-size: calc(var(--size) / 4);
}`}
      </Example>
    </SubSection>
    <SubSection title="Fill Sizes">
      <p>
        Fill sizes (border, margin, padding) can be overridden on a step by step basis. By default they all follow the
        same exponential stepping. Keep in mind that flex gaps reuse the margin sizes, as a flex gap is a special
        application of margin. Each of these sizes correspond to the similarly named class for their box fill type.
      </p>
      <Example>
        {`:root {
  --border-size-0: calc(var(--fill-size) * 0);
  --border-size-1: calc(var(--fill-size) * 1);
  --border-size-2: calc(var(--fill-size) * 2);
  --border-size-3: calc(var(--fill-size) * 4);
  --border-size-4: calc(var(--fill-size) * 8);
  --border-size-5: calc(var(--fill-size) * 16);
  --border-size-6: calc(var(--fill-size) * 32);
  --border-size-7: calc(var(--fill-size) * 64);

  --margin-size-0: calc(var(--fill-size) * 0);
  --margin-size-1: calc(var(--fill-size) * 1);
  --margin-size-2: calc(var(--fill-size) * 2);
  --margin-size-3: calc(var(--fill-size) * 4);
  --margin-size-4: calc(var(--fill-size) * 8);
  --margin-size-5: calc(var(--fill-size) * 16);
  --margin-size-6: calc(var(--fill-size) * 32);
  --margin-size-7: calc(var(--fill-size) * 64);

  --padding-size-0: calc(var(--fill-size) * 0);
  --padding-size-1: calc(var(--fill-size) * 1);
  --padding-size-2: calc(var(--fill-size) * 2);
  --padding-size-3: calc(var(--fill-size) * 4);
  --padding-size-4: calc(var(--fill-size) * 8);
  --padding-size-5: calc(var(--fill-size) * 16);
  --padding-size-6: calc(var(--fill-size) * 32);
  --padding-size-7: calc(var(--fill-size) * 64);
}`}
      </Example>
    </SubSection>
    <SubSection title="Border Radius">
      <p>
        Border radius has its own stepping that is linear. Additionally, border radius has a customizable step for 50%
        radius, otherwise known as circle that should probably be left as the default.
      </p>
      <Example>
        {`:root {
  --border-radius-circle: 50%;
  --border-radius-0: calc(var(--radius-size) * 0);
  --border-radius-1: calc(var(--radius-size) * 1);
  --border-radius-2: calc(var(--radius-size) * 2);
  --border-radius-3: calc(var(--radius-size) * 4);
}`}
      </Example>
    </SubSection>

    <SubSection title="Font Size">
      <p>
        Font sizes are achieved using relative sizings, or what has been called{' '}
        <a href="https://blog.envylabs.com/responsive-typographic-scales-in-css-b9f60431d1c4">
          Responsive Typographic Scales
        </a>
        . This allows one to establish a base font size for a section/component and to step fonts up or down relative to
        that base size, maintaining their relative size. It is a much cleaner way to establish font size on a page and
        lends itself very well to fluid resizing with css locks.
      </p>
      <Example>{`:root {
  --font-size-up-5: 2em;
  --font-size-up-4: 1.7511em;
  --font-size-up-3: 1.5157em;
  --font-size-up-2: 1.3195em;
  --font-size-up-1: 1.1487em;
  --font-size-0: 1em;
  --font-size-down-1: 0.8706em;
  --font-size-down-2: 0.7579em;
  --font-size-down-3: 0.6599em;
  --font-size-down-4: 0.5745em;
  --font-size-down-5: 0.5em;
}`}</Example>
    </SubSection>

    <SubSection title="Font Weight">
      <p>
        Font weights are a mixed bag. If a custom font is being used, not all font weights may be available. Thus, if
        you are using a custom font it is best to seed these properties with the font weights that are accessible. Most
        default browser fonts come with only normal (400) and bold (700) weights, so keep this in mind if your font
        weight classes aren't reflected correctly.
      </p>
      <Example>{`:root {
  --font-weight-up-3: 700;
  --font-weight-up-2: 600;
  --font-weight-up-1: 500;
  --font-weight-0: 400;
  --font-weight-down-1: 300;
  --font-weight-down-2: 200;
  --font-weight-down-3: 100;
}`}</Example>
    </SubSection>
  </Section>
);

export default Variables;
