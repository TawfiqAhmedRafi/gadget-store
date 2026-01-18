import { motion } from 'framer-motion';
import { getFeaturedGadgets } from '@/lib/gadgets';
import ItemCard from '@/components/gadgets/ItemCard';

const FeaturedProducts = () => {
  const featured = getFeaturedGadgets();

  return (
    <section id="featured" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our top-rated gadgets loved by thousands of customers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((gadget, index) => (
            <ItemCard key={gadget.id} gadget={gadget} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
