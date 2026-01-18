import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">New Collection 2024</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover the
              <br />
              <span className="gradient-text">Future of Tech</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Explore our curated collection of premium gadgets designed to enhance your digital lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/items">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-effect">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="#featured">
                <Button variant="outline" size="lg" className="px-8">
                  View Featured
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="font-display text-3xl font-bold gradient-text">500+</div>
                <div className="text-muted-foreground text-sm">Products</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">50k+</div>
                <div className="text-muted-foreground text-sm">Customers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold gradient-text">4.9</div>
                <div className="text-muted-foreground text-sm">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop"
                alt="Premium Headphones"
                className="relative w-full h-full object-cover rounded-3xl animate-float"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-8 top-1/4 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="text-sm font-medium">Premium Quality</div>
                <div className="text-2xl font-display font-bold gradient-text">$279.99</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm">In Stock</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
