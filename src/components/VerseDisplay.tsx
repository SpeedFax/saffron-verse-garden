
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useVerse } from '../hooks/useVerse';

const VerseDisplay = () => {
  const { verse, loading, refreshVerse } = useVerse();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRefresh = async () => {
    setIsAnimating(true);
    await refreshVerse();
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin text-saffron-400">
          <RefreshCw size={32} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-saffron-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className={`space-y-8 ${isAnimating ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-inter font-medium text-saffron-700 bg-saffron-100 rounded-full">
              Bhagavad Gita
            </span>
            <h2 className="mt-4 font-crimson text-2xl sm:text-3xl text-saffron-900 leading-relaxed">
              {verse.sanskrit}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-saffron-100">
              <h3 className="font-inter text-lg font-semibold text-saffron-800 mb-3">
                Translation
              </h3>
              <p className="font-crimson text-xl text-gray-700 leading-relaxed">
                {verse.translation}
              </p>
            </div>

            <div className="bg-saffron-50 rounded-xl p-6">
              <h3 className="font-inter text-lg font-semibold text-saffron-800 mb-3">
                Interpretation
              </h3>
              <p className="font-inter text-gray-700 leading-relaxed">
                {verse.interpretation}
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-saffron-400 text-white hover:bg-saffron-500 transition-colors duration-200 font-inter"
            >
              <RefreshCw size={20} />
              <span>New Verse</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerseDisplay;
