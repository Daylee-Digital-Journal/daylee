import { Stack, Typography } from 'components';
import { Timer } from './Timer';
import { PomodoroBoard } from './PomodoroBoard';

export function Pomodoro() {
  return (
    <Stack
      width="33%"
      height="400px"
      py="normal"
      px="tight"
      vertical
      spacing="normal"
      background="widgetBackgroundColor"
    >
      <Typography type="header5">Pomodoro</Typography>
      <Timer />
      <PomodoroBoard />
    </Stack>
  );
}
