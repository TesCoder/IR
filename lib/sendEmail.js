
const sendEmail = async (data) => {
  return fetch('/api/send-email', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

export default sendEmail;