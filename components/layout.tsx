import styles from './layout.module.scss';

const DefaultLayout = ({children}) => {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
};

export default DefaultLayout;
