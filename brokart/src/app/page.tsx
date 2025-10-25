import { Header } from "@/components/common/Header";



export default function Home() {
  return (
    <main className=" bg-background justify-center items-center flex">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to BroKart</h1>
        <p className="text-lg text-muted-foreground">Your minimal, modern e-commerce experience</p>
      </div>
    </main>
  );
}
