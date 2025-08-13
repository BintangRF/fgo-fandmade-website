import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Skeleton = ({
  className = "",
  isLoading = true,
  children,
  ...props
}: SkeletonProps) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div
      className={`animate-pulse rounded-md bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SkeletonCard = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Skeleton className="h-64 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};
