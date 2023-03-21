import Link from 'next/link';
import styles from '@/styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <Link href="/auth/login"><h1>Login</h1></Link>
        <Link href="/auth/register"><h1>Register</h1></Link>
        <Link href="/"><h1>Profile</h1></Link>
    </div>
  )
}

export default NavBar