import { h, FunctionalComponent } from 'preact';

import './Border.css';
import Section from '~/components/Section';
import SubSection from '~/components/SubSection';
import ExampleContainer from '../ExampleContainer';

export interface BorderProps {}

/**
 * @render react
 * @name Border
 * @example
 * <Border />
 */
export const Border: FunctionalComponent<BorderProps> = () => (
  <Section title="Border" subtitle="That thing that outlines your divs">
    <SubSection title="Border Width" subtitle=".bw">
      <p>
        Border width classes can be applied to (a)ll borders, (x) borders (left and right), (y) borders (top and
        bottom), or to each individual side of the border. By default, border width will apply border-style: solid; to
        the set border.
      </p>
      <ExampleContainer title="Border Side Examples">
        <section class="fld-column fld-sm-row flg-3">
          <div class="bwa-1 pa-2 fls-1-1">.bwa-1</div>
          <div class="bwx-1 pa-2 fls-1-1">.bwx-1</div>
          <div class="bwy-1 pa-2 fls-1-1">.bwy-1</div>
          <div class="bwl-1 pa-2 fls-1-1">.bwl-1</div>
          <div class="bwt-1 pa-2 fls-1-1">.bwt-1</div>
          <div class="bwb-1 pa-2 fls-1-1">.bwb-1</div>
          <div class="bwr-1 pa-2 fls-1-1">.bwr-1</div>
        </section>
      </ExampleContainer>
      <p>Border widths have steps from 0 to 7.</p>
      <ExampleContainer title="Border Size Examples">
        <section class="fld-column flg-3">
          <div class="bwa-0 pa-2">.bwa-0</div>
          <div class="bwa-1 pa-2">.bwa-1</div>
          <div class="bwa-2 pa-2">.bwa-2</div>
          <div class="bwa-3 pa-2">.bwa-3</div>
          <div class="bwa-4 pa-2">.bwa-4</div>
          <div class="bwa-5 pa-2">.bwa-5</div>
          <div class="bwa-6 pa-2">.bwa-6</div>
          <div class="bwa-7 pa-2">.bwa-7</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Border Style" subtitle=".bs">
      <p>
        Border styles can be used to override the default solid border style. To give a better idea of the less common
        border styles, a bwa-3 has been applied to the following examples.
      </p>
      <ExampleContainer title="Border Style Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-3 bs-none">.bs-none</div>
          <div class="pa-2 bwa-3 bs-hidden">.bs-hidden</div>
          <div class="pa-2 bwa-3 bs-dotted">.bs-dotted</div>
          <div class="pa-2 bwa-3 bs-dashed">.bs-dashed</div>
          <div class="pa-2 bwa-3 bs-solid">.bs-solid</div>
          <div class="pa-2 bwa-3 bs-double">.bs-double</div>
          <div class="pa-2 bwa-3 bs-groove">.bs-groove</div>
          <div class="pa-2 bwa-3 bs-ridge">.bs-ridge</div>
          <div class="pa-2 bwa-3 bs-inset">.bs-inset</div>
          <div class="pa-2 bwa-3 bs-outset">.bs-outset</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Border Colors" subtitle=".bc">
      <p>
        Border colors can be set directly from the theme pallettes. Keep in mind that it's almost always more useful to
        set the color theme, which also sets border colors.
      </p>
      <ExampleContainer title="Border Color Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-1 bc-base">.bc-base</div>
          <div class="pa-2 bwa-1 bc-dark">.bc-dark</div>
          <div class="pa-2 bwa-1 bc-light">.bc-light</div>
          <div class="pa-2 bwa-1 bc-link">.bc-link</div>
          <div class="pa-2 bwa-1 bc-primary">.bc-primary</div>
          <div class="pa-2 bwa-1 bc-secondary">.bc-secondary</div>
          <div class="pa-2 bwa-1 bc-accent">.bc-accent</div>
          <div class="pa-2 bwa-1 bc-info">.bc-info</div>
          <div class="pa-2 bwa-1 bc-warning">.bc-warning</div>
          <div class="pa-2 bwa-1 bc-error">.bc-error</div>
        </section>
      </ExampleContainer>
      <p>The contrast colors can also be used.</p>
      <ExampleContainer title="Border Color Reverse Examples">
        <section class="fld-column flg-3">
          <div class="pa-2 bwa-1 bcr-base">.bcr-base</div>
          <div class="pa-2 bwa-1 bcr-dark">.bcr-dark</div>
          <div class="pa-2 bwa-1 bcr-light">.bcr-light</div>
          <div class="pa-2 bwa-1 bcr-link">.bcr-link</div>
          <div class="pa-2 bwa-1 bcr-primary">.bcr-primary</div>
          <div class="pa-2 bwa-1 bcr-secondary">.bcr-secondary</div>
          <div class="pa-2 bwa-1 bcr-accent">.bcr-accent</div>
          <div class="pa-2 bwa-1 bcr-info">.bcr-info</div>
          <div class="pa-2 bwa-1 bcr-warning">.bcr-warning</div>
          <div class="pa-2 bwa-1 bcr-error">.bcr-error</div>
        </section>
      </ExampleContainer>
      <p>
        Lastly, there are additional classes that apply a theme color only on psuedo selectors. This is useful when
        creating form elements that need to change border color on any of the following selections.
      </p>
      <ul class="pl-4" style="list-style: circle inside;">
        <li>hover</li>
        <li>active</li>
        <li>focus</li>
        <li>required</li>
        <li>valid</li>
        <li>invalid</li>
        <li>read-only</li>
      </ul>
      <p>
        These classes follow the format of <span class="ct-dark px-3">{`.bc-{color}-{selector}`}</span>.
      </p>
    </SubSection>

    <SubSection title="Border Radius" subtitle=".br">
      <p>Last among the border classes is border radius. There are five total radiuses, circle and four steps.</p>
      <ExampleContainer title="Border Radius Examples">
        <section class="fld-row flg-3">
          <div class="fls-1-1 pa-2 bwa-1 bra-0">.bra-0</div>
          <div class="fls-1-1 pa-2 bwa-1 bra-1">.bra-1</div>
          <div class="fls-1-1 pa-2 bwa-1 bra-2">.bra-2</div>
          <div class="fls-1-1 pa-2 bwa-1 bra-3">.bra-3</div>
          <div class="fls-1-1 pa-2 bwa-1 bra-c">.bra-c</div>
        </section>
      </ExampleContainer>
      <p>
        Border radius can be applied to all sides, each corner individually, and to the pairs of corners on each side
        (top, right, bottom, left).
      </p>
      <ExampleContainer title="Border Radius Location Examples">
        <section class="fld-column flg-3 mb-4">
          <div class="pa-2 bwa-1 bra-1">.bra-1</div>
        </section>
        <section class="fld-row flg-3 mb-4">
          <div class="fls-1-1 pa-2 bwa-1 brt-1">.brt-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brr-1">.brr-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brb-1">.brb-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brl-1">.brl-1</div>
        </section>
        <section class="fld-row flg-3">
          <div class="fls-1-1 pa-2 bwa-1 brtl-1">.brtl-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brtr-1">.brtr-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brbr-1">.brbr-1</div>
          <div class="fls-1-1 pa-2 bwa-1 brbl-1">.brbl-1</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Advanced Border Usage">
      <p>Since each aspect of the border is applied individually, here as some advanced border examples.</p>
      <ExampleContainer title="Advanced Border Examples">
        <section class="fld-column flg-3">
          <div class="ct-light pa-4 bwb-2 brt-2">.bwb-2.brt-2</div>
          <div class="ctr-primary pa-4 bra-1 bwy-3 bcr-accent-hover">.bra-1.bwy-3.bcr-accent-hover</div>
          <div class="ct-warning pa-4 brtl-0 bwt-1 bwr-2 bwb-3 bwl-4 brtr-1 brbr-2 brbl-3">
            .bwt-1.bwr-2.bwb-3.bwl-4.brtr-0.brtr-1.brbr-2.brbl-3
          </div>
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Border;
