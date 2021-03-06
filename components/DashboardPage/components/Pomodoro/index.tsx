import { useState } from 'react';
import { Stack } from 'components';
import { Timer } from './Timer';
import { PomodoroBoard } from './PomodoroBoard';
import { usePomodoroUpdateMutation } from 'types/withhooks';

interface Props {
  round: number;
}

export function Pomodoro({ round: roundFromProps }: Props) {
  const [round, setRound] =
    useState<number>(roundFromProps);
  const [update, result] = usePomodoroUpdateMutation();

  return (
    <Stack center vertical spacing="normal">
      <Timer round={round} setRound={setRound} />
      <PomodoroBoard round={round} />
    </Stack>
  );
}
