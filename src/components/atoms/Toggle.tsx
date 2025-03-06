import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import nightwind from 'nightwind/helper';

export default function Toggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    nightwind.beforeTransition();
    if (theme !== 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return <button onClick={toggle}>
    {theme === 'dark' ? (
      <SunIcon />
    ) : (
      <MoonIcon />
    )}
  </button>;
}
