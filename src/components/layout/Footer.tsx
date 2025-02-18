// src/components/Footer.tsx
'use client'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Bond Market Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}