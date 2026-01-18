import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ItemList from '@/components/gadgets/ItemList';
import { useGadgets } from '@/contexts/GadgetContext';
import { categories } from '@/lib/gadgets';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Items = () => {
  const { gadgets } = useGadgets();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const selectedCategory = searchParams.get('category') || '';

  const filteredGadgets = useMemo(() => {
    return gadgets.filter(gadget => {
      const matchesSearch = gadget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           gadget.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || gadget.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [gadgets, searchTerm, selectedCategory]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our complete collection of premium gadgets and tech accessories.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 mb-12"
          >
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-secondary/50"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                    selectedCategory === category.name 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </Badge>
              ))}
            </div>

            {/* Active Filters */}
            {(searchTerm || selectedCategory) && (
              <div className="flex justify-center items-center gap-2">
                <span className="text-muted-foreground text-sm">
                  {filteredGadgets.length} result{filteredGadgets.length !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>

          {/* Product List */}
          <ItemList gadgets={filteredGadgets} />
        </div>
      </div>
    </Layout>
  );
};

export default Items;
