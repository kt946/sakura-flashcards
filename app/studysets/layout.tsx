export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container max-md:px-4 flex flex-col justify-between items-center">{children}</div>;
}
