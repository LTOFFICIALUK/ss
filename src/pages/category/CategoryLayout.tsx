import React from 'react';

interface CategoryLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  headerImage: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  title,
  description,
  children,
  headerImage,
}) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt={title}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
};

export default CategoryLayout;