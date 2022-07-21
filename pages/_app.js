import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const message = process.env.NEXT_PUBLIC_MESSAGE;

  return (
    <>
      <div>{message}</div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
