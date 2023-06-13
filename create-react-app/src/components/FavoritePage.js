import React from 'react';
import HeaderBackground from './headerFooter/Header-background';
import Favorite from './favorite/Favorite-page';


export default function FavoritePage() {
  const bgData = {
    class: 'bg-image',
    title: 'Your favorite list!',
    subTitle: 'The list of pets that you liked.'
  }
  
  return (
    <div>
      <HeaderBackground
        class={bgData.class}
        title={bgData.title}
        subTitle={bgData.subTitle}
      />
      <Favorite />
    </div>
  );
}