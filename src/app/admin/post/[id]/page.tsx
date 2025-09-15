import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post',
};

type AdminPostIdPageProps = {
    params: Promise<{id: string}>
}

export default async function AdminPostIdPage({params}: AdminPostIdPageProps) {
  const {id} = await params
  return (
    <div>TESTE Id Post {id}</div>
  )
}
