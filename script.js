const cats = [
  { img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg", desc: "당신은 포근한 치즈냥!" },
  { img: "https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg", desc: "당신은 부드러운 회색냥!" },
  { img: "https://cdn.pixabay.com/photo/2016/02/19/11/53/cat-1209282_1280.jpg", desc: "당신은 발랄한 삼색냥!" },
  { img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg", desc: "당신은 귀여운 검은냥!" }
];

function getSeed(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function showResult() {
  const name = document.getElementById("name").value.trim();
  const birth = document.getElementById("birth").value;

  if (!name || !birth) {
    alert("이름과 생년월일을 입력해주세요!");
    return;
  }

  const seed = getSeed(name + birth);
  const cat = cats[seed % cats.length];

  document.getElementById("catImage").src = cat.img;
  document.getElementById("catDesc").innerText = cat.desc;
  document.getElementById("result").classList.remove("hidden");
}

function retry() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("name").value = "";
  document.getElementById("birth").value = "";
}
