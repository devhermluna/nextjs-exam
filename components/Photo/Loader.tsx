import React from 'react';
import Card from '../Card';
import LoaderPlaceholder from '../LoaderPlaceholder';

const PhotoLoader = () => (
  <div className="w-1/3 mb-2 p-2">
    <Card>
      <div className="p-3">
        <LoaderPlaceholder height={23} width={250} className="rounded-md" />
      </div>
      <LoaderPlaceholder className="h-80 w-full" />
    </Card>
  </div>
);

export default PhotoLoader;
