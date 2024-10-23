import React, { useEffect, useState } from 'react';
import { ArrowRight, Heart, Sun, Moon, Sunrise, MessageCircle, Volume2, Clock } from 'lucide-react';

// Basic Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Basic Button Component
const Button = ({ 
  children, 
  size = 'md', 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  };

  const variantClasses = {
    default: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
  };

  return (
    <button 
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        rounded-full
        font-medium
        transition-all
        duration-300
        flex
        items-center
        justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

const FallingLeaf = ({ style }) => (
  <div 
    className="absolute animate-fall pointer-events-none"
    style={style}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" 
        fill="currentColor" 
        className="text-purple-300/40" 
      />
    </svg>
  </div>
);

// Add falling animation to your CSS/Tailwind config
const styles = `
  @keyframes fall {
    0% {
      transform: translateY(-10vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }

  .animate-fall {
    animation: fall linear forwards;
  }
`;

const LandingPage = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const createLeaf = () => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
      scale: Math.random() * 0.6 + 0.4,
      rotate: `${Math.random() * 360}deg`
    });

    const addLeaf = () => {
      setLeaves(prevLeaves => [...prevLeaves, createLeaf()]);
    };

    const interval = setInterval(addLeaf, 3000);
    for (let i = 0; i < 10; i++) addLeaf();

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
      title: "Personalized Advice",
      description: "Get tailored guidance that speaks directly to your situation and needs"
    },
    {
      icon: <Volume2 className="h-8 w-8 text-blue-500" />,
      title: "Human Connection",
      description: "Experience warm, natural conversations with Brooklyn's authentic voice"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "24/7 Availability",
      description: "Access support whenever you need it, day or night"
    }
  ];

  const timeBasedSupport = [
    {
      icon: <Sunrise className="h-8 w-8 text-amber-500" />,
      time: "Morning",
      example: "Start your day with intention and positivity"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      time: "Day",
      example: "Navigate challenges with confidence"
    },
    {
      icon: <Moon className="h-8 w-8 text-indigo-500" />,
      time: "Evening",
      example: "Reflect and prepare for tomorrow"
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 relative overflow-hidden">
        {/* Falling Leaves */}
        {leaves.map(leaf => (
          <FallingLeaf
            key={leaf.id}
            style={{
              left: leaf.left,
              animationDuration: leaf.animationDuration,
              opacity: leaf.opacity,
              transform: `scale(${leaf.scale}) rotate(${leaf.rotate})`
            }}
          />
        ))}

        {/* Hero Section */}
        <section className="px-6 pt-32 pb-24 text-center max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-purple-200/20 blur-3xl" />
          <div className="relative">
            <h1 className="text-6xl font-bold tracking-tight text-gray-800 mb-6">
              Meet Brooklyn, Your Personal
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"> Well-being Guide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto my-8">
              Experience compassionate, voice-enabled self-help guidance designed to support you throughout your day.
            </p>
            <div className="flex justify-center gap-6 mt-12">
              <Button size="lg" className="px-8 py-6 text-lg">
                Try Brooklyn Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Why Brooklyn Section */}
        <section className="px-6 py-24 bg-white/70 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Brooklyn Was Created</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Brooklyn was born from a vision to make mental wellness support more accessible, 
                  personal, and human. In a world where many feel overwhelmed or isolated, 
                  Brooklyn offers a unique combination of AI intelligence and human warmth.
                </p>
                <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                  <Heart className="h-8 w-8 text-red-500" />
                  <p className="text-gray-700 font-medium">Built with empathy at its core</p>
                </div>
                <div className="space-y-4 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-gray-700 text-lg">
                    To provide accessible, judgment-free guidance that helps people navigate 
                    daily challenges and cultivate personal growth.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90">
                    <CardContent className="p-8 space-y-4">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-full inline-block">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-xl">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Time-based Support */}
        <section className="px-6 py-24 bg-gradient-to-b from-white/80 to-purple-50/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Support Throughout Your Day</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {timeBasedSupport.map((item, index) => (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-full inline-block">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{item.time}</h3>
                    <p className="text-gray-600 text-lg">{item.example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Demo Section */}
        <section className="px-6 py-24 bg-white/70 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-gray-800">Experience Brooklyn's Voice</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear how Brooklyn delivers personalized guidance with warmth and understanding.
            </p>
            <Card className="max-w-lg mx-auto shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 italic">
                    "Good morning! Remember, each day is a fresh start. 
                    What small step can you take today towards your goals?"
                  </p>
                  <Button variant="outline" className="px-6">
                    <Volume2 className="h-5 w-5 mr-2" />
                    Play Sample
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 bg-gradient-to-b from-purple-50/50 to-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600">
              Join thousands of others who have found support and guidance with Brooklyn.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;