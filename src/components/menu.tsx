import MenuItem from "./menuItem";
import styles from '@/styles/Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <MenuItem to="/about" label="About" />
      <MenuItem to="/projects" label="Projects" />
      <MenuItem to="/contact" label="Contact" />
      <MenuItem to="/shop" label="Shop" />
    </nav>
  )
}