import React from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              We Create<br />
              <span className="text-blue-600">Digital Experiences</span><br />
              That Matter
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Your vision, our expertise. We build stunning digital solutions
              that help your business stand out and succeed in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                View Our Work
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating on a project" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;