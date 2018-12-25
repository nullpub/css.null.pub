import { h, FunctionalComponent } from 'preact';

import './Introduction.css';
import Section from '~/components/Section';

export interface IntroductionProps {}

/**
 * @render react
 * @name Introduction
 * @example
 * <Introduction />
 */
export const Introduction: FunctionalComponent<IntroductionProps> = () => (
  <Section title="Introduction" subtitle="A few words on what and why">
    <p>
      <span class="fwu-2 pr-3">What is it?</span> This is <a href="https://github.com/nullpub/css">@nll/css</a>, a css
      utility library meant to be the building blocks for responsive and fast websites/apps that are easy to update and
      maintain. @nll/css makes copious use of the following to achieve various effects:
    </p>
    <ul class="pl-4 fsd-1 fwd-1" style="list-style: circle inside;">
      <li>Atomic/functional CSS</li>
      <li>CSS Custom Properties</li>
      <li>CSS Locks</li>
      <li>Standardized BEM-like nomenclature</li>
      <li>Convenient, clean apis</li>
    </ul>
    <p>
      This library concerns itself with precious few things -- color, spacing, font sizing, and flex. Additional utility
      classes are added as I need them, but are often not necessary additions to the library. The full library bundle
      comes in at 14.3KB gzipped, the minimal bundle lands at 8.8KB gzipped. These sizes, while small, can be further
      reduced with a custom build that doesn't rely on css custom properties.
    </p>
    <p>
      The inspiration for this library came from <a href="https://tachyons.io/">Tachyons</a>,{' '}
      <a href="https://getbootstrap.com/docs/4.1/utilities">Bootstrap Utilities</a>, and{' '}
      <a href="http://getbem.com/">BEM</a>. For my use cases each of these approaches are useful but fall short in some
      category. Tachyons and Bootstrap implement grid systems, which I find to be better handled with css grid nowadays.
      They also both have very poor apis for flex classes and inconsistent naming schemes. BEM is more of a naming
      convention than a library, but this in itself is useful, and I've tried to adopt its naming conventions for the
      utility classes that @nll/css provides. Additionally, care has been taken to make the library easily cloneable
      with property dependency imports so that custom packages can be built with minimal fuss.
    </p>
    <p>
      Lastly, this library uses css custom properties by default to define the color themes, spacing sizes, font
      steppings, etc. In fact, great care has been made to create clean relative sizing associations between font size,
      fill size, and border radius so that a single <a href="https://fvsch.com/css-locks/">CSS lock</a> drives fluid
      responsive typography and spacing.
    </p>
  </Section>
);

export default Introduction;
