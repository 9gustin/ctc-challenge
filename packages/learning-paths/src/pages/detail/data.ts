export const getServerSideProps = async () => {
  const response = await fetch('https://dev.backend.devcrackthecode.net/api/learning-paths-all/ruta-de-aprendizaje-para-desarrollo-de-videojuegos/');
  const data = await response.json();
  return {
    props: {
      data,
    }
  }
}