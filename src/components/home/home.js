export default function Home(){

    const homeStyle = {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5em',
      };

    return(
        <div style={homeStyle}>
            <h1>Welcome to Hamon HRMS</h1>
        </div>
    )
}