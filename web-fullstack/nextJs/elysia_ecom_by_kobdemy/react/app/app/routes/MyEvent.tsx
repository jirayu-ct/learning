const MyEvent = () => {
    return (
        <>
            <h1>MyEvent</h1>

            <button
                onClick={() => alert('Hello')}
            >
                click me
            </button>
            
            <div>
                <input type="checkbox"
                    onChange={(e) => alert(e.target.checked)}
                />
            </div>
        </>
    )
}
export default MyEvent