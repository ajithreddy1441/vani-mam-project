
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Anxiety: A Complete Guide",
      excerpt: "Learn about different types of anxiety disorders and evidence-based treatment approaches that can help you regain control.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Mental Health"
    },
    {
      title: "Building Healthy Relationships",
      excerpt: "Discover the key ingredients for strong, lasting relationships and learn how to communicate effectively with your loved ones.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Relationships"
    },
    {
      title: "Stress Management in Modern Life",
      excerpt: "Practical strategies to manage stress in today's fast-paced world, from mindfulness techniques to lifestyle changes.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Wellness"
    }
  ];

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our blog for helpful tips, insights, and resources on mental health and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <Button variant="ghost" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 p-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
