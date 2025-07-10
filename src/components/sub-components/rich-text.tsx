import React from 'react';

interface RichTextProps {
  heading: string;
  content: string | React.ReactNode;
  className?: string;
  headingSize?: 'small' | 'medium' | 'large';
}

const RichText: React.FC<RichTextProps> = ({
  heading,
  content,
  className = '',
  headingSize = 'medium'
}) => {
  const headingSizeClasses = {
    small: 'text-xl sm:text-2xl',
    medium: 'text-2xl sm:text-3xl',
    large: 'text-3xl sm:text-4xl'
  };

  // Create a URL-friendly ID from the heading
  const headingId = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <h2 
        id={headingId}
        className={`${headingSizeClasses[headingSize]} font-semibold text-gray-900 mb-4`}
      >
        {heading}
      </h2>
      {typeof content === 'string' ? (
        <div className="text-base sm:text-lg text-gray-600 leading-relaxed">
          <p>{content}</p>
        </div>
      ) : (
        <div className="text-base sm:text-lg text-gray-600 leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:mt-0">
          {content}
        </div>
      )}
    </div>
  );
};

export default RichText;
