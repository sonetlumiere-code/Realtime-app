// import { db } from '@/lib/db'
import Button from '@/components/ui/Button';

export default async function Home() {
  // await db.set('hello', 'hello')

  return (
    <>
      <div className="text-red-500">
        Home
      </div>
      <Button variant="ghost">Hello</Button>
    </>
  );
}
