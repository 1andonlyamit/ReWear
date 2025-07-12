import React from 'react';
// import { Recycle, Users, Heart, Star } from 'lucide-react';
import { metrics } from '../../data/landingData';

// Impact Metrics Component
export default function ImpactMetrics() {

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Impact</h2>
          <p className="text-xl text-slate-600">Making a difference in sustainable fashion</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <metric.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
                <div className="text-slate-600">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};