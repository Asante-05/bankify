import { Sidebar } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'Gyomei', lastName: 'Hajime'};
  
  return (
    <main className="flex h-screen w-full font-inter">
        {/* <Sidebar user={loggedIn} /> */}
        SIDEBAR
        {children}
    </main>
  );
}
