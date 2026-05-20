import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ponder Solutions Pvt Ltd | Enterprise Database & Oracle Consulting",
  description:
    "Expert SQL DBA Services, Oracle APEX Development, Database Performance Optimization, Oracle Forms Modernization, 24/7 Remote DBA Support, and Cloud Database Management for enterprise businesses.",
  keywords: [
    "SQL DBA Services",
    "Oracle APEX Development",
    "Oracle Forms Migration",
    "Database Performance Optimization",
    "Remote DBA Support",
    "Cloud Database Management",
    "Database Security",
    "Enterprise Database Consulting",
    "Oracle Database",
    "Microsoft SQL Server",
    "MySQL DBA",
    "PostgreSQL",
    "MongoDB",
    "Azure SQL",
    "AWS RDS",
  ],
  authors: [{ name: "Ponder Solutions Pvt Ltd" }],
  openGraph: {
    title: "Ponder Solutions Pvt Ltd | Enterprise Database & Oracle Consulting",
    description:
      "24/7 DBA Experts for Mission-Critical Systems. SQL DBA, Oracle APEX, Database Optimization, Forms Modernization.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
