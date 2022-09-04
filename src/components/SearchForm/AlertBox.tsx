import {Alert} from "@material-tailwind/react";


type Props = {
    alerts: Array<RequestError>
}

const renderMessages = (alerts: Array<RequestError>) => {
    return alerts.map((alert, key) => {
        return (<Alert icon={
            <i className='fad fa-exclamation-triangle fa-xl'></i>} key={key} variant='gradient' color='red'>
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
