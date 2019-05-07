import './Main.css';

import { FunctionalComponent, h } from 'preact';
import Border from '~/components/Border';
import Color from '~/components/Color';
import Flex from '~/components/Flex';
import Font from '~/components/Font';
import Future from '~/components/Future';
import Header from '~/components/Header';
import Introduction from '~/components/Introduction';
import Margin from '~/components/Margin';
import { Notice } from '~/components/Notice';
import Padding from '~/components/Padding';
import Reset from '~/components/Reset';
import TableOfContents from '~/components/TableOfContents';
import Usage from '~/components/Usage';
import Variables from '~/components/Variables';

// fld-column flg-6 flai-center

/**
 * @render react
 * @name Main
 * @example
 * <Main text="Hello World" />
 */
export const Main: FunctionalComponent<any> = () => (
  <article class="main-page fld-column flg-6 flai-center pa-4 mb-20p">
    <Header title="css.null.pub" />
    <Notice />
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
