import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;  

  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <p className={styles.friendName}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
