import { Button } from './Button';
import { FiArrowRight, FiPlus } from 'react-icons/fi';


export const ButtonExample = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold">Button Variants</h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="danger">Danger</Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Button Sizes</h2>
      <div className="flex flex-wrap gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Button Corner Radius</h2>
      <div className="flex flex-wrap gap-4">
        <Button rounded="none">No Radius</Button>
        <Button rounded="sm">Small Radius</Button>
        <Button rounded="md">Medium Radius</Button>
        <Button rounded="lg">Large Radius</Button>
        <Button rounded="full">Full Radius</Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Button States</h2>
      <div className="flex flex-wrap gap-4">
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button fullWidth>Full Width</Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Hover Effects</h2>
      <div className="flex flex-wrap gap-4">
        <Button hoverEffect={true}>With Hover Effect</Button>
        <Button hoverEffect={false}>No Hover Effect</Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Button with Icons</h2>
      <div className="flex flex-wrap gap-4">
        <Button leftIcon={<FiPlus />}>Add Item</Button>
        <Button rightIcon={<FiArrowRight />}>Next Step</Button>
        <Button variant="outline" leftIcon={<FiPlus />} rightIcon={<FiArrowRight />}>
          Both Icons
        </Button>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Combined Examples</h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" size="lg" rounded="full" leftIcon={<FiPlus />}>
          New Project
        </Button>
        <Button variant="outline" rounded="none">
          Square Button
        </Button>
        <Button variant="accent" rounded="lg" rightIcon={<FiArrowRight />}>
          Continue
        </Button>
      </div>
    </div>
  );
};
