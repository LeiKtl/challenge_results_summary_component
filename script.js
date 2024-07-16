function getData () {
    fetch("data.json")
    .then (response => response.json())
    .then (data => {
        data.forEach( (element, index) => {
            let imgs = document.querySelectorAll(".content_summary_sections--details img") ;
            imgs[index].src = element.icon ; 

            let titles = document.querySelectorAll(".content_summary_sections--details-text") ;
            titles[index].textContent = element.category ;

            let nmbrs = document.querySelectorAll(".content_summary_sections--details-numbers") ;
            nmbrs[index].innerHTML = `${element.score} <span> / 100</span>` 
        });
    });
}

getData ();