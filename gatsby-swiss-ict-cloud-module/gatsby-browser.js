export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This Content has been updated. ` + `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
