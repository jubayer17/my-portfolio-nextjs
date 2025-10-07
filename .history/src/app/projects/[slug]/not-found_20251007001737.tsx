import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center">
                <div className="mb-8">
                    <i className="fas fa-search text-6xl text-gray-400 mb-4"></i>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                        Project Not Found
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        The project you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                        <i className="fas fa-arrow-left"></i>
                        Back to Projects
                    </Link>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        <Link 
                            href="/"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            Or go to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}