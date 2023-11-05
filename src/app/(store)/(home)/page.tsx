async function Home(): Promise<JSX.Element | null> {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World</h1>
    </div>
  );
}

export default Home;
