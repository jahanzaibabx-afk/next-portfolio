import './globals.css';

export const metadata = {
  title: 'Jahanzaib Ahmad | Jamstack Developer Portfolio',
  description:
    'Jahanzaib Ahmad is a Jamstack and Node.js developer building thoughtful, high-performance web experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#090b10] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
