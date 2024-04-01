import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Contact',
  description: 'SEO Description for Contact',
  keywords: ['Conctact Page', 'Leonardo', 'Contactos'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}