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
import { useUserSigninLazyQuery } from 'types/withhooks';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import calendar from './Images/calendar.svg';
import gratitude from './Images/gratitude.svg';
import pomodoro from './Images/pomodoro.svg';
import postit from './Images/postit.svg';
import todo from './Images/todo.svg';
import tracker from './Images/tracker.svg';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { URLS } from 'utils';
//commit test A.J.U.U
export function LandingPage({ isGuest, setIsGuest }: any) {
  const router = useRouter();

  const [signin, { loading }] = useUserSigninLazyQuery({
    nextFetchPolicy: 'network-only',
    onCompleted(data) {
      if (data.userSignin.email != null) {
        router.reload();
      }
    },
    onError(error) {
      console.log('useUserSigninLazyQuery', error);
    },
  });

  const topRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    goToTop();
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerMarkup = (
    <Stack id="header" spread>
      <div onClick={goToHome}>
        <Logo />
      </div>
      <Stack spacing="normal" center id="main-actions">
        <ThemeToggle />
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
        <Button
          label="Use as guest"
          variant="secondary"
          onClick={() => setIsGuest(true)}
        />
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
      <Button
        label="Use as guest"
        tight
        onClick={() => setIsGuest(true)}
      />
    </Stack>
  );

  const authBox = (
    <Stack
      shadow
      px="normal"
      py="normal"
      background="widgetBackgroundColor"
      width="23rem"
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
          noAutocomplete
        />
        <Input
          value={password}
          onChange={setPassword}
          placeholder="abcd1234!"
          label="Password"
          secure
          noAutocomplete
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
      <div></div>
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
          description="Build new behaviour and stick with your habits with our daily, weekly & monthly tracking system."
        />
        <GridItem
          image={todo}
          title="To-Do List"
          description="Create and manage lists of tasks that will help you achieve your day-to-day productivity goals."
        />
        <GridItem
          image={pomodoro}
          title="Pomodoro Clock"
          description="Experience your flow state and perform focused deep work with our precise timed sessions."
        />
        <GridItem
          image={calendar}
          title="Custom Calendar"
          description="Schedule, plan ahead and have a better overview of your day, week & month with our calendar tool."
        />
        <GridItem
          image={gratitude}
          title="Gratitude Practice"
          description="Write few words of gratitude a day to help you be more forgiving, patient and mindful of both your successes and misses."
        />
        <GridItem
          image={postit}
          title="Post-It Board"
          description="Highlight your most important tasks, take quick notes you need to remember and easily access information."
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
      {loading && <Loader />}
      <Stack
        vertical
        width="65rem"
        id="page"
        py="normal"
        spacing="15vh"
      >
        <div ref={topRef}>{headerMarkup}</div>
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

  function goToHome() {
    router.reload();
  }

  function goToTop() {
    topRef.current?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  function goToFeatures() {
    featureRef.current?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  function goToContact() {
    contactRef.current?.scrollIntoView({
      block: 'start',
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
