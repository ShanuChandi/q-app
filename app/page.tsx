import Header from "@/components/Header";
import HomeLowerSection from "@/components/HomeLowerSection";
import Statcard from "@/components/Statcard";
import Titles from "@/components/Titles";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center bg-slate-50 dark:bg-gradient-to-t from-gray-900 to-black ">
      <Header />
      <Statcard />
      <Titles>Continue Studying</Titles>
      <HomeLowerSection />
    </main>
  );
}
