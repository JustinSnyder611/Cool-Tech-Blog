const messagePost = async (event) => {
    event.preventDefault();

    const message = document.querySelector('#message-input').value.trim();

    if (message) {
        const response = await fetch('/api/message-routes', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post message.');
        }
    }
};



document
    .querySelector('.message-form')
    .addEventListener('submit', messagePost);