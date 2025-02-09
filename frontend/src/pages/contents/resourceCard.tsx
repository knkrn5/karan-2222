

type Tool = {
    name: string;
    description: string;
  };

  type Resource = {
    category: string;
    tool?: string;
    tools?: Tool[];
    description?: string;
    icon: LucideIcon;
    color: string;
  };

function ResourceCard({ resource }: { resource: Resource }) {
    const { category, tool, tools, description, icon: Icon, color } = resource;
  
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-start space-x-4">
          <div
            className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 ${color} bg-opacity-10 dark:bg-opacity-20`}
          >
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {category}
            </p>
            {tools ? (
              <div className="mt-2 space-y-3">
                {tools.map((t: Tool, index: number) => (
                  <div
                    key={index}
                    className="border-b dark:border-gray-700 last:border-b-0 pb-3 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {tool}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }


  export default ResourceCard