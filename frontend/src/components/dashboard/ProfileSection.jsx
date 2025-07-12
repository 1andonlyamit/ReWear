import { User, Camera, Edit3, MapPin, Star, Gift, Leaf, Plus, RefreshCw } from "lucide-react";

// Profile Section Component
export default function ProfileSection({ user }) {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-start space-x-6">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors">
            <Camera className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-text-primary">{user.name}</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
              <Edit3 className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4 text-text-muted" />
              <span className="text-text-secondary">{user.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="text-text-secondary">{user.rating}/5 ({user.reviews} reviews)</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
              <div>
                <p className="text-sm text-text-muted">ReWear Points</p>
                <p className="text-2xl font-bold text-primary">{user.points}</p>
              </div>
              <Gift className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg">
              <div>
                <p className="text-sm text-text-muted">Eco Impact</p>
                <p className="text-2xl font-bold text-secondary">{user.itemsSaved}</p>
                <p className="text-xs text-text-muted">items saved</p>
              </div>
              <Leaf className="h-8 w-8 text-secondary" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col space-y-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Item</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors">
            <RefreshCw className="h-4 w-4" />
            <span>New Swap</span>
          </button>
        </div>
      </div>
    </div>
  );
};