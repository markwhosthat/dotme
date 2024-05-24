export default function Home() {
  return (
    <main className="min-h-screen max-w-prose p-24">
      <div className="z-10 w-full text-lg grid grid-cols-1 gap-y-5">
        <span>{"Hey there. I'm Mark. I'm a Software Engineer, born in Sydney, and located somewhere between LA and home. I currently work at Google, where I'm keeping databases up 24x7. This is my dotme, a collection of non-SWE/work related things."}</span>

        <span>{"If you're looking for more info about me and my work, visit "}<a href="https://polner.dev">{"polner.dev"}</a></span>
      </div>
    </main>
  );
}
