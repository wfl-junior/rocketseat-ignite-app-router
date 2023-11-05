async function Home(): Promise<JSX.Element | null> {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-zinc-100">
      <h1 className="text-3xl font-bold">Hello World</h1>
    </div>
  );
}

export default Home;
