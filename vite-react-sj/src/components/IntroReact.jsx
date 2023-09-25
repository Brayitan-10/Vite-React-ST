/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import React from 'react'
import './IntroReact.css'
// JSX
const myName = 'Pepito perez (example)'
export const element = (
  <p>
    Hola,
    {' '}
    {myName}
  </p>
)

export const elementTwo = React.createElement('h3', null, `Hola ${myName}`)
// syntax
// React.createElement('type', [props], [...children])

// Components
// Componentes funcionales

export function MyComponent({ name, lastName }) {
  // Cuerpo de la función
  return (
    <>
      Hola,
      {' '}
      {name}
      {' '}
      {lastName}
    </>
  )
}

MyComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
}

MyComponent.defaultProps = {
  name: 'Pepito',
  lastName: 'Perez',
}

// Fragments

export function ProfileCard({ name, age }) {
  return (
    <>
      <h1 className="title">
        Welcome
        {' '}
        {name}
      </h1>
      <p className="paragraph">
        Software Engineer from just
        {' '}
        {age}
        {' '}
        years old
      </p>
    </>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

ProfileCard.defaultProps = {
  name: 'Pepito',
  age: 22,
}
