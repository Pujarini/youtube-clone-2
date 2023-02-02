import { filterTags } from "../constants/constants";
import FilterButton from "./FilterButton";

const FilterList = () => {
  return (
    <div className="flex gap-2 m-2">
      {filterTags.map((filter) => {
        return <FilterButton filter={filter} />;
      })}
    </div>
  );
};

export default FilterList;
