import { ChangeEvent, useState } from 'react';
import { Button, Stack } from 'components';
import { Habit } from './Habit';

interface Habit {
  id: string;
  label: string;
  weeklyStreak: boolean[];
}

const newHabit = {
  id: 'id',
  label: '',
  weeklyStreak: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
};

export function HabitsList() {
  const [habitsList, setHabitsList] = useState<Habit[]>([
    newHabit,
  ]);

  const habitsListMarkup = habitsList.map(
    (habit: Habit, index: number) => (
      <Habit
        key={habit.id}
        label={habit.label}
        weeklyStreak={habit.weeklyStreak}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e, index)
        }
        onChecked={(dayIndex: number) =>
          handleChecked(dayIndex, index)
        }
      />
    ),
  );

  const buttonMarkup = (
    <Button
      fontSize="medium"
      label="New"
      variant="add"
      onClick={handleAddHabit}
    ></Button>
  );

  return (
    <Stack vertical>
      <Stack vertical spacing="tight">
        {habitsListMarkup}
      </Stack>
      {buttonMarkup}
    </Stack>
  );

  function handleAddHabit() {
    setHabitsList([...habitsList, newHabit]);
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) {
    const newHabitsList = [...habitsList];

    newHabitsList[index].label = e.target.value;
    setHabitsList(newHabitsList);
  }

  function handleChecked(dayIndex: number, index: number) {
    const newHabitsList = [...habitsList];
    newHabitsList[index].weeklyStreak[dayIndex] =
      !newHabitsList[index].weeklyStreak[dayIndex];

    setHabitsList(newHabitsList);
  }
}
