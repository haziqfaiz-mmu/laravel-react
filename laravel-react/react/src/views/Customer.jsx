import { useNavigate } from 'react-router-dom';

export default function Customer() {
    const navigate = useNavigate();

    function navigateHome(event) {
        navigate('/homepage');
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
            <h1>Customer View</h1>
            <button type="button" onClick={navigateHome}>Counter</button>

        </div>
    )
}
