import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'New Post',
};

export default async function AdminNewPostPage() {
  
  return (
    <div>TESTE</div>
  )
}
