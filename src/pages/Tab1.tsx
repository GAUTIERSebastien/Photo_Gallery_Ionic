import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import useGeolocation from "../hooks/useGeolocation";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const { position, error } = useGeolocation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="position">
          {position && (
            <div>
              <h2>Position:</h2>
              <p>
                Latitude:{" "}
                <span className="latitude">{position.coords.latitude}</span>
              </p>
              <p>
                Longitude:{" "}
                <span className="longitude">{position.coords.longitude}</span>
              </p>
            </div>
          )}
          {error && <div>Erreur: {error.message}</div>}
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
