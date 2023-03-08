import { useLoaderData } from "react-router-dom";
import { appApi } from "../services";

export async function loader() {
  // const tableData = await appApi.getTableData();
  return { tableData: {} };
}
export default function HomePage() {
  const { tableData } = useLoaderData();
  return (
    <>
      <pre>{JSON.stringify(tableData, "", 2)}</pre>
    </>
  );
}
