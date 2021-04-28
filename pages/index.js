import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        distinctio facere quo sit in tenetur mollitia repudiandae inventore,
        deserunt, harum quisquam, alias esse vero porro voluptate vel aliquam.
        Totam, dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        distinctio facere quo sit in tenetur mollitia repudiandae inventore,
        deserunt, harum quisquam, alias esse vero porro voluptate vel aliquam.
        Totam, dolorum.
      </p>

      <Link href="/ninjas">
        <span className={styles.btn}>See Ninja Listing</span>
      </Link>
    </>
  );
}
