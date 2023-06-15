import {GetServerSideProps} from 'next';
import { getPath } from "../../services/paths/getPath";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const path = query.slug ? await getPath(query.slug.toString()) : null;

  if (!path) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      }
    }
  }

  return {
    props: {
      path,
    }
  }
}