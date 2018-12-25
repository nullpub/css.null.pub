import { h, FunctionalComponent } from 'preact';

import './Main.css';

import Introduction from '~/components/Introduction';
import TableOfContents from '~/components/TableOfContents';
import Usage from '~/components/Usage';
import Reset from '~/components/Reset';
import Variables from '~/components/Variables';
import ToDo from '~/components/ToDo';
import Border from '~/components/Border';

/**
<section>Border</section>
<section>Color</section>
<section>Flex</section>
<section>Font</section>
<section>Margin</section>
<section>Padding</section>
<section>Shadow</section>
<section>Text</section>
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
    <ToDo />
  </article>
);

export default Main;
