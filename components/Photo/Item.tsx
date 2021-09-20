import { Photo } from '@/interfaces/Photo';
import Card from '../Card';
import ProgressiveImageLoader from '../ProgressiveImageLoader';

interface Props {
  photo: Photo
}

const PictureItem = ({
  photo,
}: Props) => (
  <div key={photo.id} className="w-1/3 mb-2 p-2">
    <Card>
      <p className="p-3">{photo.photographer}</p>
      <div className="h-80">
        <ProgressiveImageLoader
          tiny={photo.src.small}
          big={photo.src.large}
          className="object-cover object-center h-full"
        />
      </div>
    </Card>
  </div>
);

export default PictureItem;
