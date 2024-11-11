const EventSearch = ({ placeholder }: { placeholder: string }) => {
  return (
    <form className="mt-4 w-full flex justify-center">
      <input type="text" className="eventSearch w-full md:w-[400px]" placeholder={placeholder} />
    </form>
  );
};

export default EventSearch;
