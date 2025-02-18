// src/components/ui/Card.tsx
interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function Card({ children, className = '' }: CardProps) {
    return (
      <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
        {children}
      </div>
    );
  }
  
  Card.Header = function CardHeader({ children, className = '' }: CardProps) {
    return (
      <div className={`border-b px-6 py-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  Card.Content = function CardContent({ children, className = '' }: CardProps) {
    return (
      <div className={`px-6 py-4 ${className}`}>
        {children}
      </div>
    );
  };