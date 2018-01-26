import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

import styles from '../style/Maps.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWJveiIsImEiOiJjamJucXhjbzc0ZXdjMnh0YnJqMWI4NmR1In0.HMv4BpyCUAid4JwcIJ9Yjg';

var point = new ReactiveVar("http://www.castelnou.com/extimages/P1120153.jpg");
var pointe = new ReactiveVar("Un petit village fortifié dont les ruelles offrent un décor exceptionnel.");

export default class Maps extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 2.70278,
      lat:  42.61972,
      zoom: 8.5,
      location:"po"

    };
  }

  componentDidMount() {
    const { lng, lat, zoom,location } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/adriboz/cjbz8phul8zz62sntrpez34l8',
      center: [lng, lat],
      zoom
    });



    map.loadImage('image/placeholder.png', function(error, image) {
     if (error) throw error;
     map.addImage('cat', image);
   map.on('load', function() {
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [  {
                    "type": "Feature",
                    "properties": {
                      "name": "Aéropport de Perpignan",
                      "description": "Un décor commun pour les premières et les dernières images dans le Roussillon.",
                        "image":"http://images.lindependant.fr/images/2015/09/30/p-o-journee-d-accueil-des-nouveaux-arrivants-au-palais-des-r_624570.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        2.868806,
                        42.741308
                      ],
                      "type": "Point"
                    },
                    "id": "5cbb32ad57dfc239d58c45db21855db1"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "Lac des Bouillouses",
                      "description": "Un décor naturel à couper le souffle.",
                        "image":"http://images.lindependant.fr/images/2015/09/30/p-o-journee-d-accueil-des-nouveaux-arrivants-au-palais-des-r_624570.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        1.997878,
                        42.569909
                      ],
                      "type": "Point"
                    },
                    "id": "8400e89c0dc2c37aee8c4b20084b81f5"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "vigne Catalane",
                      "description": "Cet environnement de qualité permet de mettre en valeur les paysages catalans.",
                        "image":"http://images.lindependant.fr/images/2015/09/30/p-o-journee-d-accueil-des-nouveaux-arrivants-au-palais-des-r_624570.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        2.703485,
                        42.516035
                      ],
                      "type": "Point"
                    },
                    "id": "8d58121c3782b4e19df7aea762b71665"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": " Le Clos de la Treille",
                      "description": "Le lieu va être totalement réaménagé au premier trimestre 2018 pour créer le décor principal du film.",
                        "image":"http://images.lindependant.fr/images/2015/09/30/p-o-journee-d-accueil-des-nouveaux-arrivants-au-palais-des-r_624570.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        3.126371,
                        42.48897
                      ],
                      "type": "Point"
                    },
                    "id": "address.13322977488799280"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "Palais des rois de Majorque",
                      "description": "L’occasion de mettre en avant ce joyau de l’architecture catalane.",
                      "image":"http://images.lindependant.fr/images/2015/09/30/p-o-journee-d-accueil-des-nouveaux-arrivants-au-palais-des-r_624570.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        2.896054,
                        42.693871
                      ],
                      "type": "Point"
                    },
                    "id": "e13e53ec8405e6dfb85fd7696f79f6f0"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "Plage de Canet",
                      "description": "La saison estivale est mise en avant .",
                      "image":"http://www.ot-canet.fr/photos/datPhoto2_519dd5fc4e5d9_N.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        3.034439,
                        42.671058
                      ],
                      "type": "Point"
                    },
                    "id": "f65c40eb17c00d2adc8cf623cd869756"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "Village et château de Castelnou",
                      "description": "Un petit village fortifié dont les ruelles offrent un décor exceptionnel.",
                       "image":"http://www.castelnou.com/extimages/P1120153.jpg"
                    },
                    "geometry": {
                      "coordinates": [
                        2.70278,
                        42.61972
                      ],
                      "type": "Point"
                    },
                    "id": "place.11138824915892740"
                  },
                  {
                    "type": "Feature",
                    "properties": {
                      "name": "Port et vieux village de Collioure",
                      "description": "Un décor mythique qui mérite des images de qualité."
                    },
                    "geometry": {
                      "coordinates": [
                        3.08083,
                        42.52556
                      ],
                      "type": "Point"
                    },
                    "id": "place.15032719243498020"
                  }
]
            }
        },
        "layout": {
            "icon-image": "cat",
            "icon-allow-overlap": true
        }
    });
})
})

const Img = ()=>{

console.log(point.get());

new mapboxgl.Popup()
     .setLngLat([3.08083, 42.52556])
     .setHTML("Port et vieux village de Collioure")
     .addTo(map);
}
Img();
    map.on('click', 'places', function (e) {

       point.set(e.features[0].properties.image);
       pointe.set(e.features[0].properties.name);

       map.flyTo({center: e.features[0].geometry.coordinates});

        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.name)
            .addTo(map);

    });


    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }


  render() {
    const { lng, lat, zoom } = this.state;
    console.log(this.state.location);

    return (
      <div className="map">
      <h1 className="map-title">Lieux de tournage</h1>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div><div>{point.get()}</div><div></div>
        </div>

        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
        <div className="footer-decription">
      <img className="img" src={point.get()}></img><div >{pointe.get()}</div>
        </div>
      </div>
    );
  }
}
