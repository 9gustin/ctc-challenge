export default function Detail(props: any): React.ReactNode {
  return (
    <div>
      <h1>Detail</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}
