export function PlatformFilter({platform, setPlatform, platforms}) {
  return (
    <select
      value={platform}
      onChange={(event) => setPlatform(event.target.value)}
    >
      <option value="all">All platforms</option>
      {platforms.map((platform) => (
        <option key={platform} value={platform}>
          {platform}
        </option>
      ))}
    </select>
  )
}
