const Notification = ({ isError, message }) => {
    if (message === null) return null

    const notifStyle = {}
    if (isError) { notifStyle.color = 'red' }
    else { notifStyle.color = 'green' }

    return (
        <div className="notif" style={notifStyle}>
            {message}
        </div>
    )
}

export default Notification
