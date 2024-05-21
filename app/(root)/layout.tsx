import SideBar from '@/components/SideBar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Barel',
    lastName: 'Shraga',
  };
  return (
    <main className='flex h-screen w-full font-inter'>
      <SideBar user={loggedIn} />
      {children}
    </main>
  );
}
