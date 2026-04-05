export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  //const { locale } = await params;
  return (
    <main className='relative bg-white max-w-[500px] w-screen mx-auto flex flex-1 flex-col items-center'>
      {children}
    </main>
  );
}
