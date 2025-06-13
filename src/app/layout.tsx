import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "PACK TECHNOLOGY - Custom Software, Web & Mobile App Development, Tech Training",
  description:
    "PACK TECHNOLOGY empowers tech talent and transforms ideas into digital reality. We build custom web, mobile, and tailored software solutions, offer expert training in data analytics, software development, project leadership, and UI/UX design. Innovating & Delivering Digital Excellence for global impact.",
  keywords:
    "PACK TECHNOLOGY, custom software development, web application development, mobile app development, iOS app development, Android app development, data analytics training, R programming, Python programming, Stata, software development training, API integration, frontend development, backend development, project management training, agile methodologies, UI/UX design, user experience, user interface, workflow automation, data platforms, tech talent empowerment, digital transformation, Rwanda tech, African tech",
  authors: [
    { name: "MANIBAHO Patrick", url: "https://github.com/patsicko" },
    { name: "Ishimwe Sibomana Bienvenu", url: "https://bienvenu.vercel.app/" },
  ],
  openGraph: {
    title: "PACK TECHNOLOGY - Empowering Tech Talent for Global Impact",
    description:
      "PACK TECHNOLOGY specializes in custom software solutions, web and mobile app development, and comprehensive tech training programs to empower professionals and drive digital excellence.",
    url: "https://www.packtechnology.com", // Replace with your actual website URL
    siteName: "PACK TECHNOLOGY",
    images: [
      {
        url: "https://www.packtechnology.com/og-image.jpg", // Replace with a relevant image for Open Graph
        width: 1200,
        height: 630,
        alt: "PACK TECHNOLOGY Logo and Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PACK TECHNOLOGY - Custom Software, Web & Mobile App Development, Tech Training",
    description:
      "PACK TECHNOLOGY empowers tech talent and transforms ideas into digital reality. We build custom web, mobile, and tailored software solutions, offer expert training in data analytics, software development, project leadership, and UI/UX design.",
    creator: "@PackTechnology", // Replace with your actual Twitter handle
    images: ["https://www.packtechnology.com/twitter-image.jpg"], // Replace with a relevant image for Twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-family-primary font-light tracking-tighter">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
