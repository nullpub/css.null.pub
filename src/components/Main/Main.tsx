import { h, FunctionalComponent } from 'preact';

import './Main.css';

import Introduction from '~/components/Introduction';
import TableOfContents from '~/components/TableOfContents';
import Usage from '~/components/Usage';
import Reset from '~/components/Reset';
import Variables from '~/components/Variables';
import ToDo from '~/components/ToDo';
import Border from '~/components/Border';
import Color from '~/components/Color';
import Flex from '~/components/Flex';

/**
<section>Font</section>
<section>Margin</section>
<section>Padding</section>
<section>Shadow</section>
<section>Text</section>
<section>Display</section>
 */

/**
 * @render react
 * @name Main
 * @example
 * <Main text="Hello World" />
 */
export const Main: FunctionalComponent<any> = () => (
  <article class="main-page pa-4 fld-column flg-5 mb-20p">
    <Introduction />
    <TableOfContents />
    <Usage />
    <Reset />
    <Variables />
    <Border />
    <Color />
    <Flex />
    <ToDo />
  </article>
);

export default Main;
