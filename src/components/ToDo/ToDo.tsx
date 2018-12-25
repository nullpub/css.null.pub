import { h, FunctionalComponent } from 'preact';

import './ToDo.css';
import Section from '../Section';

export interface ToDoProps {}

/**
 * @render react
 * @name ToDo
 * @example
 * <ToDo />
 */
export const ToDo: FunctionalComponent<ToDoProps> = () => (
  <Section title="To Do" subtitle="Things that need to be done">
    <p>Following is the list of things that are currently planned for this library</p>
    <ol style="list-style: decimal inside;">
      <li>Figure out where the line height sizing went and reimplement it so things aren't so scrunched.</li>
      <li>Finish initial documentation site and add to README.md of @nll/css.</li>
      <li>Look into parameterizing shadow classes</li>
      <li>Put together advanced usage for custom builds</li>
      <li>Redesign color palatte to include form statuses: focused, invalid, disabled, etc.</li>
    </ol>
  </Section>
);

export default ToDo;
