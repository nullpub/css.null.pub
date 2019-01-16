import { h, FunctionalComponent } from 'preact';

export interface HeaderProps {
  title: string;
}

/**
 * @name Header
 */
export const Header: FunctionalComponent<HeaderProps> = ({ title }) => {
  return (
    <header class="fsu-5">
      <h1 id="top" class="fsu-5">
        {title}
      </h1>
    </header>
  );
};

export default Header;
