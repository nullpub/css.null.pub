import { h, FunctionalComponent } from 'preact';

import './Flex.css';
import Section from '~/components/Section';
import SubSection from '~/components/SubSection';
import Example from '~/components/Example';
import ExampleContainer from '~/components/ExampleContainer';

export interface FlexProps {}

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
        Flexbox is an incredibly powerful tool for layout. It's also supported by virtually all available browsers
        (aside from ie9). Rather than get right into it with the details of these classes, it seems more appropriate to
        give some examples of what a good api for flexbox can do. To start, create a parent container and set a flex
        direction with a .fld class and then set a flex gap with a .flg class. Then, set .fls classes on the child
        containers.
      </p>
      <ExampleContainer title=".fld-row.flg-4">
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

      <ExampleContainer title=".fld-row.flg-2">
        <section class="fld-row flg-2">
          <div class="bwa-1 pa-2 fls-1-1">.fls-1-1</div>
          <div class="bwa-1 pa-2 fls-5-1">.fls-5-1</div>
          <div class="bwa-1 pa-2 fls-5-1">.fls-5-1</div>
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
      <ExampleContainer title=".fld-row.flg-7">
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
        <section class="fld-row flg-4">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
          <div class="bwa-1 pa-2 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row-reverse.flg-4">
        <section class="fld-row-reverse flg-4">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
          <div class="bwa-1 pa-2 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flg-4">
        <section class="fld-column flg-4">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
          <div class="bwa-1 pa-2 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column-reverse.flg-4">
        <section class="fld-column-reverse flg-4">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
          <div class="bwa-1 pa-2 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Flex Gap" subtitle=".flg">
      <p>
        Flex gap classes set the gap size (margin) inbetween child elements. The flex gaps use the same fill sizing as
        margin, since that the property that is being set. Additionally, the gap always lies along the major flex axis.
        Unfortunately, flex gaps do not respect direction: ltr for fld-row and fld-row-reverse. This is beyond the
        ability of css to handle. Flex gaps can range from steps 0 to 7.
      </p>
      <ExampleContainer title=".fld-row.flg-0">
        <section class="fld-row flg-0">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-1">
        <section class="fld-row flg-1">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-2">
        <section class="fld-row flg-2">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-3">
        <section class="fld-row flg-3">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-4">
        <section class="fld-row flg-4">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-5">
        <section class="fld-row flg-5">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-6">
        <section class="fld-row flg-6">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flg-7">
        <section class="fld-row flg-7">
          <div class="bwa-1 pa-2 fls-1-1">One</div>
          <div class="bwa-1 pa-2 fls-1-1">Two</div>
          <div class="bwa-1 pa-2 fls-1-1">Three</div>
        </section>
      </ExampleContainer>
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
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
          <div class="ma-3 pa-3 bwa-1 fls-1-1">.ma-3.fls-1-1</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Align Items" subtitle=".flai">
      <p>
        Flex containers can align their children along the minor axis in the following ways: stretch, center,
        flex-start, flex-end, baseline, initial, and inherit.
      </p>
      <ExampleContainer title=".fld-row.flai-stretch">
        <section class="pa-3 bwa-1 fld-row flg-3 flai-stretch" style="height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flai-stretch">
        <section class="pa-3 bwa-1 fld-column flg-3 flai-stretch">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flai-center">
        <section class="pa-3 bwa-1 fld-row flg-3 flai-center" style="height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flai-center">
        <section class="pa-3 bwa-1 fld-column flg-3 flai-center">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flai-flex-start">
        <section class="pa-3 bwa-1 fld-row flg-3 flai-flex-start" style="height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flai-flex-start">
        <section class="pa-3 bwa-1 fld-column flg-3 flai-flex-start">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.flai-flex-end">
        <section class="pa-3 bwa-1 fld-row flg-3 flai-flex-end" style="height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.flai-flex-end">
        <section class="pa-3 bwa-1 fld-column flg-3 flai-flex-end">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Justify Content" subtitle=".fljc">
      <p>
        Flex containers can align their children along the major axis in the following ways: center, start, end,
        flex-start, flex-end, left, right, space-between, space-around, space-evenly, stretch, inherit, initial, and
        unset.
      </p>
      <ExampleContainer title=".fld-row.fljc-center">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-center">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-center">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-center" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-flex-start">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-flex-start">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-flex-start">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-flex-start" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-flex-end">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-flex-end">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-flex-end">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-flex-end" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-space-between">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-space-between">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-space-between">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-space-between" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-space-around">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-space-around">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-space-around">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-space-around" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-space-evenly">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-space-evenly">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-space-evenly">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-space-evenly" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-0-0">One</div>
          <div class="pa-3 bwa-1 fls-0-0">Two</div>
          <div class="pa-3 bwa-1 fls-0-0">Three</div>
          <div class="pa-3 bwa-1 fls-0-0">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-row.fljc-stretch">
        <section class="pa-3 bwa-1 fld-row flg-3 fljc-stretch">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
      <ExampleContainer title=".fld-column.fljc-stretch">
        <section class="pa-3 bwa-1 fld-column flg-3 fljc-stretch" style="height: 200px;">
          <div class="pa-3 bwa-1 fls-1-1">One</div>
          <div class="pa-3 bwa-1 fls-1-1">Two</div>
          <div class="pa-3 bwa-1 fls-1-1">Three</div>
          <div class="pa-3 bwa-1 fls-1-1">Four</div>
        </section>
      </ExampleContainer>
    </SubSection>

    <SubSection title="Align Self" subtitle=".flas">
      <p>
        Occasionally it is necesary to override the align-items property for a single child in a flexbox container.
        Here, .flas is useful. Valid align self keywords are auto, normal, stretch, center, start, end, flex-start,
        flex-end, self-start, self-end, left, right, baseline, inherit, initial, and unset.
      </p>
      <ExampleContainer title=".fld-column.fld-sm-row">
        <section class="pa-3 bwa-1 fld-column fld-sm-row flg-3" style="min-height: 100px;">
          <div class="pa-3 bwa-1 fls-1-1 flas-stretch">.flas-stretch</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-center">.flas-center</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-flex-start">.flas-flex-start</div>
          <div class="pa-3 bwa-1 fls-1-1 flas-flex-end">.flas-flex-end</div>
        </section>
      </ExampleContainer>
    </SubSection>
  </Section>
);

export default Flex;