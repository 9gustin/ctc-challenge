import { FC } from "react";

const Home: FC<any> = (props: any): React.ReactNode => {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default Home;
