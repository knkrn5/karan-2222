// import React, { useEffect, useState } from 'react';
import { Database, Cloud, Globe2, Server, FileCode2, LucideIcon, Blocks } from 'lucide-react';

type Tool = {
  name: string;
  description: string;
};

type Resource = {
  category: string | string[];
  icon: LucideIcon;
  color: string;
  tools?: Tool[];
};

function createResource(category: string | string[], icon: LucideIcon, color: string, tools?: Tool[]): Resource {
  return {
    category,
    tools,
    icon,
    color,
  };
}

const resources = [
  createResource(['Database', 'Storage'], Database, 'text-emerald-500', [
    {
      name: 'Supabase',
      description: 'PostgreSQL database with real-time capabilities',
    },
    {
      name: 'PostgreSQL',
      description: 'Real-time database with ACID compliance',
    },
  ]),
  createResource(['Hosting'], Cloud, 'text-blue-500', [
    {
      name: 'Netlify',
      description: 'Modern hosting platform with CI/CD',
    },
  ]),
  createResource(['CMS'], FileCode2, 'text-purple-500', [
    {
      name: 'Contentful',
      description: 'Headless content management system',
    },
    {
      name: 'Cloudinary',
      description: 'Headless content management system',
    },
  ]),
  createResource(['Backend'], Server, 'text-green-500', [
    {
      name: 'Node.js',
      description: 'JavaScript runtime environment',
    },
  ]),
  createResource(['Framework'], Blocks, 'text-cyan-500', [
    {
      name: 'React',
      description: 'JavaScript library for building user interfaces',
    },
  ]),
];

function ResourceCard({ resource }: { resource: Resource }) {
  const { category, tools, icon: Icon, color } = resource;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 ${color} bg-opacity-10 dark:bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div className="flex-1">
          {Array.isArray(category) ? category.map((cat, i) => <p key={i} className="text-sm font-medium text-gray-500 dark:text-gray-400">{cat}</p>) 
          : <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{category}</p>}

          {tools && (
            <div className="mt-2 space-y-3">
              {tools.map((t: Tool, index: number) => (
                <div key={t.name || index} className="border-b dark:border-gray-700 last:border-b-0 pb-3 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{t.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResourcesInfo() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resources Used</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">These are the Essential tools and services used for creating Projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesInfo;
