import {Alert} from "@material-tailwind/react";


type Props = {
    alerts: Array<RequestError>
}

const renderMessages = (alerts: Array<RequestError>) => {
    return alerts.map((alert, key) => {
        return (<Alert key={key} variant='gradient' color='red'>
            <div className='font-bold'>{alert.title}</div>
            {alert.message}
        </Alert>)
    })
}

function AlertBox(props: Props) {
    return (
        <>
            {renderMessages(props.alerts)}
        </>
    );
}

export default AlertBox;
