import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy flex items-center justify-center relative overflow-hidden font-poppins">
      <SEOHead
        title="Page Not Found | Tambor"
        description="The page you're looking for doesn't exist."
        noindex
      />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl animate-float animate-morph" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl animate-float animate-morph" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
      </div>

      <div className="text-center px-6 relative z-10">
        <p className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-lg text-white/70 mb-10 max-w-md mx-auto font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center gap-3"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
