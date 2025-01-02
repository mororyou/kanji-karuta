import { Elementaries } from '~/schemas/constants/elementaries';
import ElementaryButn from './ElementaryBtn';
import HomeTitle from './Title';

export default function HomePageContent() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <HomeTitle />
      <div className="flex flex-col items-center">
        {Elementaries.map((elementary) => (
          <ElementaryButn key={elementary.level} name={elementary.name} />
        ))}
      </div>
    </div>
  );
}
