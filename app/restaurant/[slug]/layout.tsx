import Header from "./components/Header";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <div>
      <Header name={params.slug} />
      <div className="max-w-screen-2xl m-auto bg-white">{children}</div>
    </div>
  );
}
