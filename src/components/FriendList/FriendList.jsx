import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={styles.listItem}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
