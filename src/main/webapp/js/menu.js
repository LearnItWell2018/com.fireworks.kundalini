function move() {
  if (document.getElementById("state").classList.contains("open")) {

    document.getElementById("state").classList.remove("open");
    document.getElementById("state").classList.add("close");

    document.getElementById("old").classList.add("close-old");
    document.getElementById("kid").classList.add("close-kid");
    document.getElementById("men").classList.add("close-men");
    document.getElementById("women").classList.add("close-women");

    document.getElementById("old").classList.remove("move-old");
    document.getElementById("men").classList.remove("move-men");
    document.getElementById("kid").classList.remove("move-kid");
    document.getElementById("women").classList.remove("move-women");

  } else {

    document.getElementById("state").classList.add("open");
    document.getElementById("state").classList.remove("close");

    document.getElementById("old").classList.add("move-old");
    document.getElementById("men").classList.add("move-men");
    document.getElementById("kid").classList.add("move-kid");
    document.getElementById("women").classList.add("move-women");

    document.getElementById("old").classList.remove("close-old");
    document.getElementById("kid").classList.remove("close-kid");
    document.getElementById("men").classList.remove("close-men");
    document.getElementById("women").classList.remove("close-women");

  }
}
