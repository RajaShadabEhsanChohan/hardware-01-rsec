import CartDrawer from "@/components/CartDrawer";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Deal from "@/components/Deal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Deal />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
      <CartDrawer />
    </main>
  );
}
