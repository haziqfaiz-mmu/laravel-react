import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    function navigateCounter(event) {
        navigate('/counter');
    }
    function navigateCustomer(event) {
        navigate('/customer');
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
            <h1>Welcome</h1>
        <button type="button" onClick={navigateCounter}>Counter</button>
            <button type="button" onClick={navigateCustomer}>Customer</button>
            </div>
    )
}
