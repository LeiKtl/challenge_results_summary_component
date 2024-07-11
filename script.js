function getData () {
    fetch("data.json")
    .then (response => response.json())
    .then (data => {
        // console.log(data)
        data.forEach(element => {
            let summarySections = document.getElementsByClassName("content_summary");
            let section = document.createElement("div").classList.add("content_summary_sections-" + `${data.category}`);

            let sectionDetails = document.createElement("div")

            summarySections.appendChild(section)
        });
    })
}

getData ();