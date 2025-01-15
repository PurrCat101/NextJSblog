import Link from "next/link";
import Container from "./container";
import {
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import s from "@/styles/components/layout/footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container additionalClass={s.container}>
        <div className={s.inner}>
          <nav className={s.nav}>
            <ul className={s.nav_list}>
              <li className={s.nav_item}>
                <Link className={s.nav_link} href="/">
                  HOME
                </Link>
              </li>
              <li className={s.nav_item}>
                <Link className={s.nav_link} href="/about">
                  ABOUT
                </Link>
              </li>
              <li className={s.nav_item}>
                <Link className={s.nav_link} href="/posts">
                  POSTS
                </Link>
              </li>
              <li className={s.nav_item}>
                <Link className={s.nav_link} href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>

            <ul className={s.sns_list}>
              <li className={s.sns_item}>
                <a
                  href="https://github.com/PurrCat101"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.sns_link} ${s.sns_github}`}
                  title="Github"
                >
                  <FaGithub />
                </a>
              </li>
              <li className={s.sns_item}>
                <a
                  href="chidsanu.cc@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.sns_link} ${s.sns_email}`}
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className={s.sns_item}>
                <a
                  href="https://www.instagram.com/mocha_cat.c/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${s.sns_link} ${s.sns_ig}`}
                  title="Instagram"
                >
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
          </nav>
          <p className={s.copy}>&copy; WebTech Note 2023</p>
        </div>
      </Container>
    </footer>
  );
}
