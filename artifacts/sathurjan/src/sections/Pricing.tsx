import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    price: '$999',
    period: '/mo',
    description: 'Perfect for small businesses starting their digital journey.',
    features: ['1 Active Project', 'Basic Email Support', '3 Revisions per month', 'Web Development', 'Basic SEO Setup'],
    isPopular: false,
  },
  {
    name: 'Business',
    price: '$2,499',
    period: '/mo',
    description: 'Comprehensive suite for growing companies requiring advanced solutions.',
    features: ['3 Active Projects', 'Priority 24/7 Support', 'Unlimited Revisions', 'All Development Services', 'Advanced Analytics Dashboard', 'Monthly Strategy Calls'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-scale digital transformation and dedicated engineering teams.',
    features: ['Unlimited Projects', 'Dedicated Account Manager', 'White-label Solutions', 'Custom API Integrations', 'SLA Guarantee', 'On-premise Deployment Options'],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-black/20 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Flexible engagement models designed to align with your business objectives and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col h-full ${
                tier.isPopular 
                  ? 'glass-card border-primary/50 shadow-2xl shadow-primary/20 scale-105 z-10' 
                  : 'glass border-white/10'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-foreground/60 text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-foreground">{tier.price}</span>
                <span className="text-foreground/50 font-medium">{tier.period}</span>
              </div>

              <ul className="mb-8 space-y-4 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.isPopular ? "gradient" : "outline"} 
                className={`w-full py-6 rounded-xl font-bold text-base ${
                  !tier.isPopular && 'border-white/20 hover:bg-white/10'
                }`}
              >
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
