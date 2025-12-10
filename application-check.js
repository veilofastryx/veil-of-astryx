document.getElementById("applicationForm").onsubmit = function (e) {
  e.preventDefault();

  // collect answers
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  const q4 = document.querySelector('input[name="q4"]:checked')?.value;
  const q5 = document.querySelector('input[name="q5"]:checked')?.value;
  const q6 = document.querySelector('input[name="q6"]:checked')?.value;
  const q7 = document.querySelector('input[name="q7"]:checked')?.value;
  const q8 = document.querySelector('input[name="q8"]:checked')?.value;
  const q9 = document.querySelector('input[name="q9"]:checked')?.value;

  // rejection rules:
  const autoReject = ["no"]; // all these answers reject

  if (
    autoReject.includes(q1) ||
    autoReject.includes(q2) ||
    autoReject.includes(q4) ||
    autoReject.includes(q5) ||
    autoReject.includes(q8) ||
    autoReject.includes(q9)
  ) {
    window.location.href = "fail.html";
    return;
  }

  // if Q3 = no but Q4 = yes → still pass
  // Q7 has a special answer: "six"

  // otherwise pass
  window.location.href = "pass.html";
};
