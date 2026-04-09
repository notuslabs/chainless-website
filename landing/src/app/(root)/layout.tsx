export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          httpEquiv="refresh"
          content={`0;url=${process.env.NEXT_PUBLIC_BASE_PATH || ""}/pt`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
