export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-16 flex items-center justify-center px-4 py-12">
      {children}
    </main>
  );
}
