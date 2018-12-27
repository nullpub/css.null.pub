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
  <section class="doa-auto pa-4 brtr-2 brbl-2 ct-dark ff-monospace fsd-1">
    <pre>{children}</pre>
  </section>
);

export default Example;
