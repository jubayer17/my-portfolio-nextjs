import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Clock } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { cn } from '@/lib/utils';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p: Project) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
            
            {project.inDevelopment && (
              <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" />
                In Development
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Project Images Slider */}
        <div className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative group">
              {project.images?.[0] || project.image ? (
                <Image 
                  src={project.images?.[0] || project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              ) : (
                <div className="text-white text-6xl">🚀</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Features & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Section */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                Key Features
              </h2>
              <div className="grid gap-4">
                {project.features?.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                  </div>
                )) || (
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-700 dark:text-slate-300">Modern and responsive user interface</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-700 dark:text-slate-300">Built with latest technologies</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-slate-700 dark:text-slate-300">Optimized for performance</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                Project Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <User className="w-5 h-5" />
                  <span>Personal Project</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-5 h-5" />
                  <span>2024 - Present</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions & Tech Stack */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl || '#'}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                    project.liveUrl && !project.inDevelopment
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                  )}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                >
                  <ExternalLink className="w-5 h-5" />
                  {project.inDevelopment ? "Coming Soon" : "Live Demo"}
                </a>
                
                <a
                  href={project.githubUrl || '#'}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                    project.githubUrl
                      ? "bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                  )}
                  target={project.githubUrl ? "_blank" : undefined}
                  rel={project.githubUrl ? "noopener noreferrer" : undefined}
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Status */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Status
              </h3>
              <div className={cn(
                "px-4 py-3 rounded-xl font-medium text-center",
                project.inDevelopment
                  ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                  : "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
              )}>
                {project.inDevelopment ? "🚧 In Development" : "✅ Completed"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}