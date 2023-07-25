import "@styles/globals.css";

export const metadata = {
  title: "Prompt Library",
  description: "Save & Share your best prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
