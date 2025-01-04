import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getUserAuth } from "@/lib/auth";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLawyer } = await getUserAuth();

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} isLawyer={isLawyer} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
