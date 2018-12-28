import { h, FunctionalComponent } from 'preact';

import './Flex.css';
import Section from '~/components/Section';
import SubSection from '~/components/SubSection';
import Example from '~/components/Example';
import ExampleContainer from '~/components/ExampleContainer';

export interface FlexProps {}

const range = (count: number) => Array.from({ length: count }, (_, i) => i);

const FlexZero = (text?: string | number, classes?: string) => (
  <div class={`pa-3 bwa-1 fls-0-0 ${classes}`}>{text} .fls-0-0</div>
);
const FlexOne = (text?: string | number, classes?: string) => (
  <div class={`pa-3 bwa-1 fls-1-1 ${classes}`}>{text} .fls-1-1</div>
);

const FlexZeroRange = (count: number) => range(count).map(i => FlexZero(i + 1));
const FlexOneRange = (count: number) => range(count).map(i => FlexOne(i + 1));

const flexGaps = range(8).map(i => `flg-${i}`);
const alignItems = [
  'flai-stretch',
  'flai-center',
  'flai-flex-start',
  'flai-flex-end',
  'flai-baseline',
  'flai-initial',
  'flai-inherit',
];
const justifyContent = [
  'fljc-center',
  'fljc-start',
  'fljc-end',
  'fljc-flex-start',
  'fljc-flex-end',
  'fljc-left',
  'fljc-right',
  'fljc-space-between',
  'fljc-space-around',
  'fljc-space-evenly',
  'fljc-stretch',
  'fljc-inherit',
  'fljc-initial',
  'fljc-unset',
];

/**
 * @render react
 * @name Flex
 * @example
 * <Flex />
 */
export const Flex: FunctionalComponent<FlexProps> = () => (
  <Section title="Flex" subtitle="Clean flex atomic classes">
    <SubSection title="Basic Use">
      <p>
        Flexbox is an incredibly powerful tool for layout, much more powerful than any grid system (but not as powerful
        as css grid). It's also supported by virtually all available browsers (aside from ie9). Grid systems by design
        must fall short when it comes to responsive design due to their reliance on css hacks to achieve clean reflow.
        Thus, this library focuses on providing a well thought out flexbox api in lieu of a grid system.
      </p>
      <p>
        Anything that can be achieved with a grid system can be achieved with flexbox, the only difference is that the
        flexbox api was built to service the needs of responsive design without relying on floats, clearfixes, and
        deeply nested css classes. Following are a few examples of the primary use cases of a grid system as they would
        be handled by flex.
      </p>
      <p>
        Compare the following examples with those found{' '}
        <a href="https://tachyons.io/docs/layout/grid/">in tachyons grid examples</a> and{' '}
        <a href="https://getbootstrap.com/docs/4.2/layout/grid/">Bootstrap's grid</a>. Notice the need for container
        elements, row elements, and manually setting margins to achieve gutters. In particular, a good flex api allows
        you to control both the growth behaviours (when there is enough space to fit all of your content), and shrink
        behaviours (which elements should give up space first) which standard grid systems don't. If you are new to flex
        I recommend checking out <a href="https://flexboxfroggy.com/">Flexbox Froggy</a> to get up to speed or just copy
        paste from the examples below.
      </p>
      <ExampleContainer title=".fld-row.flg-4 - 10% 20% 30% 40%">
        <section class="fld-row flg-4">
          <div class="bwa-1 pa-2 fls-1-1">.fls-1-1</div>
          <div class="bwa-1 pa-2 fls-2-1">.fls-2-1</div>
          <div class="bwa-1 pa-2 fls-3-1">.fls-3-1</div>
          <div class="bwa-1 pa-2 fls-4-1">.fls-4-1</div>
        </section>
      </ExampleContainer>
      <Example>
        {`<section class="fld-row flg-4">
  <div class="fls-1-1">.fls-1-1</div>
  <div class="fls-2-1">.fls-2-1</div>
  <div class="fls-3-1">.fls-3-1</div>
  <div class="fls-4-1">.fls-4-1</div>
</section>`}
      </Example>

      <ExampleContainer title=".fld-row.flg-2 - 10% 40% 40% 10%">
        <section class="fld-row flg-2">
          <div class="bwa-1 pa-2 fls-1-1">.fls-1-1</div>
          <div class="bwa-1 pa-2 fls-5-1">.fls-4-1</div>
          <div class="bwa-1 pa-2 fls-5-1">.fls-4-1</div>
          <div class="bwa-1 pa-2 fls-1-1">.fls-1-1</div>
        </section>
      </ExampleContainer>
      <Example>
        {`<section class="fld-row flg-2">
  <div class="fls-1-1">.fls-1-1</div>
  <div class="fls-5-1">.fls-5-1</div>
  <div class="fls-5-1">.fls-5-1</div>
  <div class="fls-1-1">.fls-1-1</div>
</section>`}
      </Example>
      <ExampleContainer title=".fld-row.flg-7 - content-width remaining space">
        <section class="fld-row flg-7">
          <div class="bwa-1 pa-2 fls-0-0">.fls-0-0</div>
          <div class="bwa-1 pa-2 fls-1-1">.fls-1-1</div>
        </section>
      </ExampleContainer>
      <Example>
        {`<section class="fld-row flg-7">
  <div class="fls-0-0">.fls-0-0</div>
  <div class="fls-1-1">.fls-1-1</div>
</section>`}
      </Example>
    </SubSection>

    <SubSection title="Flex Direction" subtitle=".fld">
      <p>The flex direction classes set flex-direction and display: flex on the attached class.</p>
      <ExampleContainer title=".fld-row.flg-4">
        <section class="fld-row flg-4">{FlexOneRange(4)}</section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row-reverse.flg-4">
        <section class="fld-row-reverse flg-4">{FlexOneRange(4)}</section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flg-4">
        <section class="fld-column flg-4">{FlexOneRange(4)}</section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column-reverse.flg-4">
        <section class="fld-column-reverse flg-4">{FlexOneRange(4)}</section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Flex Gap" subtitle=".flg">
      <p>
        Flex gap classes set the gap size (margin) inbetween child elements, exactly like the grid-gap property for grid
        layout. The flex gaps use the same fill sizing as margin, since that the property that is being set.
        Additionally, the gap always lies along the major flex axis. Unfortunately, flex gaps do not respect direction:
        ltr for fld-row and fld-row-reverse. This is beyond the ability of css to handle. Flex gaps can range from steps
        0 to 7.
      </p>
      {flexGaps.map(flg => (
        <ExampleContainer title={`.fld-row.${flg}`}>
          <section class={`fld-row ${flg}`}>{FlexOneRange(3)}</section>
        </ExampleContainer>
      ))}
    </SubSection>

    <SubSection title="Flex Size" subtitle=".fls-{grow}-{shrink}">
      <p>
        Flex size sets the flex-grow and flex-shrink properties of the flex child. Grow and shrink can be stepped from 0
        to 5. A value of 0 for grow will keep the element from growing along the major axis. A value of 0 for shrink
        will keep the object from shrinking along the major axis. Thus .fls-0-0 will effectively size to fit the box
        content. For most cases, .fls-1-1 will suffice. To see how flex behaviours work with a responsive design, try
        resizing the window on a computer and watching the examples below.
      </p>
      <ExampleContainer title=".fld-column.fld-sm-row.flg-4">
        <section class="fld-column fld-sm-row flg-4">
          <div class="bwa-1 pa-2 fls-1-0">..... .... ... .. . .fls-1-0 . .. ... .... .....</div>
          <div class="bwa-1 pa-2 fls-1-1">..... .... ... .. . .fls-1-1 . .. ... .... .....</div>
          <div class="bwa-1 pa-2 fls-1-2">..... .... ... .. . .fls-1-2 . .. ... .... .....</div>
          <div class="bwa-1 pa-2 fls-1-3">..... .... ... .. . .fls-1-3 . .. ... .... .....</div>
          <div class="bwa-1 pa-2 fls-1-4">..... .... ... .. . .fls-1-4 . .. ... .... .....</div>
          <div class="bwa-1 pa-2 fls-1-5">..... .... ... .. . .fls-1-5 . .. ... .... .....</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fld-sm-row.flg-4">
        <section class="fld-column fld-sm-row flg-4">
          <div class="bwa-1 pa-2 fls-0-0">.fls-0-0</div>
          <div class="bwa-1 pa-2 fls-1-0">.fls-1-0</div>
          <div class="bwa-1 pa-2 fls-2-0">.fls-2-0</div>
          <div class="bwa-1 pa-2 fls-3-0">.fls-3-0</div>
          <div class="bwa-1 pa-2 fls-4-0">.fls-4-0</div>
          <div class="bwa-1 pa-2 fls-5-0">.fls-5-0</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Flex Basis" subtitle=".flb-{basis}">
      <p>
        A flex basis can be set on any flex child element. The following values are available: auto, fill, max-content,
        min-content, fit-content, content, inherit, initial, and unset. Flex basis determines the initial sizing of the
        containing box, before any available space calculations are made. Thus, if you need flex to respect the minimum
        content width of a container use .flb-min-content.
      </p>
      <ExampleContainer title=".flb-{keyword basis}">
        <section class="fld-row flg-4 mb-4">
          <div class="bwa-1 pa-2 fls-1-1 flb-auto">.flb-auto</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-fill">.flb-fill</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-max-content">.flb-max-content</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-min-content">.flb-min-content</div>
        </section>
        <section class="fld-row flg-4">
          <div class="bwa-1 pa-2 fls-1-1 flb-fit-content">.flb-fit-content</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-content">.flb-content</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-inherit">.flb-inherit</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-initial">.flb-initial</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-unset">.flb-unset</div>
        </section>
      </ExampleContainer>
      <p>Flex basis can also be initialized to a percentage of the parent container's major axis.</p>
      <ExampleContainer title=".flb-{percentage basis}">
        <section class="fld-row flg-4 mb-4">
          <div class="bwa-1 pa-2 fls-1-1 flb-25">.flb-25</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-25">.flb-25</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-50">.flb-50</div>
        </section>
        <section class="fld-row flg-4">
          <div class="bwa-1 pa-2 fls-1-1 flb-0">.flb-0</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-20">.flb-20</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-20">.flb-20</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-20">.flb-20</div>
          <div class="bwa-1 pa-2 fls-1-1 flb-30">.flb-30</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Flex Wrap" subtitle=".flw-{wrap}">
      <p>
        Flex wrap can be applied to parent containers when wrapping behavior is needed. Currently flex gap only gaps on
        the major flex axis and not the minor one, so flex wrap can have unintended side effects for layout. This may be
        fixed in future releases.
      </p>
      <ExampleContainer title=".fld-row.flw-wrap">
        <section class="fld-row flw-wrap">
          {range(30).map(_ => (
            <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          ))}
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Align Items" subtitle=".flai">
      <p>
        Flex containers can align their children along the minor axis in the following ways: stretch, center,
        flex-start, flex-end, baseline, initial, and inherit.
      </p>
      {alignItems.map(ai => (
        <ExampleContainer title={`.fld-row.${ai}`}>
          <section class={`pa-3 bwa-1 fld-row flg-3 ${ai}`} style="height: 100px;">
            {FlexOneRange(4)}
          </section>
        </ExampleContainer>
      ))}
      {alignItems.map(ai => (
        <ExampleContainer title={`.fld-column.${ai}`}>
          <section class={`pa-3 bwa-1 fld-column flg-3 ${ai}`}>{FlexOneRange(4)}</section>
        </ExampleContainer>
      ))}
    </SubSection>

    <SubSection title="Justify Content" subtitle=".fljc">
      <p>
        Flex containers can align their children along the major axis in the following ways: center, start, end,
        flex-start, flex-end, left, right, space-between, space-around, space-evenly, stretch, inherit, initial, and
        unset.
      </p>
      {justifyContent.map(jc => (
        <ExampleContainer title={`.fld-row.flg-3.${jc}`}>
          <section class={`pa-3 bwa-1 fld-row flg-3 ${jc}`}>{FlexZeroRange(4)}</section>
        </ExampleContainer>
      ))}
      {justifyContent.map(jc => (
        <ExampleContainer title={`.fld-column.flg-3.${jc}`}>
          <section class={`pa-3 bwa-1 fld-column flg-3 ${jc}`} style="height: 200px;">
            {FlexZeroRange(4)}
          </section>
        </ExampleContainer>
      ))}
    </SubSection>

    <SubSection title="Align Self" subtitle=".flas">
      <p>
        Occasionally it is necesary to override the align-items property for a single child in a flexbox container.
        Here, .flas is useful. Valid align self keywords are auto, normal, stretch, center, start, end, flex-start,
        flex-end, self-start, self-end, left, right, baseline, inherit, initial, and unset.
      </p>
      <ExampleContainer title=".fld-column.fld-sm-row">
        <section class="pa-3 bwa-1 fld-column fld-sm-row flg-3" style="min-height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1 flas-stretch">.fls-1-1.flas-stretch</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-center">.fls-1-1.flas-center</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-flex-start">.fls-1-1.flas-flex-start</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-flex-end">.fls-1-1.flas-flex-end</div>
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Flex;
