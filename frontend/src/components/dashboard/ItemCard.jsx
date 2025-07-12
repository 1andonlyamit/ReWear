import { Package, Gift, Eye, Heart, MessageCircle } from 'lucide-react';

// Item Card Component
export default function ItemCard({ item, showActions = true }) {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
      <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 relative">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package className="h-12 w-12 text-text-muted" />
          </div>
        )}
        
        {item.status && (
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
            item.status === 'available' ? 'bg-success/20 text-success' :
            item.status === 'swapped' ? 'bg-accent/20 text-accent' :
            'bg-slate-200 text-text-muted'
          }`}>
            {item.status}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-text-primary mb-1">{item.name}</h3>
        <p className="text-sm text-text-muted mb-2">{item.brand} • Size {item.size}</p>
        <p className="text-xs text-text-secondary mb-3">{item.condition}</p>
        
        {item.points && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Gift className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{item.points} points</span>
            </div>
            {item.views && (
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4 text-text-muted" />
                <span className="text-sm text-text-muted">{item.views}</span>
              </div>
            )}
          </div>
        )}
        
        {showActions && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-slate-100 rounded">
                <Heart className="h-4 w-4 text-text-muted hover:text-primary" />
              </button>
              <button className="p-1 hover:bg-slate-100 rounded">
                <MessageCircle className="h-4 w-4 text-text-muted hover:text-primary" />
              </button>
            </div>
            <button className="text-sm text-primary hover:text-primary/80 font-medium">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};