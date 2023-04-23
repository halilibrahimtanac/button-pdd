import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, children }) => {
  const types = ['primary', 'default', 'dashed', 'text', 'link']
  return (
    <button className={types.includes(type) ? styles[type] : styles['default']}>
      {children}
    </button>
  )
}
