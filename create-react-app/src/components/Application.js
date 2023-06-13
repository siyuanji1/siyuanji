import React from 'react';
import HeaderBackground from './headerFooter/Header-background';
import Apps from './Application/Application_Compon';


export default function Application() {
  const bgData = {
    class: 'bg-image',
    title: 'Compare your pets!',
    subTitle: 'Discover the perfect pet waiting for a loving home.'
  }
  
  return (
    <div>
      <HeaderBackground
        class={bgData.class}
        title={bgData.title}
        subTitle={bgData.subTitle}
      />
      <Apps />
    </div>
  );
}