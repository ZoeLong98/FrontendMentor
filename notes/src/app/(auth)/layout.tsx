export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-8 lg:grid-cols-12 gap-6 lg:mx-auto lg:w-auto w-full h-screen">
      {children}
    </div>
  );
}
