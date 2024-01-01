const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for(item of lists){
    item.addEventListener("dragstart", (e)=>{
        let selectedElement = e.target;

        rightBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        });

        rightBox.addEventListener('drop', (e)=>{
            rightBox.appendChild(selectedElement);
            selectedElement= null;
        });

        // ============================

        leftBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        });

        leftBox.addEventListener('drop', (e)=>{
            leftBox.appendChild(selectedElement);
            selectedElement= null;
        });
    });
}