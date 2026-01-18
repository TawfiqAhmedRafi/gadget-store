import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingBag, Mail, Lock, AlertCircle } from 'lucide-react';
import { MOCK_EMAIL, MOCK_PASSWORD } from '@/lib/auth';
import Layout from '@/components/layout/Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      navigate('/items');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass-card rounded-2xl p-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to access your account</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-secondary/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-secondary/50"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Sign In
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="text-center space-y-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">Demo Credentials:</p>
              <div className="text-sm bg-secondary/50 rounded-lg p-3 space-y-1">
                <p><span className="text-muted-foreground">Email:</span> {MOCK_EMAIL}</p>
                <p><span className="text-muted-foreground">Password:</span> {MOCK_PASSWORD}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Login;
