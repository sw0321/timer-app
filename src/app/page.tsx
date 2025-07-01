import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Timer App</title>
        <meta name="description" content="Simple Timer App" />
      </Head>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Hello, Timer!</h1>
      </main>
    </>
  );
}
