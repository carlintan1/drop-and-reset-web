import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const membershipPlans = [
  {
    name: "Social Player",
    price: "$49",
    period: "per month",
    description: "Perfect for casual play and community connection",
    features: [
      "4 open play sessions per month",
      "Access to social events",
      "Member-only discounts",
      "Community forum access",
    ],
  },
  {
    name: "Competitive Player",
    price: "$99",
    period: "per month",
    description: "For those seeking structured play and improvement",
    features: [
      "12 sessions per month",
      "League match participation",
      "Monthly coaching session",
      "Tournament entry discounts",
      "All Social Player benefits",
    ],
    featured: true,
  },
  {
    name: "All Access",
    price: "$149",
    period: "per month",
    description: "Unlimited play with premium perks",
    features: [
      "Unlimited sessions",
      "Priority court booking",
      "4 coaching sessions per month",
      "Free tournament entries",
      "Guest passes (2 per month)",
      "All Competitive benefits",
    ],
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 uppercase tracking-tight">
            Membership Plans
          </h2>
          <p className="text-lg text-foreground/80">
            Choose the plan that fits your style of play
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-3xl ${
                plan.featured ? "ring-4 ring-primary/40 shadow-xl scale-105" : "shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-display font-bold mb-2 uppercase tracking-wide">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-display font-black text-foreground">{plan.price}</span>
                  <span className="text-foreground/60 text-sm ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full rounded-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
