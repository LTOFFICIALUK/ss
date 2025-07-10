import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isExternal?: boolean;
}

interface CTAButtonsProps {
  title?: string;
  description?: string;
  buttons: CTAButton[];
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const CTAButtons: React.FC<CTAButtonsProps> = ({
  title,
  description,
  buttons,
  className = '',
  align = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const buttonVariants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };

  const ButtonComponent = ({ button }: { button: CTAButton }) => {
    const baseClasses = `
      inline-flex items-center px-6 py-3 rounded-lg
      font-semibold text-base sm:text-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
    `;

    const content = (
      <>
        {button.label}
        {button.isExternal && (
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </>
    );

    return button.isExternal ? (
      <a
        href={button.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${buttonVariants[button.variant || 'primary']}`}
      >
        {content}
      </a>
    ) : (
      <Link
        to={button.href}
        className={`${baseClasses} ${buttonVariants[button.variant || 'primary']}`}
      >
        {content}
      </Link>
    );
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} data-cta-buttons>
      <div className={`flex flex-col ${alignmentClasses[align]}`}>
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
            {description}
          </p>
        )}
        <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : `justify-${align}`}`}>
          {buttons.map((button, index) => (
            <ButtonComponent key={index} button={button} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTAButtons;
