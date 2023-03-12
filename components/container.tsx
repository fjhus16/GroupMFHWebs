type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-10 ism:px-20 bg-white">{children}</div>
}

export default Container
