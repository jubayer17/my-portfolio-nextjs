'use client';

import { useParams, notFound } from 'next/navigation';
import { projectsData, Project } from '@/data/projects';
import ProjectSlider from '@/components/ui/ProjectSlider';
import ProjectActions from '@/components/ui/ProjectActions';
import ProjectFeatures from '@/components/ui/ProjectFeatures';
import Link from 'next/link';

export default function ProjectDetailsPage() {
    const params = useParams();
    const slug = params.slug as string;
    
    const project = projectsData.find((p: Project) => p.slug === slug);
    
    if (!project) {
        notFound();
    }
    
    return (
        <div className="project-details min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link 
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors mb-4"
                    >
                        <i className="fas fa-arrow-left"></i>
                        Back to Projects
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-4">
                        <i className={`${project.icon} text-3xl text-blue-600`}></i>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                                {project.title}
                            </h1>
                            {project.inDevelopment && (
                                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    IN DEVELOPMENT
                                </span>
                            )}
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        {project.detailedDescription || project.description}
                    </p>
                </div>
                
                {/* Project Slider */}
                <div className="mb-12">
                    <ProjectSlider 
                        images={project.images || [project.image]}
                        title={project.title}
                    />
                </div>
                
                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section - Features and Details */}
                    <div className="lg:col-span-2">
                        <ProjectFeatures project={project} />
                    </div>
                    
                    {/* Right Section - Actions and Tech Stack */}
                    <div className="lg:col-span-1">
                        <ProjectActions project={project} />
                    </div>
                </div>
            </div>
        </div>
    );
}