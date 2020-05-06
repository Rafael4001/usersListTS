import React, { FC } from 'react';

import { IOneUser, IUser } from './User.types'

import styles from './User.module.scss';

const NO_RESULTS_TEXT = "no results";


const User: FC<IUser> = ({table}) => {

  if (table.length) {
    const usersList = table.map((user: IOneUser, id: number) => {
      return (
        <li key={id}>
          <span className={styles.secondaryText}>{id + 1}. </span>
          {user.name}
          <span className={styles.secondaryText}> @{user.username}</span>
        </li>
      )
    })

    return <>{usersList}</>
  } else {
    return <span className={styles.noResultText}>{NO_RESULTS_TEXT}</span>
  }
}

User.displayName = "User";

export default User

