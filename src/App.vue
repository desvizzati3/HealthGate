<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet :key="$route.fullPath"></ion-router-outlet>
      <!-- Bottom Navigation Bar -->
      <ion-tab-bar slot="bottom" translucent>
        <ion-tab-button tab="home" href="/home">
          <ion-icon name="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="poli" href="/poli">
          <ion-icon name="list"></ion-icon>
          <ion-label>Poli</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/profile">
          <ion-icon name="person"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
import { IonApp, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  }
});
</script>

<style>
ion-tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
