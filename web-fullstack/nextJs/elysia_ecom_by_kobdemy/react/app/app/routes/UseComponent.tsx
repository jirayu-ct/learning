import Button from "~/components/Button"


const UseComponent = () => {
  return (
    <div style={{ marginTop: '10px',  marginLeft: '10px' }}>
        <Button label="Button1" />
        <Button label="Button2" backgroundColor="red" >
            <i className="fa fa-check"></i>
            <span>Save Now</span>
        </Button>

        <Button label="Button3" ></Button>
    </div>
  )
}
export default UseComponent