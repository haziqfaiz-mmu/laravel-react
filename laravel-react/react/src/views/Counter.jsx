import { useNavigate } from 'react-router-dom';

export default function Counter() {
    const navigate = useNavigate();

    function navigateHome(event) {
        navigate('/homepage ');
    }

    return (

        <div
            style={{

                textAlign:'center',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft:840,
                paddingRight:40,
                marginTop:10,
                height:40
            }}
        >
            <h1>Counter View</h1>
            <button type="button" onClick={navigateHome}>Home</button>

        </div>
    )
}
