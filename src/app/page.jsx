import Cards from "@/components/Cards";
import NameField from "@/components/NameField";
import Header from "@/components/Cards/Header";
import Landing from "@/components/Landing";
export default function Home() {
  return (
    <>
      <section id="home">
        <Landing />
      </section>
      <section id="about" className=" my-10 px">
        <Header title={"RESUME"} title_desc={"ABOUT ME"} />
        <NameField />
      </section>
      <section id="works">
        <Header title={"WORKS"} title_desc={"MY PORTOFOLIO"} />
        <Cards />
      </section>
    </>
  );
}
