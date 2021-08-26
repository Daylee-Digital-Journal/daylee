import Head from 'next/head';
import { Typography } from 'components';
import { useSignupMutation } from 'types/withhooks';
import { useTheme } from 'providers/ThemeProvider';

export function Landing() {
  const { toggleLightMode } = useTheme();
  const [signupMutation, { loading }] = useSignupMutation();

  return (
    <div>
      <Head>
        <title>Daylee</title>
        <meta name="description" content="Daylee web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography element="h1">Hello</Typography>
      <button onClick={toggleLightMode}>toggle</button>
    </div>
  );

  async function handleSignupMutation() {
    const { data } = await signupMutation({
      variables: {
        args: {
          email: 'email',
          password: 'password',
          username: 'username',
        },
      },
    });
  }
}
