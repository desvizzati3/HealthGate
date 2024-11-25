<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>RUMAH SAKIT</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content>
      <!-- Search Bar -->
      <ion-searchbar class="searchbar" placeholder="Cari rumah sakit terbaik"></ion-searchbar>


      <!-- Recommendation Section -->
      <div class="recommendation-section">
        <h2>Rekomendasi Rumah Sakit</h2><br>
        
        <ion-button fill="clear" size="small" class="lihat-semua">Lihat Semua</ion-button>
      </div>
      <div class="text-recommendation">
        <p>Rumah sakit terbaik di Purbalingga</p>
      </div>
      <!-- List of Hospitals -->
      <ion-list>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="https://via.placeholder.com/100x100?text=RS1" alt="Rumah Sakit Purbalingga" />
          </ion-thumbnail>
          <ion-label>
            <h3>Rumah Sakit Purbalingga</h3>
            <p>Jl. Blater No. 22 Kalimanah, Kabupaten Purbalingga, 53421</p>
          </ion-label>
          <ion-button slot="end" size="small" color="primary">Daftar</ion-button>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="https://via.placeholder.com/100x100?text=RS2" alt="Rumah Sakit Harapan Ibu" />
          </ion-thumbnail>
          <ion-label>
            <h3>Rumah Sakit Harapan Ibu</h3>
            <p>Jl. Blater No. 22 Kalimanah, Kabupaten Purbalingga, 53421</p>
          </ion-label>
          <ion-button slot="end" size="small" color="primary">Daftar</ion-button>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="https://via.placeholder.com/100x100?text=RS3" alt="RSUD Goeteng Taroena" />
          </ion-thumbnail>
          <ion-label>
            <h3>RSUD Goeteng Taroena</h3>
            <p>Jl. Blater No. 22 Kalimanah, Kabupaten Purbalingga, 53421</p>
          </ion-label>
          <ion-button slot="end" size="small" color="primary">Daftar</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/vue";

export default {
  name: "Hospitals",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
  },
};
</script>

<style scoped>
.searchbar {
  width: 90%;
  margin: 16px 16px 0 16px;
}

img {
  width: 100%;
  border-radius: 8px;
}

.recommendation-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 16px;
}

.recommendation-section h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.recommendation-section p {
  font-size: 14px;
  margin: 4px 0 0 0;
}

.lihat-semua {
  font-size: 12px;
  color: var(--ion-color-primary);
  text-decoration: underline;
}

ion-item {
  --inner-padding-start: 16px;
}

ion-thumbnail img {
  border-radius: 8px;
}

.lihat-semua{
  font-size: 12px;
  color: var(--ion-color-primary);
  text-decoration: none;
}

.text-recommendation{
  margin: 0 16px;
}
</style>
