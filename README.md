TODO
-handle reset, it should stop the count down
-figure out why pressing play more than once speeds up the timer count
-implement pause













const handlePlay = () => {
    setInPlay(!inPlay);
    let date = new Date().getTime() / 1000;
    let nextDate = new Date().getTime() / 1000 + 1;
    let inPlayValue = inPlay;

    if (inPlayValue) {
      let interval = setInterval(() => {
        date = new Date().getTime() / 1000;
        if (date > nextDate) {
          setDisplayTime((prev) => {
            return prev - 1;
          });
          nextDate += 1;
        }
      }, 1000);
    } else if (!inPlayValue) {
    }

    console.log('now:', date, "later: ", nextDate);
  };

