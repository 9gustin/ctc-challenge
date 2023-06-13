export const getServerSideProps = async () => {
  const response = await fetch('https://dev.backend.devcrackthecode.net/api/learning-paths/');
  const data = await response.json();
  return {
    props: {
      data,
    }
  }
}