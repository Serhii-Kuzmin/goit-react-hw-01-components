import PropTypes from 'prop-types';
import css from './StatsList.module.css';
import { getRandomColor } from './getRandomColor';

export const StatsList = ({ stats }) => {
  return (
    <ul className={css.statsList}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
