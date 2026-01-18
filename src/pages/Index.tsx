import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/landing/HeroSection';
import FeaturedProducts from '@/components/landing/FeaturedProducts';
import NewArrivals from '@/components/landing/NewArrivals';
import CategoriesSection from '@/components/landing/CategoriesSection';
import AboutSection from '@/components/landing/AboutSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ContactSection from '@/components/landing/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <NewArrivals />
      <CategoriesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
