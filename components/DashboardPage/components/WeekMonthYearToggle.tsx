import { Stack, Button } from 'components';
import { useRoutingState } from 'hooks';

export function WeekMonthYearToggle() {
  const {
    get: { week, month, year },
    set,
    setToday,
  } = useRoutingState();

  const hasWeek = week != null;
  const hasMonth = month != null;
  const hasYear = year != null;

  const weekButtonMarkup = hasWeek ? (
    <Button
      disabled={!hasWeek}
      selected={hasWeek && hasMonth && hasYear}
      label="Week"
      variant="nav"
      onClick={handleWeekClick}
    />
  ) : (
    <Button
      label="Today"
      variant="nav"
      onClick={setToday}
    />
  );

  return (
    <Stack spread center width="80%" px="18rem" py="tight">
      {weekButtonMarkup}
      <Button
        disabled={!hasMonth}
        selected={!hasWeek && hasMonth && hasYear}
        label="Month"
        variant="nav"
        onClick={handleMonthClick}
      />
      <Button
        disabled={!hasYear}
        selected={!hasWeek && !hasMonth && hasYear}
        label="Year"
        variant="nav"
        onClick={handleYearClick}
      />
    </Stack>
  );

  function handleWeekClick() {
    set({ year, month, week: 1 });
  }
  function handleMonthClick() {
    set({ year, month });
  }
  function handleYearClick() {
    set({ year });
  }
}
