export default function logError(error) {
  const {
    message,
    response: { data },
  } = error;
  console.log(`Message: ${message}, Response: ${data}`);
}
