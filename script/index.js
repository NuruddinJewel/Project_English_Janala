const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then(res=>res.json()) //promise of json
    .then((json)=> displayLesson(json.data));
};

// Remove active
const removeActive=()=>{
    const lessonButtons=document.querySelectorAll(".lesson-btn")
    // console.log(lessonButtons)
    lessonButtons.forEach(btn=>btn.classList.remove("active"));
}




// Stage-2(Calling)
const loadLevelWord=(id)=>{
    // console.log(id);
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url);
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
       removeActive(); //Not clicked button inactive
        const clickBtn=document.getElementById(`lesson-btn-${id}`)
    //    console.log("clickBtn") 
    clickBtn.classList.add("active") // Clicked button active
       displayLevelWord(data.data)});

};

//Stage-2 (Receive words)
const displayLevelWord=(words)=>{
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML=" ";//innerHTML empty
    if(words.length==0){
        // alert("no word detected");
        wordContainer.innerHTML=`<div class="text-center col-span-full rounded py-8 space-y-4 font-bangla">
        <img class="mx-auto"  src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
</div>`;
        return;
    }
//     {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }



    words.forEach((word) => {
        console.log(word);
    const card=document.createElement("div");
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-2">
    <h2 class="font-bold text-2xl">${word.word ? word.word:"শব্দ পাওয়া যায়নি"}</h2>
    <p class="font-semibold">Meaning / Pronunciation</p>
    <div class="text-2xl font-medium font-bangla">${word.meaning ? word.meaning :"অর্থ পাওয়া যায়নি"} / 
    ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি" }</div>
    <div class="flex justify-between items-center">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
    </div>
</div>`;
    wordContainer.append(card);
    })

};

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
btnDiv.innerHTML= `<button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord
(${lesson.level_no})"  class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
</button>`

        // b) Append into container

levelContainer.append(btnDiv);

}
};
loadLessons();
