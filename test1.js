const createElement=(arr)=>{
    // console.log(arr);
    // create group of elements
    // array map-> returns array
    //parameter ec of array
    const htmlElements=arr.map((ec) =>`<span class="btn">${ec}</span>`)
    // convert array to string (.join)
    console.log(htmlElements.join(" "));
}
const synonyms=["Apple","Banana","Cat"];
createElement(synonyms);