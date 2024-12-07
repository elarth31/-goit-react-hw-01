import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistoryTable}>
      <thead>
        <tr>
          <th className={styles.headerType}>Type</th>
          <th className={styles.headerAmount}>Amount</th>
          <th className={styles.headerCurrency}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.type}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
