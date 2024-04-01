import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Pricing',
  description: 'SEO Description for Pricing',
  keywords: ['Pricing Page', 'Leonardo', 'Prices'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  )
}