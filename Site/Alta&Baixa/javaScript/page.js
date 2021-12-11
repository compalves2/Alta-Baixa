var side_num = document.getElementsByClassName("pageSelect");
var artigos = document.getElementsByClassName("artigo");

var currentPage = -1;

for (var i = 0; i < side_num.length; i++) {
    side_num[i].number = i;
    side_num[i].page = artigos[i];
    side_num[i].addEventListener("click", goPage);
}

function goPage() {
    if(currentPage==-1)
        cubeRot();
        

    if(this.number==0 && currentPage==0) {
        currentPage = -1;
        cubeRot();
    } 
    
    else {
        currentPage = this.number;
        if (currentPage == 14){
            cubeRot();
            currentPage = -1;
        }
    }
    for (var i = 0; i < side_num.length; i++) {
        if (i <= currentPage) {
            if (side_num[i].page.classList.contains("close")) {
                side_num[i].page.classList.remove("close");
            }
        } else {
            if (!side_num[i].page.classList.contains("close")) {
                side_num[i].page.classList.add("close");
            }
        }
    }


}
