import { h, FunctionalComponent } from 'preact';

import './Example.css';

export interface ExampleProps {}

/**
 * @render react
 * @name Example
 * @example
 * <Example>Hello World</Example>
 */
export const Example: FunctionalComponent<ExampleProps> = ({ children }) => (
  <section class="doa-auto ff-monospace ct-dark pa-4 fsd-3 brtr-2 brbl-2">
    <pre>{children}</pre>
  </section>
);

export default Example;
