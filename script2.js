// window.onload를 통해서 DOM 접근 불가 문제를 해결했다
// 더 좋은 해결방법은 body 하단에 script를 위치시키는 것이다.
window.onload = function() {    
    const domArrayLike = document.getElementsByClassName("root");
    const root = domArrayLike[0];
};

function Post (fetched) {
    this.userId = fetched.userId;
    this.id = fetched.id;
    this.title = fetched.title;
    this.body = fetched.body;
}

function makePostDom (post){
    try{
        if(false === post instanceof Post)     //Post type이 아니면 에러
            throw new Error();
        var form;
    
        form = document.createElement("div");
        form.setAttribute("id",post.id);
        form.innerHTML = "작성자: "+post.userId+"<br>" + "제목: "+post.title+"<br>"
            +"내용: "+post.body+"<br><br><br>";
        
        return form;
    } catch (e){
        alert('An argument should be type of Post.');
    }
}
fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
    console.log(response.json().then(function (data){       // 응답을 json형태로 파싱
      
        data.forEach((d) => {
            var post = new Post(d);                 //post인스턴스 생성
            var postDom = makePostDom(post);        //dom 생성
            document.body.appendChild(postDom);     //동적으로 dom추가
        });

        return data;
    } ));
});
