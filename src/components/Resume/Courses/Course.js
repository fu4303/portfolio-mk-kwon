import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-container">
    <a href={data.link}>
      <p className="course-name">&sdot;{data.title}, </p>
    </a>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
