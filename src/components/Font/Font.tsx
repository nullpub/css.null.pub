import { h, FunctionalComponent } from 'preact';

import './Font.css';
import Section from '~/components/Section';
import SubSection from '~/components/SubSection';
import ExampleContainer from '../ExampleContainer';

interface FontSizeSectionProps {
  classes: string;
}

const FontSizeSection: FunctionalComponent<FontSizeSectionProps> = ({ classes }) => (
  <section>
    <p style="white-space: nowrap;">{classes}</p>
    <section class={classes}>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <p>Paragraph</p>
      <small>Small</small>
    </section>
  </section>
);

const fontSizes = ['fsu-5', 'fsu-4', 'fsu-3', 'fsu-2', 'fsu-1', 'fs-0', 'fsd-1', 'fsd-2', 'fsd-3', 'fsd-4', 'fsd-5'];
const fontWeights = ['fwd-3', 'fwd-2', 'fwd-1', 'fw-0', 'fwu-1', 'fwu-2', 'fwu-3'];

export interface FontProps {}

/**
 * @render react
 * @name Font
 * @example
 * <Font  />
 */
export const Font: FunctionalComponent<FontProps> = () => (
  <Section title="Font" subtitle="Ems for diems">
    <p>
      Font sizing can be a pain, but it doesn't have to be. This library makes use of{' '}
      <a href="http://spencermortensen.com/articles/typographic-scale/">typographic scaling</a> using ems. Managing
      exact font sizes sucks, most of the time we just need to know how big a font is relative to another font in a
      section. We want this ratio to remain the same regardless of the base font of the page. This is where ems shine.
    </p>

    <SubSection title="Font Size" subtitle=".fs">
      <p>
        Font sizes can be stepped down or up 5 steps. This stepping is relative the the current containers font size
        (thus ems). Additionally, a container's font size can be stepped with the fs class. The included reset uses the
        derived steppings with the h1-h6, paragraph, and small classes. Thus, semantic markup can be used while
        maintaining clean relative font scales.
      </p>
      <ExampleContainer title="Font Size Examples">
        <section class="fld-row fljc-space-between flg-4 doa-auto">
          {fontSizes.map(x => (
            <FontSizeSection classes={x} />
          ))}
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Font Weight" subtitle=".fw">
      <p>
        Font weights can be stepped up or down 3 steps. Not all fonts include all font weights, so be sure to inspect
        your included font to determine which font weights are available.{' '}
      </p>
      <ExampleContainer title="Font Weight Examples">
        <section class="fld-column fld-sm-row flg-4 doa-auto">
          {fontWeights.map(x => (
            <div class={`${x} pa-3 bwa-1 fls-1-1`}>.{x}</div>
          ))}
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Font;
