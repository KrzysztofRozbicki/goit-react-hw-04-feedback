import css from './section.module.css';

import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
