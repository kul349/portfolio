import "./globals.css";


export const metadata = {
  title: "My portfolio",
  description: "this is design for make showcase my knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
