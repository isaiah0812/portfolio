import styles from '@/styles/MenuItem.module.css';

type MenuItemProps = {
  to: string,
  label: string
}

export default function MenuItem(props: MenuItemProps) {
  const { to, label } = props;
  return (
    <a href={to} className={styles.item}>{label}</a>
  )
}