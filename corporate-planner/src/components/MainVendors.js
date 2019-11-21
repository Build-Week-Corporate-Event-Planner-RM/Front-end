import React, { useEffect, useState } from "react";
import axios from 'axios';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';
import { authAxios } from '../components/authAxios';

export default function VendorList() {
  // TODO: Add useState to track data from useEffect
  const [vendor, setVendor] = useState([])

  useEffect(() => {
    authAxios()
    .get(`https://corporate-event-planner-api.herokuapp.com/api/events/vendors`)
      .then(response => {
        const vendorInfo = response.data;
        console.log("Character Info", vendorInfo);
        setVendor(vendorInfo);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>Event Vendor(s)</h2> 
      {vendor.map(vendors => {
        return (
          <EventCard
          key={vendors.id}
          name={vendors.name}
          />
        )
      })}

    </section>
  );

}
