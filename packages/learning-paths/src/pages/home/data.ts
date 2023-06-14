export const getServerSideProps = async (context: any) => {
  const country = context.req.geo;
  const response = await fetch('https://dev.backend.devcrackthecode.net/api/learning-paths/');
  const data = await response.json();

  return {
    props: {
      data,
      country,
    }
  }
}