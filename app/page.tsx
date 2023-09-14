import GreetContainer from "@/containers/Greet/greet";
import Header from "@/containers/Header/header";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <GreetContainer/>
      </main>
    </>
  )
}
