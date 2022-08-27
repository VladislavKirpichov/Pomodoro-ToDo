import React from 'react'

import classes from './Author.module.scss'

const AuthorLink = () => {
  return (
    <div className={classes.author}>
        <h6>Author: <a href="https://github.com/VladislavKirpichov">Vladislav Kirpichov</a></h6>
    </div>
  )
}

export default AuthorLink