"use client"

import Link from "next/link"
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "About",
        url: "/about"
    },
    {
        id: 3,
        title: "Contacts",
        url: "/contacts"
    },
    {
        id: 4,
        title: "Dashboard",
        url: "/dashboard"
    },
    {
        id: 5,
        title: "Portfolio",
        url: "/portfolio"
    },
]

const Navbar = () => {
  return (
        <nav className={styles.container}>
            <Link href={"/"} className={styles.logo}>
                MyApp
            </Link>
            <div className={styles.links}>
                {links.map((link)=>(
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
                <button className={styles.logout} onClick={(()=> console.log('logout'))}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar