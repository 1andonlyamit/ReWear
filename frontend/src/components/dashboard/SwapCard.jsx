import { CheckCircle, Clock, RefreshCw, Package, User, ArrowRight, Gift } from 'lucide-react';

// Swap Card Component
export default function SwapCard({ swap }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-success/20 text-success';
      case 'pending': return 'bg-accent/20 text-accent';
      case 'in-progress': return 'bg-secondary/20 text-secondary';
      default: return 'bg-slate-200 text-text-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in-progress': return <RefreshCw className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{swap.partnerName}</h3>
            <p className="text-sm text-text-muted">{swap.date}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(swap.status)}`}>
          {getStatusIcon(swap.status)}
          <span className="capitalize">{swap.status}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <Package className="h-6 w-6 text-text-muted" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">{swap.yourItem}</p>
            <p className="text-xs text-text-muted">Your item</p>
          </div>
        </div>
        
        <ArrowRight className="h-4 w-4 text-text-muted" />
        
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <Package className="h-6 w-6 text-text-muted" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">{swap.theirItem}</p>
            <p className="text-xs text-text-muted">Their item</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Gift className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">{swap.points} points</span>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};