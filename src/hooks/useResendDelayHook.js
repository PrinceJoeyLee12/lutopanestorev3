import { useState, useCallback, useEffect } from 'react';

export const useResendDelayHook = ({ handleClickTrigger }) => {
  const [sendingCode, setSendingCode] = useState(false);
  const [resendIsClicked, setResendIsClicked] = useState(false);
  const [numberOfTimesInSendingCode, setNumberOfTimesInSendingCode] = useState(0);
  const [delayValueString, setDelayValueString] = useState('');

  const handleClick = useCallback(async () => {
    setSendingCode(true);
    setResendIsClicked(true);
    // eslint-disable-next-line no-return-assign
    setNumberOfTimesInSendingCode((prev) => (prev += 1));
    await handleClickTrigger();
    setResendIsClicked(false);
    setSendingCode(false);
  }, []);

  useEffect(() => {
    if (resendIsClicked && numberOfTimesInSendingCode > 0) {
      setResendIsClicked(false);
      startTimer(numberOfTimesInSendingCode * 30);
    }
  }, [numberOfTimesInSendingCode, resendIsClicked]);

  const startTimer = (duration) => {
    let timer = duration;
    let minutes;
    let seconds;
    const resendTimer = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0'.concat(minutes) : minutes;
      seconds = seconds < 10 ? '0'.concat(seconds) : seconds;

      setDelayValueString(` ${minutes}:${seconds}`);

      // eslint-disable-next-line
      if (--timer < 0) {
        setDelayValueString('');
        clearInterval(resendTimer);
      }
    }, 1000);
  };

  return {
    delayValueString,
    handleClick,
    sendingCode,
  };
};
