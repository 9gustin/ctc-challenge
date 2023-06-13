export default function Detail(props: any): React.ReactNode {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}
