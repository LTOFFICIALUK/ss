import React from 'react';

interface CategoryLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  headerImage: string;
  category?: string;
}

// Category-specific color schemes
const getCategoryColors = (category: string) => {
  switch (category) {
    case 'stream-setup':
      return {
        gradient: 'from-blue-900 via-blue-800 to-indigo-900',
        overlay: 'bg-blue-900 bg-opacity-10'
      };
    case 'growth-marketing':
      return {
        gradient: 'from-green-900 via-emerald-800 to-teal-900',
        overlay: 'bg-green-900 bg-opacity-10'
      };
    case 'community-building':
      return {
        gradient: 'from-pink-900 via-purple-800 to-violet-900',
        overlay: 'bg-pink-900 bg-opacity-10'
      };
    case 'monetization':
      return {
        gradient: 'from-yellow-900 via-amber-800 to-orange-900',
        overlay: 'bg-yellow-900 bg-opacity-10'
      };
    case 'content-strategy':
      return {
        gradient: 'from-purple-900 via-indigo-800 to-blue-900',
        overlay: 'bg-purple-900 bg-opacity-10'
      };
    default:
      return {
        gradient: 'from-blue-900 via-purple-900 to-indigo-900',
        overlay: 'bg-black bg-opacity-30'
      };
  }
};

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  title,
  description,
  children,
  headerImage,
  category,
}) => {
  const colors = getCategoryColors(category || '');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`relative h-64 md:h-96 overflow-hidden bg-gradient-to-br ${colors.gradient}`}>
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className={`absolute inset-0 ${colors.overlay}`}></div>
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