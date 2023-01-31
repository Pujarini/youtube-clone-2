const FilterButton = ({ filter }) => {
  return (
    <button className="border border-slate-300 p-2 rounded-lg bg-slate-200">
      {filter}
    </button>
  );
};

export default FilterButton;
