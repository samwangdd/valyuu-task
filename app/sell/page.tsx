import SavePlantComponent from './components/save-plant-component';
import JoinUsComponent from './components/join-us-component';
import BannerComponent from './components/banner-component';

export default function SellHome() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <BannerComponent />
      <SavePlantComponent />
      <JoinUsComponent />
    </main>
  );
}
