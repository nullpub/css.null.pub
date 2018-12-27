import { h, FunctionalComponent } from 'preact';

import './SubSection.css';

export interface SubSectionProps {
  title: string;
  subtitle?: string;
}

/**
 * @render react
 * @name SubSection
 * @example
 * <SubSection title="Hello World" subtitle="Yum">Some Children</SubSection>
 */
export const SubSection: FunctionalComponent<SubSectionProps> = ({ title, subtitle, children }) => (
  <section>
    <h5>
      {title} {!!subtitle && <span class="fsd-3 fwd-1">{subtitle}</span>}
    </h5>
    <section class="fld-column flg-4">{children}</section>
  </section>
);

export default SubSection;
