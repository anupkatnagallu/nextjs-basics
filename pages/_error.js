import Link from 'next/link';

export default function errorPage() {
  return (
      <div>
        <h1>Oops, Something went wrong!</h1>
        <p>Try <Link href='/'><a>going back</a></Link></p>
      </div>
  )
}
