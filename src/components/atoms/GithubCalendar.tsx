import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
  const explicitTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  }
  return (
    <GitHubCalendar
      username='muhammadrayhanr'
      blockSize={13}
      blockMargin={7.5}
      blockRadius={2}
      fontSize={13}
      theme={explicitTheme}
    />
  );
};

export default GithubCalendar;
