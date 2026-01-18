import { motion } from 'framer-motion';
import { getNewArrivals } from '@/lib/gadgets';
import ItemCard from '@/components/gadgets/ItemCard';
import { Sparkles } from 'lucide-react';

const NewArrivals = () => {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Just Arrived</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            New <span className="gradient-text">Arrivals</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Be the first to explore our latest additions to the collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((gadget, index) => (
            <ItemCard key={gadget.id} gadget={gadget} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
