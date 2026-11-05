import { useState } from 'react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 glass-card rounded-3xl max-w-md mx-4">
        <div className="text-6xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p className="mb-8 text-foreground/70">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-gradient-primary text-white shadow-lg hover:shadow-primary/25 hover:brightness-110 h-12 px-8">
          Return Home
        </Link>
      </div>
    </div>
  );
}
