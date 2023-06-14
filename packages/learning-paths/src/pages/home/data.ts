import { getAllPaths } from "../../services/paths/getAllPaths";

export const getServerSideProps = async () => {
  const paths = await getAllPaths();

  return {
    props: {
      paths,
    }
  }
}