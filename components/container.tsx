type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-5 ism:px-10 z-10 bg-white">{children}</div>
}

export default Container
