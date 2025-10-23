import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Hello brokart</h1>
      <Button variant="outline">Test Button</Button>
    </div>
  );
}
