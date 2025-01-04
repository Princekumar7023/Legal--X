export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-screen w-full overflow-hidden">{children}</main>;
}
