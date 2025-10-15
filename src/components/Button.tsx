'use client';

import React from 'react';
import { cn } from '../lib/utils';

/**
 * Button Component
 * 
 * A customizable button with optional smooth text sliding animation on hover.
 * 
 * @example
 * // Animated button - default behavior
 * <Button
 *   text="Get Started"
 *   hoverText="Click Me!"
 *   variant="primary"
 *   onClick={() => console.log('Clicked!')}
 * />
 * 
 * @example
 * // Non-animated button
 * <Button
 *   text="Simple Button"
 *   animated={false}
 *   variant="secondary"
 *   onClick={() => console.log('Clicked!')}
 * />
 * 
 * @example
 * // Custom width override
 * <Button
 *   text="About Us"
 *   hoverText="Learn More"
 *   variant="outline"
 *   size="lg"
 *   className="w-full"
 * />
 */

export interface ButtonProps {
  /** Main button text content (required) */
  text: string;
  /** Text to show on hover (optional) */
  hoverText?: string;
  /** Enable/disable animation effect */
  animated?: boolean;
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Disable button */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  text,
  hoverText = '',
  animated = true,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  // Animation behavior:
  // - Normal state: Shows text prop
  // - Hover state: text slides up, hoverText slides up from bottom
  // - Both animations use same 300ms timing for perfect synchronization
  // - Text is kept on single line with whitespace-nowrap to prevent layout issues
  // - Button width automatically adjusts to fit text content (min-w-fit)
  const buttonVariants = {
    primary: 'bg-pink-primary text-white hover:bg-pink-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border-2 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white',
    ghost: 'text-pink-primary hover:bg-pink-primary/10',
  };

  const sizeVariants = {
    sm: 'px-4 py-2 text-sm min-h-[2.5rem] min-w-fit',
    md: 'px-6 py-3 text-base min-h-[3rem] min-w-fit',
    lg: 'px-8 py-4 text-lg min-h-[3.5rem] min-w-fit',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // Base styles
        'group relative overflow-hidden rounded-lg font-medium transition-all duration-300 ease-in-out',
        'transform inline-flex items-center justify-center',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        
        // Variant styles
        buttonVariants[variant],
        
        // Size styles
        sizeVariants[size],
        
        // Custom className
        className
      )}
    >
      {/* Button content container */}
      {animated ? (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Original text - slides up on hover (translate-y-full = moves up and out of view) */}
          <span className="block text-center leading-tight transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
            {text}
          </span>
          
          {/* Hover text - starts below view (translate-y-full) and slides up to center on hover */}
          <span className="absolute inset-0 flex items-center justify-center text-center leading-tight transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 whitespace-nowrap">
            {hoverText !== '' ? hoverText : text}
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-center leading-tight whitespace-nowrap">
            {text}
          </span>
        </div>
      )}
      
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-primary/20 to-pink-primary/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </button>
  );
};

export default Button;
