import { motion } from 'framer-motion';
import { Shield, Truck, Headphones, RefreshCw } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data is protected with enterprise-grade security."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50 with 2-day delivery."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our expert team is always here to help you."
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy on all products."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">GadgetStore</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We're passionate about bringing you the latest and greatest in technology. 
                Since 2015, we've been curating the finest selection of gadgets from around the world, 
                ensuring every product meets our strict quality standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-5 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
              alt="About Us"
              className="relative w-full rounded-3xl object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
