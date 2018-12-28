import { h, FunctionalComponent } from 'preact';

import './TableOfContents.css';
import Section from '~/components/Section';

export interface TableOfContentsProps {}

/**
 * @render react
 * @name TableOfContents
 * @example
 * <TableOfContents text="Hello World" />
 */
export const TableOfContents: FunctionalComponent<TableOfContentsProps> = () => (
  <Section title="Table of Contents" subtitle="">
    <ol class="pl-2 fld-column flg-3" style="list-style: decimal inside;">
      <li>
        <a href="#Introduction">Introduction</a>
      </li>
      <li>
        <a href="#TableOfContents">Table Of Contents</a>
      </li>
      <li>
        <a href="#Usage">Usage</a>
      </li>
      <li>
        <a href="#Reset">Reset</a>
      </li>
      <li>
        <a href="#Variables">Variables</a>
      </li>
      <li>
        <a href="#Border">Border</a>
      </li>
      <li>
        <a href="#Color">Color</a>
      </li>
      <li>
        <a href="#Flex">Flex</a>
      </li>
      <li>
        <a href="#Font">Font</a>
      </li>
      <li>
        <a href="#Margin">Margin</a>
      </li>
      <li>
        <a href="#Padding">Padding</a>
      </li>
      <li>
        <a href="#Future">Future</a>
      </li>
    </ol>
  </Section>
);

export default TableOfContents;
