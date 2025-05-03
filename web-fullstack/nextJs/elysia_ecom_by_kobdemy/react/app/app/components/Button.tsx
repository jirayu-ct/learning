

const Button = ({
    label,
    children
}: {
    label: string,
    backgroundColor?: string,
    children?: React.ReactNode
}) => {

  return <button className="button">
    {
        children != null ? children: label
    }
  </button>
}
export default Button