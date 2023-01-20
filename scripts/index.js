// 각 이미지 표시 함수
// 인수 전달 (idx)
const show = (idx) =>{
    const img1 = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어'];

    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${img1[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";     
}

// DOM 로드 후
document.addEventListener("DOMContentLoaded", () => {
    /*
    const i1 = document.querySelector("#imgIcon1");
    const i2 = document.getElementById("imgIcon2");
    const i3 = document.querySelector("#imgIcon3");

    // 인수 전달받게 되면 show()가 아니라 () => show(n)으로 작성해야한다
    i1.addEventListener("mouseover", () => show(0));
    i2.addEventListener("mouseover", () => show(1));
    i3.addEventListener("mouseover", () => show(2));
    */
    const imgIconItems = document.querySelectorAll(".imgIconItem");
    
    for (let [k, item] of imgIconItems.entries()){        
        item.addEventListener("mouseover", ()=>show(k));
    }
})