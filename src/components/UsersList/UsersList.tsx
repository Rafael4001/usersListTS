import React, { useEffect, useState } from 'react';

import { getUsers } from '../../services/userService'
import User from '../User'


import styles from './UsersList.module.scss';


const NO_RESULTS_TEXT = "no results";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsFetching(true)

    const leadData = async () => {
      const usersFetched = await getUsers();
      if (isFetching) {
        setUsers(usersFetched)
      }
    };
    leadData();

    return setIsFetching(false)
  }, [isFetching])

  const isIncluded = (user: { name: string }) => {
    const userName = user.name.toUpperCase();
    return userName.includes(searchValue)
  }

  const getFilteredResult = (users: any) => {
    const filteredUsers = users.filter(isIncluded);

    return filteredUsers
  };

  const getUsersList = () => {
    const table = getFilteredResult(users);

    return <User table={table}/>
  };

  const handleChange = (value: string) => {
    setSearchValue(value)
  };


  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.titleText}>Users list</div>
        <input
          className={styles.inputContainer}
          type={'text'}
          onChange={event => handleChange(event.target.value.toUpperCase())}
          placeholder={'Search by user name...'}
        />
        <div className={styles.searchResultContainer}>
          <ul className={styles.ul}>
            {isFetching ? 'is loading...' : getUsersList()}
          </ul>
        </div>
      </div>
    </div>
  )
}

UsersList.displayName = "UsersLIst";

export default UsersList

