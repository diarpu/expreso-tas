import Head from 'next/head'

export default function Metas({ title, description, image, slug, children }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      {children}
      <meta
        name="og:url"
        content={`${process.env.NEXT_PUBLIC_WEB_URL}${slug}`}
      />
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_WEB_URL}${slug}`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
