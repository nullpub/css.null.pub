import { h, FunctionalComponent } from 'preact';

import './ExampleContainer.css';

export interface ExampleContainerProps {
  title: string;
}

/**
 * @render react
 * @name ExampleContainer
 * @example
 * <ExampleContainer text="Hello World" />
 */
export const ExampleContainer: FunctionalComponent<ExampleContainerProps> = ({ title, children }) => (
  <section class="pr-4 pl-4 pb-4 pt-0 bwa-1 brtl-2 brbr-2 ct-base ta-center fsd-1">
    <header class="pa-3 mb-4 fwu-2 ta-left ct-dark">{title}</header>
    {children}
  </section>
);

export default ExampleContainer;
