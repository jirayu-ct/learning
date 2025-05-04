'use client'

const error = ({error}: {error: Error}) => {
    console.log(error);
  return (
    <div>error about...</div>
  )
}
export default error