import { h, FunctionalComponent } from 'preact';

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
import Header from '~/components/Header';

import './Main.css';

/**
 * @render react
 * @name Main
 * @example
 * <Main text="Hello World" />
 */
export const Main: FunctionalComponent<any> = () => (
  <article class="main-page fld-column flg-6 flai-center pa-4 mb-20p">
    <Header title="css.null.pub" />
    <TableOfContents />
    <Introduction />
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
