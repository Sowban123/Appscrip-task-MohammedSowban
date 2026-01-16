interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: 'Over $500', min: 500, max: 1000 },
  ];

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="pb-6 border-b border-gray-200">
        <h2 className="text-base font-bold text-gray-900 mb-5 uppercase tracking-wide">Category</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <label key={category} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-900 cursor-pointer transition-colors"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 capitalize transition-colors leading-tight">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pb-6 border-b border-gray-200">
        <h2 className="text-base font-bold text-gray-900 mb-5 uppercase tracking-wide">Price</h2>
        <div className="space-y-4">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="radio"
                name="priceRange"
                checked={priceRange[0] === range.min && priceRange[1] === range.max}
                onChange={() => onPriceRangeChange([range.min, range.max])}
                className="w-4 h-4 mt-0.5 border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-900 cursor-pointer transition-colors"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors leading-tight">
                {range.label}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-5">
          <button
            onClick={() => onPriceRangeChange([0, 1000])}
            className="text-sm text-gray-500 hover:text-gray-900 underline transition-colors"
          >
            Clear price filter
          </button>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="pb-6">
        <h2 className="text-base font-bold text-gray-900 mb-5 uppercase tracking-wide">Rating</h2>
        <div className="space-y-4">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-gray-900 focus:ring-1 focus:ring-gray-900 cursor-pointer transition-colors"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-gray-600 text-sm">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
