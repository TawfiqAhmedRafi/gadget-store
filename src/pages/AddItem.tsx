import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useGadgets } from '@/contexts/GadgetContext';
import { categories } from '@/lib/gadgets';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddItem = () => {
  const { isAuthenticated } = useAuth();
  const { addGadget } = useGadgets();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    features: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>
            <h1 className="font-display text-3xl font-bold">Access Denied</h1>
            <p className="text-muted-foreground max-w-md">
              You need to be logged in to add new products. Please sign in to continue.
            </p>
            <Link to="/login">
              <Button className="gap-2">
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.category) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    addGadget({
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image,
      category: formData.category,
      features: formData.features.split(',').map(f => f.trim()).filter(Boolean)
    });

    toast({
      title: "Product added successfully!",
      description: `${formData.name} has been added to the store.`,
    });

    navigate('/items');
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/items"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-8">
              <h1 className="font-display text-4xl font-bold mb-2">
                Add New <span className="gradient-text">Product</span>
              </h1>
              <p className="text-muted-foreground">
                Fill in the details to add a new gadget to the store.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Wireless Earbuds Pro"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50"
                />
                {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the product features and benefits..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="bg-secondary/50"
                />
                {errors.description && <p className="text-destructive text-sm">{errors.description}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="99.99"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-secondary/50"
                  />
                  {errors.price && <p className="text-destructive text-sm">{errors.price}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {categories.map((cat) => (
                        <SelectItem key={cat.name} value={cat.name}>
                          {cat.icon} {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-destructive text-sm">{errors.category}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="bg-secondary/50"
                />
                {errors.image && <p className="text-destructive text-sm">{errors.image}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (comma-separated)</Label>
                <Input
                  id="features"
                  placeholder="Wireless, Noise Cancellation, 24hr Battery"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="bg-secondary/50"
                />
              </div>

              <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90">
                <Plus className="w-5 h-5" />
                Add Product
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AddItem;
