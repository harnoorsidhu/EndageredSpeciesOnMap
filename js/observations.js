
 let obK=[{
   id: 67868131,
  uri: "https://www.inaturalist.org/observations/67868131",
  geojson: {
   coordinates: [ -79.3565522733, 43.798774894 ],
   type: "Point"
 },
  created_at: "2021-01-10T09:51:48-10:00",
 taxon: {
 threatened: false,
    introduced: false,
    endangered: true,
    name: "Ondatra zibethicus",
    wikipedia_url: "http://en.wikipedia.org/wiki/Muskrat",
    default_photo: {
       square_url:
        "https://static.inaturalist.org/photos/109319291/square.jpg?1609877680",
       attribution: "(c) Stephen Garvey, all rights reserved",
       flags: [],
       medium_url:
         "https://static.inaturalist.org/photos/109319291/medium.jpg?1609877680",
       id: 109319291,
       license_code: null,
       original_dimensions: { width: 2048, height: 1365 },
       url:
         "https://static.inaturalist.org/photos/109319291/square.jpg?1609877680",
     },
     iconic_taxon_name: "Mammalia",
     preferred_common_name: "Muskrat"
   }
 } ];


function titleCase(s) {

  return s.charAt(0).toUpperCase() + s.substring(1);

}


function transformObservations(observations) {
  return observations.map(function (observation) {






      let key = observation;
      let obj = {
        id : key.id,
        uri: key.uri,
        coords: key.geojson.coordinates,
        date: new Date(key.created_at),
        name:key.taxon.preferred_common_name,
        photoUrl:key.taxon.default_photo.square_url,
        wikipediaUrl:key.taxon.wikipedia_url,
        isNative:key.taxon.native,
        isIntroduced:key.taxon.introduced,
        isEndangered:key.taxon.endangered,
        isThreatened:key.taxon.threatened,
      }
return obj;
console.log(obj);

  });
}
transformObservations(obK);



function filterObservations(observations) {

  return observations.filter(function (observation) {




    if(observation.taxon!==null){




      if (observation.taxon.default_photo!=null) {




      return observation;

      }

    }





  });
}



function getAllObservations() {

  const filtered = filterObservations(data.results);
  const transformed = transformObservations(filtered);


  return transformed;
}
getAllObservations();


function filterOnlyNative(observations) {

  console.log(observations);
  return observations.filter(function (observation) {


    console.log(observation);
if (observation.isNative) {
return observation;

      }
    });
}


function filterOnlyIntroduced(observations) {

  return observations.filter(function (observation) {


if (observation.isIntroduced) {
return observation;

      }
    });
}
