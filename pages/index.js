import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
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
      <Footer />
    </>
  );
}
