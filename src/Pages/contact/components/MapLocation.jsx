const MapLocation = () => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <iframe
        width="90%"
        height="500"
        className=" rounded-[15px]"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dhanmondi,dhaka.+(e-shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte"></a>
      </iframe>
    </div>
  );
};

export default MapLocation;
