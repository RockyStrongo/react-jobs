import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Link from 'next/link'

type Props = {
  alljobs: { totalCount: number, jobs: [] }
}

export default function Home({ alljobs }: Props) {

  console.log(alljobs)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="React Jobs in Denver CO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-secondary h-screen'>
          <Header sticky></Header>


          <div className='m-5'>
            {alljobs.jobs.map(({ title, snippet, company, link }) => (

              <Card jobTitle={title} jobDescription={snippet} companyName={company} link={link}></Card>

            ))}
          </div>


        </div>


      </main>
    </>
  )



}

export async function getStaticProps() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = "{ \"keywords\": 'react', \"location\": 'denver' }";

  let data = await fetch("https://jooble.org/api/8cc79c7c-db0b-4772-9c07-b0b5167a7d27", {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })

  let jobs = await data.json();

  return {
    props: {
      alljobs: jobs
    },
    //revalidate
    // revalidate: 10,
  };
}