import React from 'react'; 
import styles from './Filter.module.scss'

const Filter = (props) => {
  return (
    <div className={styles['feed_filter']}>
      <input className={styles['feed_filter_input']}
             type="text" 
             placeholder="type to filter posts.."
             onChange={(e) => props.setKeyword(e.target.value)} />
    </div>
  )
}

export default Filter; 