export default function ChaiLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div>Chai-Nav</div>
          {children}
        </>
    );
  }