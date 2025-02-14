import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../places/components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/APrbqlVhPY62yFOXr_6tJQTTYVCNFOce0lB_LmIxBq_rw_1ImwmnfWX8sD38PoHNAh7prVpDFF_nty45FZR5h9aERD4atz9DEfbCC3_hqmRaU3VbKNrw6_wQF96y6w7ZYQueoHccZ8E=w408-h268-k-no",
    address: "20 W 34th St, New York, NY 10001, USA",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/APrbqlVhPY62yFOXr_6tJQTTYVCNFOce0lB_LmIxBq_rw_1ImwmnfWX8sD38PoHNAh7prVpDFF_nty45FZR5h9aERD4atz9DEfbCC3_hqmRaU3VbKNrw6_wQF96y6w7ZYQueoHccZ8E=w408-h268-k-no",
    address: "20 W 34th St, New York, NY 10001, USA",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
