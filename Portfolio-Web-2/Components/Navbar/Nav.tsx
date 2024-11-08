"use client";
import Link from "next/link";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import styles from './Navbar.module.css';


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>

        <span>Bakhtawar Khan</span>
      </Link>


      <ul className={`${styles.navlinks} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <Link className={styles.Link} href="/About">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/Service">
            Service
          </Link>
        </li>

        <li>
          <Link className={styles.Link} href="/Skills">
            Skills
          </Link>
        </li>



        <li>
          <Link className={styles.Link} href="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/Contact">
            Contact
          </Link>
        </li>
        
      </ul>


      <HiBars3 className={styles.menuicon} onClick={toggleMenu} />

      <button  className={styles.visitbtn}><Link className={styles.gitLink} href={"https://github.com/baki1996"} target="_blank">Visit Github</Link></button>
    </header>
  );
};

export default Nav;
