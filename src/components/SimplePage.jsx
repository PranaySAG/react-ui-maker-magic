
import React from 'react';
import SimpleLayout from './SimpleLayout';
import SimpleButton from './ui/simple-button';
import SimpleCard from './ui/simple-card';

const SimplePage = () => {
  return (
    <SimpleLayout>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Simple Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SimpleCard title="Card 1" gradient="blue">
          <p>Your content here</p>
        </SimpleCard>
        
        <SimpleCard title="Card 2" gradient="purple">
          <p>More content here</p>
        </SimpleCard>
        
        <SimpleCard title="Card 3" gradient="orange">
          <p>Even more content</p>
        </SimpleCard>
      </div>
      
      <SimpleButton variant="primary" size="large">
        Click Me
      </SimpleButton>
    </SimpleLayout>
  );
};

export default SimplePage;
