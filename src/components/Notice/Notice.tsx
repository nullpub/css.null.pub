import './Notice.css';

import { FunctionalComponent, h } from 'preact';
import Section from '~/components/Section';

export interface NoticeProps {}

/**
 * @render react
 * @name Notice
 * @example
 * <Notice text="Hello World" />
 */
export const Notice: FunctionalComponent<NoticeProps> = ({}) => {
  return (
    <Section title="Notice" subtitle="DEPRECATED" classes="ct-warning">
      <h1>
        This css library is in the process of being rewritten in scss. Some of
        the interfaces have changed and living documentation will be generated
        once the rewrite is complete. For now the source is the best
        documentation. Sorry ;)
      </h1>
    </Section>
  );
};
