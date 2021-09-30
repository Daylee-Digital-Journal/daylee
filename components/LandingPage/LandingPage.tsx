import {
  Typography,
  Button,
  Input,
  Logo,
  Stack,
  TabInfo,
  ThemeToggle,
  Loader,
} from 'components';
import {
  useSigninLazyQuery,
  useUserAccountQuery,
} from 'types/withhooks';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import calendar from './Images/calendar.png';
import plant from './Images/plant.png';
import pomodoro from './Images/pomodoro.png';
import postit from './Images/postit.png';
import todo from './Images/todo.png';
import tracker from './Images/tracker.png';
import { useState, useEffect, useRef } from 'react';
import { URLS } from 'utils';

export function LandingPage() {
  const { data, refetch } = useUserAccountQuery({
    fetchPolicy: 'network-only',
  });
  const [signin, { loading }] = useSigninLazyQuery({
    nextFetchPolicy: 'network-only',
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const featureRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (featureRef.current) {
      goToFeatures();
    } else if (contactRef.current) {
      goToContact();
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerMarkup = (
    <Stack id="header" spread>
      <Logo />
      <Stack spacing="loose" center id="main-actions">
        <Button
          label="Our features"
          variant="nav"
          onClick={goToFeatures}
        />
        <Button
          label="Contact"
          variant="nav"
          onClick={goToContact}
        />
        <Button label="Use as guest" variant="primary" />
      </Stack>
    </Stack>
  );

  const mainTitlesMarkup = (
    <Stack
      vertical
      width="38rem"
      spacing="45px"
      id="mainTitles"
    >
      <Stack vertical width="30rem" id="bigTitle">
        <Typography wrap type="header1">
          A productivity app & digital journal
        </Typography>
      </Stack>
      <Typography wrap type="bigCaption">
        Making life easier by organizing your thoughts,
        schedule and life. Balance your work, projects,
        social life and personal growth.
      </Typography>
      <Button label="Use as guest" tight />
    </Stack>
  );

  const authBox = (
    <Stack
      shadow
      px="normal"
      py="normal"
      background="separatorBackgroundColor"
      width="20rem"
      vertical
      id="inputs"
      spacing="normal"
    >
      <Stack spacing="60px" vertical id="inputs-area">
        <Input
          value={email}
          onChange={setEmail}
          placeholder="your@email.com"
          label="Email"
        />
        <Input
          value={password}
          onChange={setPassword}
          placeholder="abcd1234!"
          label="Password"
        />
      </Stack>
      <div />
      <Button
        onClick={handleSigninMutation}
        label="Log in"
        disabled={loading}
      />
      <Button
        linkTo={URLS.SignUp}
        label="Sign up"
        variant="secondary"
      />
      <Button label="Use as a guest" variant="collapse" />
    </Stack>
  );

  const bodyMarkup = (
    <Stack id="body" center spread>
      {mainTitlesMarkup}
      {authBox}
    </Stack>
  );

  const gridMarkup = (
    <Stack
      center
      vertical
      spacing="extra-loose"
      id="features"
    >
      <Stack
        center
        vertical
        spacing="normal"
        id="middleMessage"
      >
        <Typography type="header2">
          Built to empower everyone
        </Typography>
        <Typography type="mediumCaption">
          Living more intentionally with Daylee’s
          self-actualizing features
        </Typography>
      </Stack>
      <div className={styles.Grid}>
        <GridItem
          image={tracker}
          title="Habit Tracker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={todo}
          title="To-Do List"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={pomodoro}
          title="Pomodoro Clock"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={calendar}
          title="Custom Calendar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={plant}
          title="Gratitude Practice"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
        <GridItem
          image={postit}
          title="Post-It Board"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
        />
      </div>
    </Stack>
  );

  const footerMarkup = (
    <Stack
      center
      vertical
      spacing="extra-loose"
      id="footer"
    >
      <Stack
        center
        vertical
        spacing="normal"
        id="bottomMessage"
      >
        <Typography type="header2">
          Help us grow with you
        </Typography>
        <Stack
          vertical
          center
          spacing="tight"
          id="message-caption"
        >
          <Stack
            center
            vertical
            spacing="2px"
            id="first-caption"
          >
            <Typography center wrap type="mediumCaption">
              Growth and self-actualization is at the center
              of what we do.
            </Typography>
            <Typography center wrap type="mediumCaption">
              Help us by sending your feedback, experience,
              bugs, extra features you would like to see,
              etc.
            </Typography>
          </Stack>
          <Stack spacing="tight" center id="note-msg">
            <Typography danger center wrap bold>
              Note:
            </Typography>{' '}
            <Typography
              type="mediumCaption"
              danger
              center
              wrap
            >
              {`if you choose to stay anonymous insert
              'Anonymous' your name instead of using a fake
              name`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack width="65rem" spread id="footer-content">
        <Stack vertical spacing="normal" id="footer-left">
          <Typography type="header2">
            You have...
          </Typography>
          <Stack
            id="footer-messages"
            vertical
            spacing="tight"
          >
            <Typography secondary type="header4">
              Feedback/comments for us?
            </Typography>
            <Typography secondary type="header4">
              Features you would like to see on Daylee?
            </Typography>
            <Typography secondary type="header4">
              Experienced issues or bugs?
            </Typography>
          </Stack>
          <Typography gradient>Let us know!</Typography>
        </Stack>
        <Stack
          width="25rem"
          spacing="60px"
          vertical
          id="footer-right"
        >
          <Input placeholder="John Doe" label="Your name" />
          <Input
            placeholder="your@email.com"
            label="Your email"
          />
          <Input
            placeholder="Hi, Daylee team..."
            label="Your message"
          />
          <Button label="Send Email" variant="secondary" />
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Stack id="wrapper" vertical center>
      <TabInfo title="Daylee | Maximize your productivity" />
      <ThemeToggle />
      {loading && <Loader />}
      <Stack
        vertical
        width="65rem"
        id="page"
        py="normal"
        spacing="15vh"
      >
        {headerMarkup}
        {bodyMarkup}
        <div ref={featureRef}>{gridMarkup}</div>
        <div ref={contactRef}>{footerMarkup}</div>
      </Stack>
    </Stack>
  );

  function handleSigninMutation() {
    signin({
      variables: {
        args: {
          email: email,
          password: password,
        },
      },
    });
  }

  function goToFeatures() {
    featureRef.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }

  function goToContact() {
    contactRef.current.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }
}

interface GridItemProps {
  title: string;
  description: string;
  image: StaticImageData;
}

function GridItem({
  title,
  description,
  image,
}: GridItemProps) {
  return (
    <div className={styles.GridItem}>
      <Image src={image} alt="Picture of the author" />
      <Stack
        center
        vertical
        py="normal"
        spacing="20px"
        width="280px"
        id="feature-text"
      >
        <Typography type="header4">{title}</Typography>
        <Typography center wrap type="bigText">
          {description}
        </Typography>
      </Stack>
    </div>
  );
}
