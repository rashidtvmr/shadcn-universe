"use client";

import { Button } from "@/ui/button";
import { Component } from "lucide-react";
import { useState } from "react";
import { CodePreview } from "./CodePreview";
import { Pricing } from "./Pricing";
import { HeroPill } from "./ui/hero-pill";
import { cn } from "@/lib/utils";

const variants = [
  {
    id: "original",
    name: "Original",
    component: Pricing,
    description: "The original pricing component with animated cards and gradients",
  },

];

const getCodeForVariant = (variantId: string) => {
  return `// Sample implementation
import { useState } from "react";
import { Button } from "@/ui/button";

export const PricingComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  
  const plans = [
    { id: "basic", name: "Basic", price: 29 },
    { id: "pro", name: "Pro", price: 59 },
    { id: "enterprise", name: "Enterprise", price: 99 }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <div key={plan.id} className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <div className="text-3xl font-bold">\${plan.price}/mo</div>
          <Button className="w-full mt-4">
            Choose Plan
          </Button>
        </div>
      ))}
    </div>
  );
};`;
};

const VariantSection = ({ 
  variant, 
  viewMode, 
  onViewModeChange 
}: { 
  variant: typeof variants[0];
  viewMode: 'preview' | 'code';
  onViewModeChange: (mode: 'preview' | 'code') => void;
}) => {
  const Component = variant.component;

  return (
    <div className="space-y-6">
      {/* Variant Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{variant.name}</h2>
        <p className="text-muted-foreground">{variant.description}</p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-end">
        <div className="flex rounded-md border border-foreground/10 bg-muted p-0.5">
          <Button
            variant={viewMode === 'preview' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('preview')}
            className="h-6 px-2 text-xs rounded-sm"
            >
            Preview
          </Button>
          <Button
            variant={viewMode === 'code' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewModeChange('code')}
            className="h-6 px-2 text-xs rounded-sm"
            >
            Code
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className={cn("overflow-hidden rounded-lg border bg-background min-h-[400px] flex flex-col", viewMode === 'preview' && "p-6")}>
        {viewMode === 'preview' ? (
          <Component />
        ) : (
          <div className="relative flex-1">
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center pointer-events-none">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-muted-foreground">Coming Soon</div>
                <div className="text-sm text-muted-foreground">Code examples will be available soon</div>
              </div>
            </div>
            
            {/* Sample Code (blurred) */}
            <div className="opacity-30 pointer-events-none">
              <CodePreview 
                code={getCodeForVariant(variant.id)}
                language="tsx"
                className="border-0 bg-transparent p-0 h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const VariantShowcase = () => {
  const [viewModes, setViewModes] = useState<Record<string, 'preview' | 'code'>>({});

  const handleViewModeChange = (variantId: string, mode: 'preview' | 'code') => {
    setViewModes(prev => ({ ...prev, [variantId]: mode }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      
      <div className="border-b">
        <div className="container mx-auto py-6">
          <div className="space-y-4">
          <HeroPill
            icon={<Component className="stroke-foreground size-4 fill-foreground/40" strokeWidth={0.5} />}
            text="New components added regularly"
          />
            <h1 className="text-3xl font-bold">Pricing Component Variants</h1>
            <p className="text-muted-foreground">
              Explore different pricing component designs and implementations
            </p>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="container mx-auto py-8">
        <div className="space-y-16">
          {variants.map((variant) => (
            <VariantSection
              key={variant.id}
              variant={variant}
              viewMode={viewModes[variant.id] || 'preview'}
              onViewModeChange={(mode) => handleViewModeChange(variant.id, mode)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
