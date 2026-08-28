export function LinkWrapper({ path, children }) {
  if (!path) {
    return <>{children}</>;
  }
  return (
    <a href={`/detail/${path}`} target="_self" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default LinkWrapper;