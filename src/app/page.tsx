import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Sheet>
        <SheetTrigger>
          <Button>Login</Button>
        </SheetTrigger>
        <SheetContent>
          <h2>Login</h2>
          <p>Content</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
