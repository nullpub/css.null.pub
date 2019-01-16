import { h, FunctionalComponent } from 'preact';

import './TableOfContents.css';
import Section from '~/components/Section';

export interface TableOfContentsProps {}

const links = [
  { value: '#Introduction', label: 'Introduction' },
  { value: '#TableOfContents', label: 'Table' },
  { value: '#Usage', label: 'Usage' },
  { value: '#Reset', label: 'Reset' },
  { value: '#Variables', label: 'Variables' },
  { value: '#Border', label: 'Border' },
  { value: '#Color', label: 'Color' },
  { value: '#Flex', label: 'Flex' },
  { value: '#Font', label: 'Font' },
  { value: '#Margin', label: 'Margin' },
  { value: '#Padding', label: 'Padding' },
  { value: '#Future', label: 'Future' },
];

/**
 * @render react
 * @name TableOfContents
 * @example
 * <TableOfContents text="Hello World" />
 */
export const TableOfContents: FunctionalComponent<TableOfContentsProps> = () => (
  <Section title="Table of Contents" subtitle="">
    <ol class="pl-2 fld-column flg-4" style="list-style: decimal inside;">
      {links.map(({ value, label }, i) => (
        <li key={i}>
          <a href={value}>{label}</a>
        </li>
      ))}
    </ol>
  </Section>
);

export default TableOfContents;
