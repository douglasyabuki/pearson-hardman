import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import OccupationArea from "../components/occupation-area/OccupationArea";
import OtherServices from "../components/other-services/OtherServices";
import About from "../components/about/About";
import Testimonials from "../components/testimonials/Testimonials";
import Team from "../components/team/Team";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pearson Hardman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css"
        ></link>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <OccupationArea></OccupationArea>
        <OtherServices></OtherServices>
        <About></About>
        <Testimonials></Testimonials>
        <Team></Team>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
