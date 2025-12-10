document.getElementById("clanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value;
  let q8 = document.getElementById("q8").value;
  let q9 = document.getElementById("q9").value;

  // FAIL CONDITIONS
  if (q1 === "no" ||
      q2 === "no" ||
      q5 === "no" ||
      q8 === "no" ||
      q9 === "no" ||
      (q3 === "no" && q4 === "no")) {

      window.location.href = "fail.html";
      return;
  }

  // PASS → Discord link page
  window.location.href = "pass.html";
});
