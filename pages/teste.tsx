import Head from 'next/head';

export default function Test() {
  return (
    <>
      <Head>
        <title>Fyesta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='min-h-screen flex justify-center items-center'>
        <p className='text-3xl text-green-400'>Você foi autenticado com sucesso</p>
      </div>
    </>
  )
}
