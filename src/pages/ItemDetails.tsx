import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useGadgets } from '@/contexts/GadgetContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Check, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';

const ItemDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { gadgets } = useGadgets();
  const navigate = useNavigate();
  
  const gadget = gadgets.find(g => g.id === id);

  if (!gadget) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/items">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to products
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={gadget.image}
                alt={gadget.name}
                className="relative w-full aspect-square object-cover rounded-3xl"
              />
              {!gadget.inStock && (
                <div className="absolute inset-0 bg-background/80 rounded-3xl flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-6 py-2">Out of Stock</Badge>
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <Badge className="mb-4 bg-primary/90">{gadget.category}</Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  {gadget.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold text-foreground">{gadget.rating}</span>
                  </div>
                  <span className="text-muted-foreground">• 127 reviews</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  {gadget.description}
                </p>
              </div>

              {/* Price */}
              <div className="glass-card rounded-xl p-6">
                <div className="text-4xl font-display font-bold gradient-text mb-4">
                  ${gadget.price.toFixed(2)}
                </div>
                <Button 
                  size="lg" 
                  className="w-full gap-2 bg-primary hover:bg-primary/90 glow-effect"
                  disabled={!gadget.inStock}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {gadget.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>

              {/* Features */}
              <div className="glass-card rounded-xl p-6 space-y-4">
                <h3 className="font-display font-semibold text-lg">Key Features</h3>
                <ul className="space-y-3">
                  {gadget.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Free Shipping</div>
                </div>
                <div className="text-center p-4">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">2 Year Warranty</div>
                </div>
                <div className="text-center p-4">
                  <RefreshCw className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">30 Day Returns</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetails;
