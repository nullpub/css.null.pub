import { h, FunctionalComponent } from 'preact';

import './Main.css';

import Introduction from '~/components/Introduction';
import TableOfContents from '~/components/TableOfContents';
import Usage from '~/components/Usage';
import Reset from '~/components/Reset';
import Variables from '~/components/Variables';
import Border from '~/components/Border';
import Color from '~/components/Color';
import Flex from '~/components/Flex';
import Font from '~/components/Font';
import Margin from '~/components/Margin';
import Padding from '~/components/Padding';
import Future from '~/components/Future';

/**
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
  <article class="main-page pa-4 fld-column flg-6 flai-center mb-20p">
    <Introduction />
    <TableOfContents />
    <Usage />
    <Reset />
    <Variables />
    <Border />
    <Color />
    <Flex />
    <Font />
    <Margin />
    <Padding />
    <Future />
  </article>
);

export default Main;
