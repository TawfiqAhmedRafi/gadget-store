import { Gadget } from '@/lib/gadgets';
import ItemCard from './ItemCard';

interface ItemListProps {
  gadgets: Gadget[];
}

const ItemList = ({ gadgets }: ItemListProps) => {
  if (gadgets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No gadgets found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {gadgets.map((gadget, index) => (
        <ItemCard key={gadget.id} gadget={gadget} index={index} />
      ))}
    </div>
  );
};

export default ItemList;
