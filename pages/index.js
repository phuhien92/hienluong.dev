import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Index</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
