import loadUserData from "./GridTableApiCall";
import GridTableCard from "./child_component/GridTableCard";
const GridTable = () => {
  const users = loadUserData();
  return (
    <div
      className="grid grid-flow-row
    sm:gird-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3
    mx-auto p-4 gap-4"
    >
      {users.map((user, index) => (
        <GridTableCard user={user} key={index} />
      ))}
    </div>
  );
};

export default GridTable;
