import Image from 'next/image';
import { ReactNode } from 'react';

interface BentoImageProps {
  /**
   * Image source URL
   */
  imageSrc: string;
  
  /**
   * Alt text for the image
   */
  imageAlt: string;
  
  /**
   * Title to display on hover
   */
  title: string;
  
  /**
   * Optional subtitle to display on hover
   */
  subtitle?: string;
  
  /**
   * Column span (1-12) for the item
   * @default 4
   */
  colSpan?: number;
  
  /**
   * Row span for the item
   * @default 1
   */
  rowSpan?: number;
  
  /**
   * Optional additional className for the container
   */
  className?: string;
  
  /**
   * Optional children to render inside the item
   */
  children?: ReactNode;
}

export function BentoImage({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  colSpan = 4,
  rowSpan = 1,
  className = '',
  children,
}: BentoImageProps) {
  // Create a className based on the colSpan and rowSpan props
  const getColSpanClass = () => {
    switch(colSpan) {
      case 1: return 'col-span-1';
      case 2: return 'col-span-2';
      case 3: return 'col-span-3';
      case 4: return 'col-span-4';
      case 5: return 'col-span-5';
      case 6: return 'col-span-6';
      case 7: return 'col-span-7';
      case 8: return 'col-span-8';
      case 9: return 'col-span-9';
      case 10: return 'col-span-10';
      case 11: return 'col-span-11';
      case 12: return 'col-span-12';
      default: return 'col-span-4';
    }
  };

  const getRowSpanClass = () => {
    if (rowSpan <= 1) return '';
    switch(rowSpan) {
      case 2: return 'row-span-2';
      case 3: return 'row-span-3';
      case 4: return 'row-span-4';
      case 5: return 'row-span-5';
      case 6: return 'row-span-6';
      default: return '';
    }
  };

  return (
    <div 
      className={`${getColSpanClass()} ${getRowSpanClass()} relative overflow-hidden group ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className={`${subtitle ? 'text-xl' : 'text-lg'} font-bold`}>{title}</h3>
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
