export const Notification = ({ total }) => {
  return <div>{total === 0 && <p>There is no feedback.</p>}</div>;
};
