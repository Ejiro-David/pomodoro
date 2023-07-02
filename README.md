TODO
-handle reset, it should stop the count down✅
-figure out why pressing play more than once speeds up the timer count✅ (overlapping setIntervals)
-implement pause ✅
-why is intervalId returning num?
-play button when pressed for the first time enteres pause by default
-switch to break time when session expires













1. When I click the element with the id of "reset", any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.


9. If the timer is running, the element with the id of "time-left" should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

10. If the timer is running and I click the element with id="start_stop", the countdown should pause.

11. If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.

12. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a break has begun.

13. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

14. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of "timer-label" should display a string indicating a session has begun.

15. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
Timer has not reached 00:00.


