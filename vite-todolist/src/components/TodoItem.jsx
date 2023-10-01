import PropTypes from 'prop-types'
import './App.css'

export function TodoItem({ todo, handleDelete }) {
  return (
    <li className="task-item">
      {todo}
      <button
        className="task-delete-button"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.string,
  handleDelete: PropTypes.func,
}

TodoItem.defaultProps = {
  todo: 'Not task',
  handleDelete: () => {},
}
