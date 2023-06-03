import SavePlantComponent from './components/save-plant-component';
import JoinUsComponent from './components/join-us-component';
import BannerComponent from './components/banner-component';


export default function SellHome() {

  return (
    <main
      className='flex min-h-screen flex-col items-center va-container bg-va-background'
    >
      <BannerComponent />
      <SavePlantComponent />
      <JoinUsComponent />
      <SavePlantComponent />
      <JoinUsComponent />
      <BannerComponent />
    </main>
  );
}
