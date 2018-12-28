import { h, FunctionalComponent } from 'preact';

import './Margin.css';
import Section from '../Section';
import SubSection from '../SubSection';
import ExampleContainer from '../ExampleContainer';

export interface MarginProps {}

/**
 * @render react
 * @name Margin
 * @example
 * <Margin text="Hello World" />
 */
export const Margin: FunctionalComponent<MarginProps> = () => (
  <Section title="Margin" subtitle="Beyond the border">
    <p>
      Margins are useful for setting the spacing outside of an element or between elements. It is recommended to avoid
      margins when possible in order to avoid{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
        margin collapses
      </a>
      .
    </p>
    <SubSection title="Margin Sides" subtitle=".m">
      <p>
        The margin classes pull from the {`--margin-size-{step}`} variables. They can be applied to all sides, x axis
        sides, y axis sides, top, left, bottom, and right.
      </p>
      <ExampleContainer title="Margin Sides Examples">
        <section class="fld-column flg-4">
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-5">.ma-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mx-5">.mx-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 my-5">.my-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mt-5">.mt-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-5">.mr-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mb-5">.mb-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ml-5">.ml-5</div>
          </div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Margin Sizes" subtitle=".m">
      <p>Margin sizes have steps from 0 to 7.</p>
      <ExampleContainer title="Margin Sizes Examples">
        <section class="fld-column flg-4">
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-0">.ma-0</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-1">.ma-1</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-2">.ma-2</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-3">.ma-3</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-4">.ma-4</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-5">.ma-5</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-6">.ma-6</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 ma-7">.ma-7</div>
          </div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Margin Fudge" subtitle=".m">
      <p>
        Margins can also be sized according to percentages, positive and negative, with the values 10, 20, 25, 40, 50,
        60, 75, and 80.
      </p>
      <ExampleContainer title="Margin Positive Fudge Examples">
        <section class="fld-column flg-4">
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-10p">.mr-10p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-20p">.mr-20p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-25p">.mr-25p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-40p">.mr-40p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-50p">.mr-50p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-60p">.mr-60p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-75p">.mr-75p</div>
          </div>
          <div class="bwa-3 bcr-light">
            <div class="pa-2 bwa-1 mr-80p">.mr-80p</div>
          </div>
        </section>
      </ExampleContainer>
      <ExampleContainer title="Margin Negative Fudge Examples">
        <section class="fld-column flg-4">
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-10p">.mrm-10p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-20p">.mrm-20p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-25p">.mrm-25p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-40p">.mrm-40p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-50p">.mrm-50p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-60p">.mrm-60p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-75p">.mrm-75p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 mrm-80p">.mrm-80p</div>
          </div>
        </section>
      </ExampleContainer>
      <ExampleContainer title="Margin Fudge Examples">
        <section class="fld-column flg-4">
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-10p mrm-10p">.ml-10p.mrm-10p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-20p mrm-20p">.ml-20p.mrm-20p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-25p mrm-25p">.ml-25p.mrm-25p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-40p mrm-40p">.ml-40p.mrm-40p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-50p mrm-50p">.ml-50p.mrm-50p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-60p mrm-60p">.ml-60p.mrm-60p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-75p mrm-75p">.ml-75p.mrm-75p</div>
          </div>
          <div class="bwa-3 bcr-light" style="width: 50%;">
            <div class="pa-2 bwa-1 ml-80p mrm-80p">.ml-80p.mrm-80p</div>
          </div>
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Margin;
