const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then(res=>res.json()) //promise of json
    .then((json)=> displayLesson(json.data))
};
// Stage-2(Calling)
const loadLevelWord=(id)=>{
    // console.log(id);
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url);
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayLevelWord(data.data));

};
//Stage-2 (Receive words)
const displayLevelWord=(words)=>{
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    // wordContainer.innerHtml="";//innerHtml empty
    words.forEach((word) => {
        console.log(word);
    const card=document.createElement("div");
    card.innerHTML=`
    <p>Apple</p>`;
    wordContainer.append(card);
    })

}

// Display
const displayLesson=(lessons)=>{
//   console.log(lessons)
// 1. get the container & empty
const levelContainer=document.getElementById("level-container")
levelContainer.innerHTML="";
// 2. get into every lessons
for(let lesson of lessons) {
console.log(lesson)
        // a) Create Element
const btnDiv = document.createElement("div");
btnDiv.innerHTML=`<button onclick="loadLevelWord
(${lesson.level_no})" href="" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
</button></li>`

        // b) Append into container

levelContainer.append(btnDiv);

}
};
loadLessons();