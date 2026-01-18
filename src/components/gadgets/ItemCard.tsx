import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gadget } from '@/lib/gadgets';
import { Star, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ItemCardProps {
  gadget: Gadget;
  index?: number;
}

const ItemCard = ({ gadget, index = 0 }: ItemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/items/${gadget.id}`}>
        <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 h-full">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-secondary/30">
            <img
              src={gadget.image}
              alt={gadget.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {!gadget.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 backdrop-blur-sm">{gadget.category}</Badge>
            </div>
          </div>
          {/* Content */}
          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {gadget.name}
              </h3>
              <div className="flex items-center gap-1 text-yellow-500 shrink-0">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-foreground">{gadget.rating}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {gadget.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-display font-bold text-2xl gradient-text">
                ${gadget.price.toFixed(2)}
              </span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <ShoppingCart className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
