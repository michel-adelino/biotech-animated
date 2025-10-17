'use client';

import React from 'react';
import Button from './Button';

/**
 * ButtonDemo Component
 * 
 * Comprehensive demo showcasing the AnimatedButton component with all variants,
 * sizes, and usage examples. Includes interactive examples and code snippets.
 */
const ButtonDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-main p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading text-white mb-4">
            AnimatedButton Component Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A fully customizable button component with smooth text sliding animations on hover. 
            Perfect for creating engaging user interfaces with professional animations.
          </p>
        </div>
        
        {/* Button Variants Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Primary Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Primary</h3>
              <p className="text-gray-300 text-sm mb-4">Main action buttons with pink background</p>
              <Button
                text="Get Started"
                hoverText="Click Me!"
                variant="primary"
                onClick={() => console.log('Primary button clicked')}
              />
            </div>

            {/* Secondary Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Secondary</h3>
              <p className="text-gray-300 text-sm mb-4">Secondary actions with dark background</p>
                <Button
                text="About Us"
                hoverText="Learn More"
                variant="secondary"
                className='w-56'
                onClick={() => console.log('Secondary button clicked')}
              />
            </div>

            {/* Outline Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Outline</h3>
              <p className="text-gray-300 text-sm mb-4">Bordered buttons with transparent background</p>
              <Button
                text="Contact"
                hoverText="Contact Now"
                variant="outline"
                onClick={() => console.log('Outline button clicked')}
              />
            </div>

            {/* Ghost Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Ghost</h3>
              <p className="text-gray-300 text-sm mb-4">Minimal buttons with subtle hover effects</p>
              <Button
                text="Read Blog"
                hoverText="Read More"
                variant="ghost"
                onClick={() => console.log('Ghost button clicked')}
              />
            </div>
          </div>
        </section>

        {/* Button Sizes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Button Sizes</h2>
          <div className="bg-dark-highlighted p-8 rounded-lg">
            <p className="text-gray-300 text-center mb-8">Three different sizes to fit your design needs</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                text="Small"
                hoverText="Small Button"
                variant="primary"
                size="sm"
                onClick={() => console.log('Small button clicked')}
              />
              <Button
                text="Medium"
                hoverText="Medium Button"
                variant="primary"
                size="md"
                onClick={() => console.log('Medium button clicked')}
              />
              <Button
                text="Large"
                hoverText="Large Button"
                variant="primary"
                size="lg"
                onClick={() => console.log('Large button clicked')}
              />
            </div>
          </div>
        </section>

        {/* Animation Control Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Animation Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Animated Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Animated Button (Default)</h3>
              <p className="text-gray-300 text-sm mb-4">Smooth text sliding animation on hover</p>
              <Button
                text="Animated Button"
                hoverText="Hover Effect!"
                variant="primary"
                animated={true}
                onClick={() => console.log('Animated button clicked')}
              />
            </div>

            {/* Non-Animated Button */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Non-Animated Button</h3>
              <p className="text-gray-300 text-sm mb-4">Simple button without animation effects</p>
              <Button
                text="Simple Button"
                variant="secondary"
                animated={false}
                onClick={() => console.log('Simple button clicked')}
              />
            </div>
          </div>
        </section>

        {/* Interactive Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Interactive Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Disabled State */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Disabled State</h3>
              <p className="text-gray-300 text-sm mb-4">Buttons can be disabled when actions are not available</p>
              <Button
                text="Disabled"
                hoverText="Disabled Button"
                variant="primary"
                disabled
              />
            </div>

            {/* Custom Styling */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Styling</h3>
              <p className="text-gray-300 text-sm mb-4">Apply custom classes for unique designs</p>
              <Button
                text="Custom Button"
                hoverText="Custom Style!"
                variant="outline"
                className="w-full border-2 border-pink-primary/50 hover:border-pink-primary"
                onClick={() => console.log('Custom button clicked')}
              />
            </div>
          </div>
        </section>

        {/* Text Length Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Auto Width Examples</h2>
          <div className="space-y-8">
            {/* Short Text */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Short Text - Auto Width</h3>
              <p className="text-gray-300 text-sm mb-4">Button automatically sizes to fit the text</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  text="Click"
                  hoverText="Go!"
                  variant="primary"
                  onClick={() => console.log('Short button clicked')}
                />
                <Button
                  text="Save"
                  hoverText="Saved!"
                  variant="secondary"
                  onClick={() => console.log('Save button clicked')}
                />
                <Button
                  text="OK"
                  hoverText="Done!"
                  variant="outline"
                  onClick={() => console.log('OK button clicked')}
                />
              </div>
            </div>

            {/* Medium Text */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Medium Text - Auto Width</h3>
              <p className="text-gray-300 text-sm mb-4">Buttons adjust width to accommodate longer text</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  text="Get Started"
                  hoverText="Let's Go!"
                  variant="primary"
                  onClick={() => console.log('Get Started clicked')}
                />
                <Button
                  text="Learn More"
                  hoverText="Read More"
                  variant="secondary"
                  onClick={() => console.log('Learn More clicked')}
                />
                <Button
                  text="Contact Us"
                  hoverText="Call Now!"
                  variant="outline"
                  onClick={() => console.log('Contact Us clicked')}
                />
              </div>
            </div>

            {/* Long Text */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Long Text - Auto Width</h3>
              <p className="text-gray-300 text-sm mb-4">Buttons expand to fit longer text while staying on one line</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  text="Book Your Strategy Call"
                  hoverText="Schedule Now!"
                  variant="primary"
                  onClick={() => console.log('Book Call clicked')}
                />
                <Button
                  text="Download Free Report"
                  hoverText="Get Report!"
                  variant="secondary"
                  onClick={() => console.log('Download clicked')}
                />
                <Button
                  text="View All Case Studies"
                  hoverText="See Examples!"
                  variant="outline"
                  onClick={() => console.log('View Studies clicked')}
                />
              </div>
            </div>

            {/* Custom Width Override */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Width Override</h3>
              <p className="text-gray-300 text-sm mb-4">You can still override the width when needed</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  text="Full Width Button"
                  hoverText="Click Me!"
                  variant="primary"
                  className="w-full"
                  onClick={() => console.log('Full width clicked')}
                />
                <Button
                  text="Fixed Width"
                  hoverText="Action!"
                  variant="secondary"
                  className="w-48"
                  onClick={() => console.log('Fixed width clicked')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Code Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Animated Usage */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Animated Button</h3>
              <p className="text-gray-300 text-sm mb-4">Default animated behavior with hover text</p>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto text-gray-200">
{`<Button
  text="Get Started"
  hoverText="Click Me!"
  variant="primary"
  animated={true}
  onClick={() => console.log('Clicked!')}
/>`}
              </pre>
            </div>
            
            {/* Non-Animated Usage */}
            <div className="bg-dark-highlighted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Non-Animated Button</h3>
              <p className="text-gray-300 text-sm mb-4">Simple button without animation effects</p>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto text-gray-200">
{`<Button
  text="Simple Button"
  variant="secondary"
  animated={false}
  onClick={() => console.log('Clicked!')}
/>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Animation Details Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading text-white mb-8 text-center">Animation Details</h2>
          <div className="bg-dark-highlighted p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-pink-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Normal State</h3>
                <p className="text-gray-300 text-sm">Shows the children text content</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Hover Start</h3>
                <p className="text-gray-300 text-sm">Children text slides up, hover text slides up from bottom</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Hover Complete</h3>
                <p className="text-gray-300 text-sm">Hover text is perfectly positioned where children text was</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                <strong className="text-pink-primary">Animation Duration:</strong> 300ms ease-in-out
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;
