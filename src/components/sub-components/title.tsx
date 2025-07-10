import React from 'react';

interface TitleProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const Title: React.FC<TitleProps> = ({
  title,
  description,
  className = '',
  align = 'left'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Create a URL-friendly ID from the title
  const titleId = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className} ${alignmentClasses[align]}`}>
      <h1 
        id={titleId}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
      >
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
