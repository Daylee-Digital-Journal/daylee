import moment from 'moment';
import { useState, useEffect } from 'react';
import { Stack, Typography, Button } from 'components';

interface TimerProps {
  round: number;
  setRound: any;
}

export function Timer({ round, setRound }: TimerProps) {
  let workTime = 25 * 60;
  let breakTime = 5;
  const [time, setTime] = useState<number>(workTime);
  const [clock, setClock] = useState<boolean>(true);
  const [countdown, setCountdown] =
    useState<boolean>(false);
  const [workState, setWorkState] =
    useState<boolean>(false);

  // const workTime = moment.duration({
  //   seconds: 0,
  //   minutes: 25,
  // });
  // console.log(workTime.minutes());
  const formattedTimeLeft = moment.duration(workTime, 's');
  // .format('mm:ss');
  console.log(formattedTimeLeft);
  // .format('mm:ss', { trim: false });

  console.log(formattedTimeLeft);

  useEffect(() => {
    if (time === 0) {
      setWorkState((workState) => !workState);
      if (workState === false) {
        setTime(breakTime);
        setRound((round: number) => round + 1);
      }
      if (workState === true) setTime(workTime);
    }

    if (countdown && time > 0) {
      setTimeout(() => {
        setClock((clock) => !clock);
      }, 1000);
      setTime(time - 1);
    }
  }, [countdown, clock, workState]);

  return (
    <Stack
      center
      round
      background="gradient"
      width="230px"
      height="230px"
      justifyCenter
    >
      <Stack
        vertical
        center
        round
        background="widgetBackgroundColor"
        width="210px"
        height="210px"
        py="20px"
        spacing="tight"
      >
        {workState ? (
          <Stack
            background="mainBackgroundColor"
            py="tight"
            px="tight"
            opacity="0.7"
          >
            <Typography type="smallText" uppercase bold>
              Break
            </Typography>
          </Stack>
        ) : (
          <Stack
            background="mainBackgroundColor"
            py="tight"
            px="tight"
            opacity="0.7"
          >
            <Typography type="smallText" uppercase bold>
              Work
            </Typography>
          </Stack>
        )}
        <Typography type="header1" thin>
          00:{time}
        </Typography>
        <Button
          label={countdown ? 'Stop' : 'Start'}
          variant="nav"
          onClick={startCountdown}
        />
      </Stack>
    </Stack>
  );

  function startCountdown() {
    if (time > 0) {
      setCountdown(!countdown);
    }
  }
}
