import { h, FunctionalComponent } from 'preact';

import './Future.css';
import Section from '../Section';
import SubSection from '../SubSection';

export interface FutureProps {}

/**
 * @render react
 * @name Future
 * @example
 * <Future text="Hello World" />
 */
export const Future: FunctionalComponent<FutureProps> = () => (
  <Section title="Future" subtitle="Things to come">
    <p>
      This library is quite young. Although the initial goals have all been met and there is a lot of power here, there
      is still a lot of refinement needed. Following are some of the known features that will eventually be implemented,
      documented, or exposed.
    </p>

    <SubSection title="Breakpoints">
      <p>
        @nll/css already has a build with clean breakpoint classes for margin, padding, flex, font, display, and more.
        However, these classes are still being toyed with. While undocumented, the classes are all in the full build.
        Aside from flex, it's entirely possible to have a clean responsive design with breakpoints that only change the
        --size css custom property.
      </p>
      <p>Once these apis are finalized they will be documented.</p>
    </SubSection>

    <SubSection title="Display">
      <p>
        A handful of display related classes are in both builds but the apis are not yet finalized. These include
        classes for display, overflow, and cursor.
      </p>
    </SubSection>

    <SubSection title="Shadows">
      <p>
        Box shadows are an area rich with simple customization options. Scaled z heights and shadows are already being
        tested.
      </p>
    </SubSection>
  </Section>
);

export default Future;
