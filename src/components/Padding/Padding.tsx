import { h, FunctionalComponent } from 'preact';

import './Padding.css';
import Section from '~/components/Section';
import SubSection from '../SubSection';
import ExampleContainer from '../ExampleContainer';

export interface PaddingProps {}

const paddingSides = ['pa-4', 'px-4', 'py-4', 'pl-4', 'pt-4', 'pb-4', 'pr-4'];
const paddingSizes = ['pa-0', 'pa-1', 'pa-2', 'pa-3', 'pa-4', 'pa-5', 'pa-6', 'pa-7'];

/**
 * @render react
 * @name Padding
 * @example
 * <Padding text="Hello World" />
 */
export const Padding: FunctionalComponent<PaddingProps> = () => (
  <Section title="Padding" subtitle="Thinking inside the box">
    <p>
      Padding is the recommended method of spacing between elements. Using padding as the primary element spacing
      technique keeps child elements from knowing about the spacing of their parents. Thus, padding is a great tool to
      maintain a sort of bastardized principle of least knowledge (
      <a href="https://en.wikipedia.org/wiki/Law_of_Demeter">Law of Demeter</a>). Any element should know how much space
      is between it and its children, but a child should not know how much space it needs from its parent.
    </p>

    <SubSection title="Padding Sides" subtitle=".p">
      <p>
        The padding classes pull from the {`--padding-size-{step}`} variables. They can be applied to all sides, x axis
        sides, y axis sides, top, left, bottom, and right.
      </p>
      <ExampleContainer title="Padding Sides Examples">
        <section class="fld-column flg-4">
          {paddingSides.map(x => (
            <div class={`bwa-1 ${x}`}>
              <div class="ct-light">{x}</div>
            </div>
          ))}
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Padding Sizes" subtitle=".p">
      <p>
        The padding classes pull from the {`--padding-size-{step}`} variables. They have size steppings from 0 to 7.
      </p>
      <ExampleContainer title="Padding Size Examples">
        <section class="fld-column flg-4">
          {paddingSizes.map(x => (
            <div class={`bwa-1 ${x}`}>
              <div class="ct-light">{x}</div>
            </div>
          ))}
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Padding;
