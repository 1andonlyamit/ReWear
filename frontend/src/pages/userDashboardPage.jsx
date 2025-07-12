import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Recycle,
  Leaf,
  Award,
} from 'lucide-react';
import Header from '../components/dashboard/Header';
import ProfileSection from '../components/dashboard/ProfileSection';
import ItemCard from '../components/dashboard/ItemCard';
import SwapCard from '../components/dashboard/SwapCard';
import { user, myListings, myPurchases, recentSwaps } from '../data/dashboardData';

// Main Dashboard Component
const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Dashboard</h1>
          <p className="text-text-secondary">Manage your sustainable fashion journey</p>
        </div>

        {/* Profile Section */}
        <div className="mb-8">
          <ProfileSection user={user} />
        </div>

        {/* My Listings Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">My Listings</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add New Item</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {myListings.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* My Purchases Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">My Purchases</h2>
            <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors">
              <Search className="h-4 w-4" />
              <span>Browse Items</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {myPurchases.map(item => (
              <ItemCard key={item.id} item={item} showActions={false} />
            ))}
          </div>
        </div>

        {/* Recent Swaps Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Recent Swaps</h2>
            <button className="text-primary hover:text-primary/80 font-medium">
              View All Swaps
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSwaps.map(swap => (
              <SwapCard key={swap.id} swap={swap} />
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Your Environmental Impact</h2>
            <p className="text-text-secondary">Every swap makes a difference!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-text-primary">23</p>
              <p className="text-text-secondary">Items Reused</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-text-primary">45kg</p>
              <p className="text-text-secondary">CO2 Saved</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-text-primary">Level 3</p>
              <p className="text-text-secondary">Eco Warrior</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;